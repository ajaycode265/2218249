# URL Shortener – Frontend Application

This project is a browser-based URL shortener built using React. It allows users to shorten long URLs, optionally customize shortcodes, and define expiration times.
---

## Key Features

- Generate short URLs from user-input long URLs
- URL expiry timing 
- Logging middleware that communicates with evaluation API

---

## Technologies Used

- React (with TypeScript)
- Custom Logging Middleware (API-based)

---

## Project Structure

src/
├── api/               → Logging and authentication handler  
├── components/        → URL form input components  
├── pages/             → Main route pages (Shorten, Redirect, Stats)  
├── utils/             → Validation and helper logic  
├── App.tsx            → Application routes  
└── index.tsx          → App entry + authentication setup  

---

## Authentication

Before logging can be used, the app must authenticate using credentials.

This is done inside `index.tsx` by calling the `authenticate()` function with the following parameters:

- email
- rollNo
- clientId
- clientSecret
- accessCode

On successful authentication, all logs are sent to logging server using the provided access token.

---

##  Pages

1. `/` → Main URL shortener form  
2. `/stats` → View all shortened URLs and their click statistics  
3. `/:code` → Redirect to original long URL if code is valid and not expired

---

##  Run Instructions

1. Install dependencies:

   npm install  
   npm install @emotion/react @emotion/styled

2. Start the development server:

   npm start

3. Open in browser at:

   http://localhost:3000

