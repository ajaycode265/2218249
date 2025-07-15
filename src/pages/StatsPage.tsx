import React from 'react';

export default function StatsPage() {
  const entries = Object.keys(localStorage).map(key => {
    const val = localStorage.getItem(key);
    if (!val) return null;
    try {
      const obj = JSON.parse(val);
      return { code: key, ...obj };
    } catch {
      return null;
    }
  }).filter(Boolean);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Statistics</h2>
      {entries.map(e => (
        <div key={e.code} style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem' }}>
          <p><strong>Short URL:</strong> http://localhost:3000/{e.code}</p>
          <p><strong>Long URL:</strong> {e.longUrl}</p>
          <p><strong>Created At:</strong> {e.createdAt}</p>
          <p><strong>Expires At:</strong> {e.expiresAt}</p>
          <p><strong>Clicks:</strong> {e.clicks.length}</p>
        </div>
      ))}
    </div>
  );
}