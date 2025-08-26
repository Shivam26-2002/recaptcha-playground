# Gaming Platform Setup Guide

## Google reCAPTCHA Integration

To enable Google reCAPTCHA authentication, follow these steps:

### 1. Get reCAPTCHA Keys
1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. Create a new site with these settings:
   - **reCAPTCHA type**: reCAPTCHA v2 "I'm not a robot" checkbox
   - **Domains**: Add your domain (localhost for development)
3. Copy the **Site Key** and **Secret Key**

### 2. Configure the Frontend
1. Open `src/pages/LoginWithRecaptcha.tsx`
2. Replace `YOUR_RECAPTCHA_SITE_KEY_HERE` with your actual Site Key
3. Update the App.tsx to use `LoginWithRecaptcha` instead of `Login`

### 3. Backend Verification (Recommended)
For production, you should verify the reCAPTCHA token on your backend:

```javascript
const verifyRecaptcha = async (token) => {
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=YOUR_SECRET_KEY&response=${token}`
  });
  
  const data = await response.json();
  return data.success;
};
```

### 4. Environment Variables
Store your secret key securely using environment variables:
- **Site Key**: Can be public (used in frontend)
- **Secret Key**: Must be private (backend only)

## Current Implementation
- The app currently uses a demo login for development
- Replace `Login` with `LoginWithRecaptcha` in App.tsx when ready
- Gaming dashboard is fully functional after authentication

## Features
- ✅ Modern gaming UI with dark theme and neon accents
- ✅ reCAPTCHA v2 integration ready
- ✅ Responsive design
- ✅ Smooth animations and hover effects
- ✅ Toast notifications
- ✅ SEO optimized