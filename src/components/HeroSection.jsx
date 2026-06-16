import React, { useState, useEffect } from "react";
import { FaBrain, FaLock  } from "react-icons/fa";
import { PiTableBold } from "react-icons/pi";
const SLIDES = [
  {
    icon: <FaLock  size={32} />, // Slightly smaller to fit nicely above the image text
    title: "Client-Side AI",
    desc: "Immediate local detection of restricted content without server-side privacy risks.",
    image: "../slides/client-side-ai.png", // Abstract AI/Neural network theme
    alt: "AI Neural Network Graphic",
  },
  {
    icon: <PiTableBold size={32} />,
    title: "Parent Dashboard",
    desc: "Monitor all connected devices smoothly and transparently in one place.",
    image: "../slides/parent-dashboard.png", // Clean data dashboard/analytics theme
    alt: "Analytics Dashboard Graphic",
  },
  {
    icon: <FaBrain size={32} />,
    title: "Tailored Advice",
    desc: "Receive AI-generated, constructive parenting tips matching specific incidents.",
    image: "../slides/ai-agent.png", // Supportive family/parenting theme
    alt: "Parent holding child hand",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % SLIDES.length),
      4000,
    );
    return () => clearInterval(id);
  }, []);

  const scrollToForm = (e) => {
    e.preventDefault();
    document
      .getElementById("interest-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">
          The First Arabic AI Parental Control App
        </span>
        <h1>Smart, Transparent Parenting For The Digital Age</h1>
        <p>
          SANAD empowers you to guide your children's online journey with full
          transparency. No hidden tracking — just real-time client-side AI
          protection that keeps children safe while teaching digital
          accountability.
        </p>
        <a href="#interest-form" className="hero-cta" onClick={scrollToForm}>
          Get Early Access
        </a>
      </div>

      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 33.333}%)` }}
        >
          {SLIDES.map((s, i) => (
            <div className="carousel-slide" key={i}>
              {/* Image Wrap */}
              <div className="slide-image-container">
                <img src={s.image} alt={s.alt} className="slide-img" />
                <div className="slide-image-overlay" />
              </div>

              {/* Text Content Block */}
              <div className="slide-content">
                <div className="slide-header">
                  {s.icon}
                  <h3>{s.title}</h3>
                </div>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? " active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
