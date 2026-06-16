import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import {
  EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
  GOOGLE_SHEET_URL, NOTIFICATION_EMAIL,
} from '../config';

const INITIAL = { email: '', nChilds: '', nHours: '', interested: true, message: '' };

export default function FormSection({ toastRef }) {
  const [form, setForm]       = useState(INITIAL);
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone]       = useState(false);

  const handleChange = (e) => {
    setError('');
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [e.target.name]: val }));
  };

  const validate = () => {
    if (!form.email) return 'Email address is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email address.';
    return null;
  };

  const sendToGoogleSheets = (data) => {
    if (!GOOGLE_SHEET_URL || GOOGLE_SHEET_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL') return;
    fetch(GOOGLE_SHEET_URL, {
      method: 'POST', mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(data),
    }).catch(err => console.warn('Sheets:', err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }
    setLoading(true); setError('');

    const payload = {
      id:         Date.now().toString(),
      gmail:      form.email,
      n_childs:   form.nChilds || '—',
      n_hours:    form.nHours  || '—',
      interested: form.interested ? 'Yes' : 'No',
      message:    form.message || '—',
      to_email:   NOTIFICATION_EMAIL,
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload, EMAILJS_PUBLIC_KEY);
      sendToGoogleSheets(payload);
      setDone(true);
      toastRef.current?.show('Successfully joined the waitlist! ✓');
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
      toastRef.current?.show('Submission failed, please retry.', true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section section-bg" id="interest-form">
      <h2 className="section-title">Be Part of the Launch</h2>
      <div className="form-container">
        {done ? (
          <div className="success-block" role="status">
            <FiCheckCircle className="success-icon" />
            <h3>Thank you for your interest in SANAD!</h3>
            <p>We'll reach out to you as soon as we launch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="f-email">Email Address *</label>
              <input
                id="f-email" name="email" type="email"
                className="form-control" placeholder="name@example.com"
                value={form.email} onChange={handleChange} required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="f-childs">Number of Children</label>
                <input
                  id="f-childs" name="nChilds" type="number"
                  className="form-control" min="0" placeholder="e.g., 2"
                  value={form.nChilds} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="f-hours">Child's Daily Screen Time (Hrs)</label>
                <input
                  id="f-hours" name="nHours" type="number"
                  className="form-control" min="0" max="24" placeholder="e.g., 4"
                  value={form.nHours} onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="f-message">Message (Optional)</label>
              <textarea
                id="f-message" name="message"
                className="form-control" rows="4"
                placeholder="Any specific feature you are looking for?"
                value={form.message} onChange={handleChange}
              />
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox" id="f-interested" name="interested"
                checked={form.interested} onChange={handleChange}
              />
              <label htmlFor="f-interested">
                I am interested in testing early beta versions of SANAD
              </label>
            </div>

            {error && <p className="error-msg" role="alert">{error}</p>}

            <button type="submit" className="btn-primary" disabled={loading}>
              <FiSend />
              {loading ? 'Submitting...' : 'Join Priority Waitlist'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
