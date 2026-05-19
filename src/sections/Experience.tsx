import React from "react";
import "./Experience.css";
import { useTheme } from "../theme/ThemeContext";
import { useLanguage } from "../i18n/LanguageContext";

const tags = [
  ["JavaScript", "React", "Spring Boot"],
  ["Angular", "TypeScript", "PostgreSQL"],
];

const Experience: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section id="experience" className={`experience experience--${theme}`}>
      <div className="experience-header">
        <span className="experience-label">{t.experience.label}</span>
        <h2 className="experience-title">{t.experience.title}</h2>
        <p className="experience-subtitle">{t.experience.subtitle}</p>
      </div>

      <div className="timeline">
        <div className="timeline-line" />

        {t.experience.items.map((exp, i) => (
          <div key={i} className={`timeline-item ${i % 2 === 0 ? "timeline-item--left" : "timeline-item--right"}`}>
            <div className="timeline-dot" />

            <div className={`timeline-card timeline-card--${theme}`}>
              <div className="timeline-card-top">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <p className="timeline-company">{exp.company}</p>
                </div>
                <span className="timeline-period">{exp.period}</span>
              </div>

              <p className="timeline-desc">{exp.description}</p>

              <div className="timeline-tags">
                {tags[i].map((tag) => (
                  <span key={tag} className="timeline-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
