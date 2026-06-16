import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar({ dark, onToggle }) {
  return (
    <nav className="navbar">
      <div className="logo">SANAD | سـنـد</div>
      <div className="theme-switch-wrapper">
        <label className="theme-switch">
          <input type="checkbox" checked={dark} onChange={onToggle} aria-label="Toggle dark mode" />
          <div className="slider">
            <span className="slider-icon"><FaSun /></span>
            <span className="slider-icon"><FaMoon /></span>
          </div>
        </label>
      </div>
    </nav>
  );
}
