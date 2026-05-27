import { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    num: "01",
    title: "Healthcare Website",
    type: "Full Stack Web Application",
    desc:
      "A full-stack healthcare platform for managing patient information and services. Features secure JWT authentication, responsive UI, and efficient data handling with MongoDB backend.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "React"],
    color: "#a855f7",
    emoji: "🏥",
  },
  {
    num: "02",
    title: "Face Expression Recognition",
    type: "AI-Based Web Application",
    desc:
      "Web application detecting facial expressions and predicting emotions in real-time. Integrates face detection, emotion recognition with machine learning for real-time mood analysis.",
    tags: ["Python", "Machine Learning", "JavaScript", "Face-API"],
    color: "#e879f9",
    emoji: "🤖",
  },
  {
    num: "03",
    title: "Campus Event Hub",
    type: "Event Management Platform",
    desc:
      "Web platform to manage and display campus event details and participation. User-friendly dashboard for event listing, registration, and real-time data management for students.",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    color: "#60a5fa",
    emoji: "🎓",
  },
  {
  num: "04",
  title: "Blood Donation Connect",
  type: "Healthcare & Social Impact Platform",
  desc:
    "A blood donation platform connecting donors and recipients in real-time. Features donor registration, blood group filtering, emergency requests, and location-based donor search for faster assistance.",
  tags: ["React", "Node.js", "MongoDB", "Express.js"],
  color: "#ef4444",
  emoji: "🩸",
},

{
  num: "05",
  title: "Medicine Tracker",
  type: "Health Monitoring Application",
  desc:
    "Smart medicine reminder and tracking system designed to improve medication adherence. Users can schedule medicines, receive reminders, track dosage history, and monitor treatment progress.",
  tags: ["React", "Node.js", "MongoDB", "JWT"],
  color: "#22c55e",
  emoji: "💊",
},

{
  num: "06",
  title: "Smart Notes Maker",
  type: "Productivity & Learning Tool",
  desc:
    "A modern note-taking application that helps users organize study materials efficiently. Includes note categorization, search functionality, editing tools, and cloud-based storage support.",
  tags: ["React", "Firebase", "JavaScript", "CSS"],
  color: "#f59e0b",
  emoji: "📝",
},

{
  num: "07",
  title: "NovaCart",
  type: "E-Commerce Web Application",
  desc:
    "Full-featured e-commerce platform with product browsing, cart management, secure authentication, order tracking, and responsive design. Built to deliver a seamless online shopping experience.",
  tags: ["React", "Node.js", "MongoDB", "Stripe"],
  color: "#8b5cf6",
  emoji: "🛒",
},
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".fade-up")
              .forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef}>
      <div className="projects-header fade-up">
        <div className="section-tag">Projects</div>
        <h2 className="section-heading">
          Selected <span>Work</span>
        </h2>
        <p className="projects-sub">
          Real-world applications built with the MERN stack — from healthcare to AI.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((p, i) => (
          <div
            className={`project-row fade-up delay-${i + 1}`}
            key={p.num}
          >
            <div className="project-num" style={{ color: p.color }}>
              {p.num}
            </div>

            <div className="project-info">
              <div className="project-emoji">{p.emoji}</div>
              <div>
                <div className="project-type">{p.type}</div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span
                      className="project-tag"
                      key={t}
                      style={{ borderColor: p.color + "44", color: p.color }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-links">
              <a href="#" className="proj-link" title="GitHub">
                <FaGithub />
              </a>
              <a href="#" className="proj-link" title="Live Demo">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
