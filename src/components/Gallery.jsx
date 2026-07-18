import { useState } from "react";
import "./Gallery.css";

import conference from "../assets/gallery/conference.jpg";
import team from "../assets/gallery/team.jpg";
import friends from "../assets/gallery/friends.jpg";
import certificate from "../assets/gallery/certificate.jpg";
import meeting from "../assets/gallery/meeting.jpg";
import award from "../assets/gallery/award.jpg";
import research from "../assets/gallery/research.jpg";

const images = [
  {
    image: conference,
    title: "Conference",
    tag: "🌍 Vibrant Gujarat",
  },
  {
    image: meeting,
    title: "Networking",
    tag: "🤝 Leadership",
  },
  {
    image: team,
    title: "Blind Code",
    tag: "💻 Technical Event",
  },
  {
    image: friends,
    title: "Team Work",
    tag: "👨‍💻 Collaboration",
  },
  {
    image: certificate,
    title: "Achievement",
    tag: "🏆 Certificate",
  },
  {
    image: award,
    title: "Recognition",
    tag: "🎖 Award",
  },
  {
    image: research,
    title: "Research",
    tag: "📖 Publication",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="gallery-section">

        <div className="gallery-blur blur1"></div>
        <div className="gallery-blur blur2"></div>

        <div className="gallery-header">

          <span className="gallery-tag">
            Beyond The Code
          </span>

          <h2>
            My <span>Journey</span>
          </h2>

          <p>
            A glimpse into my journey through leadership,
            research, innovation, technical events,
            and continuous learning.
          </p>

        </div>

        <div className="gallery-slider">

          <div className="gallery-track">

            {[...images, ...images].map((item, index) => (

              <div
                className="gallery-card"
                key={index}
                onClick={() => setSelectedImage(item)}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-overlay">

                  <span>{item.tag}</span>

                  <h3>{item.title}</h3>

                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="gallery-footer">

          Every milestone tells a story of learning,
          leadership and continuous growth.

        </div>

        <div className="section-divider">
          <span></span>
          <div className="diamond">✦</div>
          <span></span>
        </div>

      </section>

      {/* ===========================
          Full Screen Image Viewer
      ============================ */}

      {selectedImage && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            onClick={(e) => e.stopPropagation()}
          />

        </div>

      )}

    </>
  );
}