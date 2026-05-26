import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useTheme } from "../theme/ThemeContext";
import { useLanguage } from "../i18n/LanguageContext";

// ── Preenche com os teus IDs do EmailJS ──────────────────────
const EMAILJS_SERVICE_ID  = "service_e7tvugg";
const EMAILJS_TEMPLATE_ID = "template_yyism7i";
const EMAILJS_PUBLIC_KEY  = "-pnD9qXP5iY3RmW_h";
// ─────────────────────────────────────────────────────────────

type Status = "idle" | "sending" | "success" | "error";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section id="contact" className={`contact contact--${theme}`}>
      <div className="contact-inner">

        {/* ── Info ── */}
        <div className="contact-info">
          <span className="contact-label">{t.contact.label}</span>
          <h2 className="contact-title">{t.contact.title}</h2>
          <p className="contact-desc">{t.contact.description}</p>

          <div className="contact-details">
            <a href="mailto:carmosambo@hotmail.com" className="contact-detail-item">
              <span className="contact-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              carmosambo@hotmail.com
            </a>

            <a href="https://www.linkedin.com/in/carmo-sambo-043b741b7/" target="_blank" rel="noreferrer" className="contact-detail-item">
              <span className="contact-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </span>
              LinkedIn
            </a>

            <a href="https://github.com/carmosambo" target="_blank" rel="noreferrer" className="contact-detail-item">
              <span className="contact-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </span>
              GitHub
            </a>
          </div>
        </div>

        {/* ── Form ── */}
        <form ref={formRef} className={`contact-form contact-form--${theme}`} onSubmit={handleSubmit} noValidate>

          <div className="contact-row">
            <div className="contact-field">
              <label className="contact-field-label">{t.contact.nameLabel}</label>
              <input
                name="from_name"
                type="text"
                placeholder={t.contact.namePlaceholder}
                className="contact-input"
                required
              />
            </div>
            <div className="contact-field">
              <label className="contact-field-label">{t.contact.emailLabel}</label>
              <input
                name="from_email"
                type="email"
                placeholder={t.contact.emailPlaceholder}
                className="contact-input"
                required
              />
            </div>
          </div>

          <div className="contact-field">
            <label className="contact-field-label">{t.contact.subjectLabel}</label>
            <input
              name="subject"
              type="text"
              placeholder={t.contact.subjectPlaceholder}
              className="contact-input"
              required
            />
          </div>

          <div className="contact-field">
            <label className="contact-field-label">{t.contact.messageLabel}</label>
            <textarea
              name="message"
              placeholder={t.contact.messagePlaceholder}
              className="contact-textarea"
              required
            />
          </div>

          <button
            type="submit"
            className={`contact-button${status === "sending" ? " contact-button--loading" : ""}`}
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <>
                <span className="contact-spinner" />
                {t.contact.sending}
              </>
            ) : (
              <>
                {t.contact.sendBtn}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </>
            )}
          </button>

          {status === "success" && (
            <div className="contact-feedback contact-feedback--success">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              {t.contact.success}
            </div>
          )}

          {status === "error" && (
            <div className="contact-feedback contact-feedback--error">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {t.contact.error}
            </div>
          )}
        </form>

      </div>
    </section>
  );
};

export default Contact;
