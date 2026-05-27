import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import "./Hero.css";


import avatarImg from "../assets/avatar.png"; 


export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow",      { y: 30, opacity: 0, duration: 0.8 })
        .from(".hero-title .line",  { y: 80, opacity: 0, duration: 0.9, stagger: 0.12 }, "-=0.4")
        .from(".hero-desc",         { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
        .from(".hero-actions",      { y: 30, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-stats .stat",  { y: 30, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.4")
        .from(".hero-avatar-wrap",  { scale: 0.8, opacity: 0, duration: 1, ease: "elastic.out(1, 0.7)" }, "-=1.2");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="hero-section" ref={heroRef}>

      {/* Background blobs */}
      <div className="blob" style={{ width: 420, height: 420, background: "rgba(124,58,237,0.18)", top: "-80px", left: "-80px" }} />
      <div className="blob" style={{ width: 320, height: 320, background: "rgba(232,121,249,0.12)", bottom: "0", right: "5%" }} />

      {/* Dot grid */}
      <div className="dot-grid" />

      <div className="hero-inner">

        {/* ── LEFT: text content ── */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Full Stack Developer · MERN Stack
          </div>

          <h1 className="hero-title">
            <span className="line">Hi, I'm</span>
            <span className="line accent-line">Krishan</span>
            <span className="line">Kanhaiya</span>
          </h1>

          <p className="hero-desc">
            Computer Science student at Marwadi University, building real-world
            web applications with the MERN stack. Passionate about{" "}
            <span className="highlight">problem solving</span>,{" "}
            <span className="highlight">clean code</span>, and{" "}
            <span className="highlight">modern UI</span>.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects <FaArrowRight size={14} />
            </a>
            <a href="#contact" className="btn-secondary">
              <FaDownload size={13} /> Download CV
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">7<span>+</span></div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <div className="stat-num">2<span>+</span></div>
              <div className="stat-label">Years Learning</div>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <div className="stat-num">1<span>🏆</span></div>
              <div className="stat-label">Hackathon Award</div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: avatar ── */}
        <div className="hero-visual">
          <div className="hero-avatar-wrap">

            {/* Spinning decorative rings */}
            <div className="avatar-ring ring1" />
            <div className="avatar-ring ring2" />

            {/* ── Avatar image ──────────────────────────────────────────────
                If the import above works (file exists in src/assets/) the
                photo renders.  If the file is missing Vite will show a build
                error — just make sure your image is in src/assets/.          */}
            <div className="avatar-circle">
              <img
                src={avatarImg}
                alt="Krishan Kanhaiya"
                className="avatar-photo"
                onError={(e) => {
                  // Fallback: show initials if image fails to load
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "flex";
                }}
              />
              {/* Initials fallback (hidden by default) */}
              <div className="avatar-initials-fallback" style={{ display: "none" }}>
                KK
              </div>
            </div>

            {/* Floating chips */}
            <div className="float-chip chip1">
              <span className="chip-dot green" />
              Available for work
            </div>
            <div className="float-chip chip2">
              🏆 Best Design · Hackathon
            </div>
            <div className="float-chip chip3">
              ⚡ MERN Stack Dev
            </div>

          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>

    </section>
  );
}
