import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-logo">
            Krishan<span>.</span>
          </span>
          <p className="footer-tagline">
            Full Stack Developer · MERN Stack · Rajkot, Gujarat
          </p>
        </div>

        <div className="footer-links">
          {["About", "Skills", "Projects", "Career", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}>
              {l}
            </a>
          ))}
        </div>

        <div className="footer-right">
          <p>© {year} Krishan Kanhaiya. All rights reserved.</p>
          <p className="footer-made">
            Made with <span>♥</span> & React
          </p>
        </div>
      </div>
    </footer>
  );
}
