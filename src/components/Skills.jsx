import { useEffect, useRef } from "react";
import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 82 },
      { name: "React.js", level: 78 },
      { name: "UI/UX Design", level: 75 },
    ],
  },

  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 72 },
      { name: "MongoDB", level: 70 },
      { name: "REST APIs", level: 76 },
    ],
  },

  {
    title: "Programming & DSA",
    icon: "💻",
    skills: [
      { name: "Java", level: 80 },
      { name: "Data Structures", level: 78 },
      { name: "Algorithms", level: 75 },
      { name: "Problem Solving", level: 80 },
    ],
  },

  {
    title: "Management",
    icon: "📋",
    skills: [
      { name: "Team Management", level: 85 },
      { name: "Leadership", level: 82 },
      { name: "Event Coordination", level: 80 },
      { name: "Communication", level: 88 },
    ],
  },
  {
  title: "Management & Leadership",
  icon: "📋",
  skills: [
    { name: "Team Management", level: 85 },
    { name: "Leadership", level: 82 },
    { name: "Event Coordination", level: 80 },
    { name: "Communication", level: 88 },
  ],
},

{
  title: "Digital & Social Media",
  icon: "📱",
  skills: [
    { name: "Social Media Management", level: 82 },
    { name: "Content Planning", level: 78 },
    { name: "Community Engagement", level: 80 },
    { name: "Brand Promotion", level: 75 },
  ],
},
];

const techChips = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Java",
  "DSA",
  "Algorithms",
  "Problem Solving",
  "REST API",
  "Git & GitHub",
  "VS Code",
  "Postman",
  "Figma",

  // Professional Skills
  "Leadership",
  "Team Management",
  "Public Relations",
  "Social Media Management",
  "Content Planning",
  "Event Management",
  "Communication",
  "Problem Solving",
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Fade-up elements
            entry.target
              .querySelectorAll(".fade-up")
              .forEach((el) => el.classList.add("visible"));

            // Animate skill bars
            entry.target.querySelectorAll(".skill-bar").forEach((bar) => {
              const target = bar.dataset.level;
              setTimeout(() => {
                bar.style.width = target + "%";
              }, 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="skills-header fade-up">
        <div className="section-tag">Skills</div>
        <h2 className="section-heading">
          My <span>Tech Stack</span>
        </h2>
        <p className="skills-sub">
          Built on a strong foundation of computer science principles and hands-on project experience.
        </p>
      </div>

      <div className="skill-groups fade-up delay-1">
        {skillGroups.map((group) => (
          <div className="skill-group glass-card" key={group.title}>
            <div className="skill-group-header">
              <span className="skill-group-icon">{group.icon}</span>
              <span className="skill-group-title">{group.title}</span>
            </div>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-meta">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div
                      className="skill-bar"
                      data-level={skill.level}
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tech-chips-wrap fade-up delay-2">
        <p className="chips-label">Also familiar with:</p>
        <div className="tech-chips">
          {techChips.map((t) => (
            <span className="tech-chip" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
