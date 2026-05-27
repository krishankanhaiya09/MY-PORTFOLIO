import { useEffect, useRef } from "react";
import "./About.css";

export default function About() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    { icon: "🧠", label: "Problem Solver", desc: "Love breaking down complex problems into elegant solutions." },
    { icon: "🚀", label: "Fast Learner", desc: "Continuously picking up new technologies and frameworks." },
    { icon: "🤝", label: "Team Player", desc: "Experienced coordinating across teams for events and hackathons." },
    { icon: "🎨", label: "Design Minded", desc: "Won Best Design Award — I care about how things look and feel." },
  ];

  return (
    <section id="about" ref={sectionRef}>
      <div className="about-inner">
        <div className="about-left fade-up">
          <div className="section-tag">About Me</div>
          <h2 className="section-heading">
            Turning ideas into <span>real products</span>
          </h2>
          <p>
            I'm a <strong>B.Tech Computer Science</strong> student at Marwadi
            University (2024–2028), passionate about building full-stack web
            applications using the MERN stack.
          </p>
          <p>
            I've worked as a Human Resources Coordinator at Petals NGO, Hall
            Manager at the Vibrant Gujarat Summit, and Student Coordinator for
            Emulate'26 — experiences that sharpened my{" "}
            <span className="highlight">leadership</span>,{" "}
            <span className="highlight">communication</span>, and{" "}
            <span className="highlight">teamwork</span> skills.
          </p>
          <p>
            Outside of web dev, I dive deep into{" "}
            <strong>Data Structures & Algorithms</strong> with Java and C,
            always looking to sharpen my problem-solving edge.
          </p>

          <div className="about-badges fade-up delay-2">
            <span className="badge">B.Tech CSE · 2024–2028</span>
            <span className="badge">Marwadi University · Rajkot</span>
            <span className="badge accent-badge">🏆 Hackathon Winner</span>
          </div>
        </div>

        <div className="about-right">
          {values.map((v, i) => (
            <div className={`value-card glass-card fade-up delay-${i + 1}`} key={v.label}>
              <div className="value-icon">{v.icon}</div>
              <div>
                <div className="value-label">{v.label}</div>
                <div className="value-desc">{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
