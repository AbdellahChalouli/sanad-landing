// ============================================================
//  CONFIGURATION — fill these before deploying
// ============================================================

// 1. EmailJS — https://emailjs.com
//    Dashboard → Account → Public Key
export const EMAILJS_PUBLIC_KEY = "yPQwR31_7487vOpAC";

//    Dashboard → Email Services → your service ID
export const EMAILJS_SERVICE_ID = "service_f03iekd";

//    Dashboard → Email Templates → your template ID
export const EMAILJS_TEMPLATE_ID = "template_r1194e4";

// 2. Google Sheets Web App URL
//    (Apps Script → Deploy → New Deployment → Web App)
//    Set access to "Anyone"
export const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwNPq4hzNm7JQynfUjudmTeyY4ZwfntFPLqYNNSQ1cWcoVjFSVJFegIM8kjcal7fkY/exec";

// 3. Your notification email (used in EmailJS template as {{to_email}})
export const NOTIFICATION_EMAIL = "abdellahchalouli@gmail.com";
