import React from 'react';
import { FaShieldHalved, FaRobot, FaChartPie } from 'react-icons/fa6';

const services = [
  {
    icon: <FaShieldHalved />,
    title: 'Custom Content Filtering',
    desc: 'Prevent access to explicitly harmful material or define custom parameters for things your family deems inappropriate.',
  },
  {
    icon: <FaRobot />,
    title: 'On-Device Edge AI',
    desc: 'Data processing happens directly on the child\'s device. No massive servers storing private logs, keeping performance high and data safe.',
  },
  {
    icon: <FaChartPie />,
    title: 'Insightful Analytics',
    desc: 'Access a complete overview of connected children, showing attempting violations and usage metrics natively.',
  },
];

export default function ServicesSection() {
  return (
    <section className="section section-bg" id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <span className="card-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
