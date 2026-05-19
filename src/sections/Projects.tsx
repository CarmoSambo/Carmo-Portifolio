import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectsCard";
import { useTheme } from "../theme/ThemeContext";
import { useLanguage } from "../i18n/LanguageContext";

const projectMeta = [
  {
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/src/assets/images/Perfectus.png",
    link: "https://perfectus.co.mz",
  },
  {
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/src/assets/images/Blast.png",
    link: "https://blast.co.mz",
  },
  {
    tech: ["React", "Spring Boot", "PostgreSQL"],
    image: "/src/assets/images/QuemQuerSerMilionario.png",
    link: "https://milionario-carmo.vercel.app/",
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
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
