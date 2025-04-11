import { MdArrowOutward } from "react-icons/md";
import "./styles/Work.css";

interface Project {
  title: string;
  description: string;
  tools: string;
  image: string;
  link?: string;
  alt?: string;
}

const Work = () => {
  const projects: Project[] = [
    {
      title: "SerenitySphere",
      description: "Mental Health Platform",
      tools: "Vite, React, JSX, Gemini API, Vercel v0",
      image: "/images/SerenitySphere.png",
      link: "https://serenity-sphere-beta.vercel.app",
      alt: "SerenitySphere project screenshot",
    },
    {
      title: "MediConnect",
      description: "Medication Management Solution",
      tools: "React.js, Vite, TailwindCSS, Express.js, Node.js, MongoDB",
      image: "/images/MediConnect.png",
      link: "https://medi-connect-delta.vercel.app/",
      alt: "MediConnect project screenshot",
    },
    {
      title: "FlowCare",
      description: "Menstrual Health Management",
      tools: "React.js, Vite, TailwindCSS, Express.js, Node.js, MongoDB",
      image: "/images/FlowCare.png",
      link: "https://flow-care.vercel.app",
      alt: "FlowCare project screenshot",
    },
    {
      title: "WebLenses",
      description: "Chrome Extension for DOM Version Control",
      tools: "React, TypeScript, TailwindCSS, AI Assistants",
      image: "/images/WebLenses.png",
      alt: "WebLenses project screenshot",
    },
    {
      title: "AIDucate (EduPlay)",
      description: "AI-Powered Learning Platform",
      tools: "React, TailwindCSS, Recoil, Framer Motion, TypeScript, Gemini API",
      image: "/images/EduPlay.png",
      link: "https://edu-play-nine.vercel.app/",
      alt: "AIDucate project screenshot",
    },
  ];

  return (
    <section className="work-section" id="work">
      <div className="work-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface WorkImageProps {
  image: string;
  alt?: string;
  link?: string;
}

const WorkImage = ({ image, alt, link }: WorkImageProps) => {
  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
      >
        {link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img 
          src={image} 
          alt={alt || "Project preview"} 
          loading="lazy"
          className="work-img"
        />
      </a>
    </div>
  );
};

export default Work;