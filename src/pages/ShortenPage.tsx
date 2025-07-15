import React from 'react';
import UrlForm from '../components/UrlForm';
import { log } from '../api/logging';
import dayjs from 'dayjs';

export default function ShortenPage() {
  const handleSubmit = (rows: { url: string; validity: number; custom?: string }[]) => {
    rows.forEach(row => {
      const code = row.custom || Math.random().toString(36).substring(2, 8);
      const createdAt = new Date().toISOString();
      const expiresAt = dayjs().add(row.validity, 'minute').toISOString();

      localStorage.setItem(code, JSON.stringify({
        longUrl: row.url,
        createdAt,
        expiresAt,
        clicks: []
      }));

      log('frontend', 'info', 'components', `Short URL created: ${code}`);
      alert(`Short URL: http://localhost:3000/${code}`);
    });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Create Short URL</h2>
      <UrlForm onSubmit={handleSubmit} />
    </div>
  );
}