import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar          from './components/Navbar';
import HeroSection     from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhySection      from './components/WhySection';
import FormSection     from './components/FormSection';
import FooterSection   from './components/FooterSection';
import Toast           from './components/Toast';

export default function App() {
  const toastRef = useRef(null);

  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className={`app-root${dark ? ' dark' : ''}`}>
      <Navbar dark={dark} onToggle={() => setDark(d => !d)} />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhySection />
        <FormSection toastRef={toastRef} />
      </main>
      <FooterSection />
      <Toast ref={toastRef} />
    </div>
  );
}
