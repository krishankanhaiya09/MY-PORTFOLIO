import { useEffect, useRef } from "react";
import "./Career.css";

const experiences = [
  {
    period: "2024 – 2025",
    org: "Petals NGO",
    role: "Human Resources Coordinator",
    points: [
      "Assisted in volunteer recruitment and onboarding",
      "Coordinated team activities for event planning and execution",
      "Managed communication between volunteers and management",
      "Supported NGO events and social initiatives",
    ],
    icon: "🌸",
    color: "#e879f9",
  },
  {
    period: "2024",
    org: "P & I Company · Vibrant Gujarat Summit",
    role: "Hall Manager",
    points: [
      "Managed hall operations and coordinated event activities",
      "Assisted in crowd management and guest coordination",
      "Ensured smooth execution of event sessions and schedules",
      "Worked with event management team to maintain discipline",
    ],
    icon: "🏛️",
    color: "#60a5fa",
  },
  {
    period: "2025",
    org: "Emulate'26 · Marwadi University",
    role: "Student Coordinator",
    points: [
      "Organized and managed Blind Code technical event",
      "Coordinated with participants and event management team",
      "Handled event planning, registrations and execution",
      "Promoted technical engagement among students",
    ],
    icon: "⚡",
    color: "#a855f7",
  },
  {
  period: "May 2026 – June 2026",
  org: "Saket Systems",
  role: "Software Development Intern",
  points: [
    "Worked on web application development using modern technologies",
    "Assisted in frontend and backend development tasks",
    "Collaborated with developers to implement new features and improvements",
    "Gained practical exposure to software development workflows and project management",
  ],
  icon: "💼",
  color: "#22c55e",
},

{
  period: "June 2026 – July 2026",
  org: "Student Research Internship Training (SRIT 2026)",
  role: "Research Intern",
  points: [
    "Participated in research-oriented learning and technical training programs",
    "Explored emerging technologies and their practical applications",
    "Worked on problem-solving, data analysis, and project-based assignments",
    "Presented findings and collaborated with mentors and fellow interns",
  ],
  icon: "🔬",
  color: "#f59e0b",
},
];

const education = {
  degree: "B.Tech – Computer Science Engineering",
  institution: "Marwadi University",
  period: "2024 – 2028",
  location: "Rajkot, Gujarat, India",
};

export default function Career() {
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
    <section id="career" ref={sectionRef}>
      <div className="career-header fade-up">
        <div className="section-tag">Career</div>
        <h2 className="section-heading">
          Experience & <span>Journey</span>
        </h2>
      </div>

      <div className="career-inner">
        {/* Timeline */}
        <div className="timeline">
          <div className="tl-line" />
          {experiences.map((exp, i) => (
            <div className={`tl-item fade-up delay-${i + 1}`} key={exp.org}>
              <div
                className="tl-dot"
                style={{ background: exp.color, boxShadow: `0 0 18px ${exp.color}66` }}
              />
              <div className="tl-card glass-card">
                <div className="tl-top">
                  <div>
                    <div className="tl-period">{exp.period}</div>
                    <div className="tl-role">{exp.role}</div>
                    <div className="tl-org">{exp.org}</div>
                  </div>
                  <span className="tl-icon">{exp.icon}</span>
                </div>
                <ul className="tl-points">
                  {exp.points.map((pt) => (
                    <li key={pt}>
                      <span className="tl-bullet" style={{ background: exp.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education + Award */}
        <div className="career-aside fade-up delay-2">
          <div className="edu-card glass-card">
            <div className="edu-icon">🎓</div>
            <div className="edu-period">{education.period}</div>
            <div className="edu-degree">{education.degree}</div>
            <div className="edu-inst">{education.institution}</div>
            <div className="edu-loc">📍 {education.location}</div>
          </div>

          <div className="award-card glass-card">
            <div className="award-icon">🏆</div>
            <div className="award-title">Best Design Award</div>
            <div className="award-event">3rd Byte Hackathon · 2025</div>
            <div className="award-org">Marwadi University</div>
            <p className="award-desc">
              Won for innovative UI/UX and creative solution during hackathon
              competition. Demonstrated problem solving, creativity and teamwork.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
