# 🛡️ حماية ذكية لأطفالك — Smoke Test Landing Page

موقع Smoke Test باللغة العربية لتطبيق أندرويد لحماية الأطفال.  
مبني بـ **React.js** + **EmailJS** + **Google Sheets**.

---

## 📁 هيكل المشروع

```
parental-app-landing/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx      ← قسم الترحيب + الشعار المتحرك
│   │   ├── StatsBar.jsx         ← شريط الإحصائيات
│   │   ├── FeaturesSection.jsx  ← بطاقات المميزات الستة
│   │   ├── HowItWorks.jsx       ← خطوات العمل
│   │   ├── FormSection.jsx      ← النموذج + إرسال EmailJS + Sheets
│   │   ├── Shield.jsx           ← رسم SVG للدرع المتحرك
│   │   ├── Toast.jsx            ← إشعارات النجاح/الخطأ
│   │   └── Footer.jsx
│   ├── App.jsx                  ← المكوّن الرئيسي
│   ├── App.css                  ← جميع التصميمات
│   ├── index.js
│   ├── index.css
│   └── config.js                ← ← ← ضع مفاتيحك هنا
├── google-apps-script.js        ← كود Google Sheets
├── EMAILJS_TEMPLATE.txt         ← قالب EmailJS جاهز للنسخ
├── package.json
└── README.md
```

---

## 🚀 تشغيل المشروع

### 1. تثبيت المكتبات
```bash
npm install
```

### 2. تشغيل محلي
```bash
npm start
```
يفتح الموقع على `http://localhost:3000`

### 3. بناء للإنتاج
```bash
npm run build
```
تجد الملفات الجاهزة في مجلد `build/`

---

## ⚙️ إعداد EmailJS

1. سجّل في [emailjs.com](https://emailjs.com)
2. **Email Services** → أضف Gmail → احفظ الـ Service ID (لديك: `service_f03iekd`)
3. **Email Templates** → أنشئ template جديد من محتوى `EMAILJS_TEMPLATE.txt`
4. **Account** → **API Keys** → انسخ الـ Public Key
5. افتح `src/config.js` وأضف:
```js
export const EMAILJS_PUBLIC_KEY  = 'pk_xxxxxxxxxxxxxxxx';
export const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx';
export const NOTIFICATION_EMAIL  = 'youremail@gmail.com';
```

---

## 📊 إعداد Google Sheets

1. أنشئ Google Sheet جديد
2. **Extensions → Apps Script**
3. انسخ محتوى `google-apps-script.js` في المحرر
4. احفظ ← **Deploy → New Deployment**
   - Type: **Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. انسخ رابط الـ Web App
6. في `src/config.js`:
```js
export const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/YOUR_ID/exec';
```

---

## 🎨 الألوان المستخدمة

| اللون | Hex | الاستخدام |
|-------|-----|-----------|
| Navy Dark | `#0A0F1E` | الخلفية الرئيسية |
| Navy Mid  | `#0D1322` | خلفية الأقسام |
| Cyan      | `#00C8E0` | لون التمييز والتفاعل |
| Blue      | `#1A6BCC` | الأزرار والتدرجات |
| White     | `#F8FAFF` | النصوص الرئيسية |
| Gray      | `#A0AEC0` | النصوص الثانوية |

---

## 📋 بيانات النموذج

| الحقل | اسم المتغير | النوع |
|-------|------------|-------|
| البريد الإلكتروني | `gmail` | مطلوب |
| عدد الأطفال | `n_childs` | مطلوب |
| ساعات الاستخدام | `n_hours` | مطلوب |
| مستوى الاهتمام | `interested` | مطلوب |
| رسالة | `message` | اختياري |

---

## 🌐 نشر المشروع (Netlify)

```bash
npm run build
# ارفع مجلد build/ إلى netlify.com
# أو: npx netlify deploy --prod --dir=build
```

---

## 📄 ترخيص
مشروع خاص — جميع الحقوق محفوظة.
