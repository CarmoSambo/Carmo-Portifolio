import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectsCard";
import { useTheme } from "../theme/ThemeContext";
import { useLanguage } from "../i18n/LanguageContext";
import tradingviewImg from "../assets/images/tradingview.png";

const projectMeta = [
  {
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "",
    link: "https://perfectus.co.mz",
  },
  {
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "",
    link: "https://blast.co.mz",
  },
  {
    tech: ["React", "Spring Boot", "PostgreSQL"],
    image: "",
    link: "https://milionario-carmo.vercel.app/",
  },
  {
    tech: ["React", "HTML", "CSS", "TypeScript", "TailwindCSS", "Vite"],
    image: "",
    link: "https://carmosambo-universalconsultingservi.vercel.app/",
  },
  {
    tech: ["React", "HTML", "CSS", "TypeScript", "Vite"],
    image: "",
    link: "https://joelle-art.vercel.app/",
  },
  {
    tech: ["Pine"],
    image: tradingviewImg,
    link: "https://github.com/CarmoSambo/carmobot-tradingview",
  },
  {
    tech: ["C++", "mq5"],
    image: "",
    link: "https://github.com/CarmoSambo/Carmo-Metatrader",
  },
];

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const projects = t.projects.items.map((item, i) => ({
    ...item,
    ...projectMeta[i],
  }));

  return (
    <section id="projects" className={`projects projects--${theme}`}>
      <div className="projects-header">
        <span className="projects-label">{t.projects.label}</span>
        <h2 className="projects-title">{t.projects.title}</h2>
        <p className="projects-subtitle">{t.projects.subtitle}</p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            reverse={index % 2 !== 0}
            theme={theme}
            visitBtn={t.projects.visitBtn}
            githubBtn={t.projects.githubBtn}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
