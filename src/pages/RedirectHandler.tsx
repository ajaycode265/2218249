import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { log } from '../api/logging';

export default function RedirectHandler() {
  const { code } = useParams();

  useEffect(() => {
    if (!code) return;
    const data = localStorage.getItem(code);
    if (!data) {
      log('frontend', 'warn', 'components', `Invalid shortcode: ${code}`);
      alert('Invalid or expired short link.');
      return;
    }

    const entry = JSON.parse(data);
    if (new Date() > new Date(entry.expiresAt)) {
      log('frontend', 'warn', 'components', `Link expired: ${code}`);
      alert('This link has expired.');
      return;
    }

    entry.clicks.push({
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
    });

    localStorage.setItem(code, JSON.stringify(entry));
    log('frontend', 'info', 'components', `Redirected: ${code}`);
    window.location.href = entry.longUrl;
  }, [code]);

  return <p>Redirecting...</p>;
}