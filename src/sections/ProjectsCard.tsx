import React, { useState } from "react";

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
  githubBtn: string;
}

const thumbnailUrl = (link: string) =>
  `https://image.thum.io/get/width/900/crop/600/noanimate/${link}`;

const ProjectCard: React.FC<Props> = ({ project, reverse, theme, visitBtn, githubBtn }) => {
  const [thumbnailFailed, setThumbnailFailed] = useState(false);
  const hasImage = Boolean(project.image && project.image.trim());
  const previewSrc = hasImage ? project.image : thumbnailUrl(project.link);
  const isGithub = project.link.includes("github.com");

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
          {isGithub ? (
            <>
              {githubBtn}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.08 3.29 9.39 7.86 10.91 0.57 0.11 0.78-0.25 0.78-0.55 0-0.27-0.01-1.17-0.02-2.12-3.2 0.7-3.87-1.36-3.87-1.36-0.52-1.33-1.28-1.68-1.28-1.68-1.04-0.71 0.08-0.7 0.08-0.7 1.16 0.08 1.77 1.19 1.77 1.19 1.02 1.75 2.68 1.25 3.33 0.95 0.1-0.74 0.4-1.25 0.72-1.54-2.55-0.29-5.24-1.28-5.24-5.69 0-1.26 0.45-2.29 1.19-3.1-0.12-0.29-0.52-1.46 0.11-3.05 0 0 0.97-0.31 3.18 1.18 0.92-0.26 1.91-0.39 2.89-0.39 0.98 0 1.97 0.13 2.89 0.39 2.21-1.49 3.18-1.18 3.18-1.18 0.63 1.59 0.23 2.76 0.11 3.05 0.74 0.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.69 0.42 0.36 0.78 1.07 0.78 2.15 0 1.55-0.01 2.8-0.01 3.18 0 0.31 0.21 0.67 0.79 0.55C20.21 21.39 23.5 17.07 23.5 12c0-6.35-5.15-11.5-11.5-11.5z"/>
              </svg>
            </>
          ) : (
            <>
              {visitBtn}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </>
          )}
        </a>
      </div>

      <div className="project-image">
        {thumbnailFailed ? (
          <div className="project-image-placeholder">
            <span>{project.title.charAt(0)}</span>
          </div>
        ) : (
          <img
            src={previewSrc}
            alt={project.title}
            loading="lazy"
            onError={() => setThumbnailFailed(true)}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
