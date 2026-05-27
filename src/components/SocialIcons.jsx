import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./SocialIcons.css";

export default function SocialIcons() {
  return (
    <div className="social-fixed">
      <a href="https://github.com/krishankanhaiya09" target="_blank" rel="noreferrer" title="GitHub">
        <FaGithub />
      </a>
      <a
  href="https://www.linkedin.com/in/krishan-kanhaiya-97198233b"
  target="_blank"
  rel="noopener noreferrer"
>
        <FaLinkedin />
      </a>
      <a href="https://instagram.com/kanhaiya_singh09" target="_blank" rel="noreferrer" title="Instagram">
        <FaInstagram />
      </a>
      <a href="https://twitter.com/kanhaiya_singh09" target="_blank" rel="noreferrer" title="Twitter">
        <FaTwitter />
      </a>
      <div className="social-line" />
    </div>
  );
}
