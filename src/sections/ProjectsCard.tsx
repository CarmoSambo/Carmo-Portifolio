import React from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

interface Props {
  project: Project;
  reverse: boolean;
  theme: "light" | "dark";
  visitBtn: string;
}

const ProjectCard: React.FC<Props> = ({ project, reverse, theme, visitBtn }) => {
  return (
    <div className={`project-card project-card--${theme}${reverse ? " project-card--reverse" : ""}`}>
      <div className="project-text">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((t, i) => (
            <span key={i} className="project-tag">{t}</span>
          ))}
        </div>

        <a
          href={project.link}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {visitBtn}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>

      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
    </div>
  );
};

export default ProjectCard;
