import React from 'react';
import './Hero.css';
import { useTheme } from '../theme/ThemeContext';
import { useLanguage } from '../i18n/LanguageContext';
import cvPT from '../assets/curriculum vitae/CURRICULUM VITAE(PT).pdf';
import cvEN from '../assets/curriculum vitae/CV_Carmo_Sambo_EN.pdf';
import carmoSamboImg from '../assets/images/carmosambo.jpg';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const { t, language } = useLanguage();
  const cvFile = language === 'pt' ? cvPT : cvEN;
  const cvFileName = language === 'pt' ? 'CV_Carmo_Sambo_PT.pdf' : 'CV_Carmo_Sambo_EN.pdf';

  return (
    <section id="Hero" className={`hero hero--${theme}`}>
      <div className="hero-blob hero-blob--1" />
      <div className="hero-blob hero-blob--2" />

      <div className="hero-container">
        <div className="hero-text">
          <span className="hero-badge">{t.hero.badge}</span>

          <h1 className="hero-name">
            Carmo<br />
            <span className="hero-name-gradient">Sambo</span>
          </h1>

          <h2 className="hero-role">{t.hero.role}</h2>

          <p className="hero-desc">{t.hero.description}</p>

          <div className="hero-buttons">
            <a href={cvFile} download={cvFileName} className="btn-primary">
              {t.hero.cv}
            </a>
            <a href="#contact" className="btn-secondary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              {t.hero.contact}
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/carmo-sambo-043b741b7/" target="_blank" rel="noreferrer" className="hero-social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/carmosambo" target="_blank" rel="noreferrer" className="hero-social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-ring" />
          <div className="hero-image">
            <img src={carmoSamboImg} alt="Carmo Sambo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
