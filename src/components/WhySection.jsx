import React, { useState, useEffect } from "react";
import { FaEye, FaLanguage, FaLightbulb } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiRobot2Fill } from "react-icons/ri";
const features = [
  {
    icon: <FaEye />,
    title: "Mutual Trust & Awareness",
    desc: "Unlike spy software, the child is fully aware of SANAD. This builds accountability, healthy online boundaries, and open parent-child communication.",
  },
  {
    icon: <FaLanguage />,
    title: "Tailored for Arabic Culture",
    desc: "The first application engineered specifically to understand regional nuances, idioms, and contextual norms perfectly.",
  },
  {
    icon: <FaLightbulb />,
    title: "Actionable Parenting Guidance",
    desc: "We don't just alert you that something happened. We supply context-driven behavioral advice to help you address the issue constructively.",
  },
];

export default function WhySection() {
  return (
    <section className="section" id="why-choose-us">
      <h2 className="section-title">Why Choose SANAD?</h2>
      <div className="why-grid">
        <div className="why-features">
          {features.map((f, i) => (
            <div className="feature-item" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-text">
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="why-graphic">
          {/* <FaUserShield /> */}
          <div className="carousel-container2">
            <div className="carousel-track2">
              <img
                className="why-image"
                src="../slides/general2.png"
                alt="AI Neural Network Graphic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
