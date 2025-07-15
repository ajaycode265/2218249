import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { isValidUrl } from '../utils/validation';

interface Props {
  onSubmit: (rows: { url: string; validity: number; custom?: string }[]) => void;
}

export default function UrlForm({ onSubmit }: Props) {
  const [rows, setRows] = useState([{ url: '', validity: 30, custom: '' }]);

  const updateRow = (index: number, field: string, value: string) => {
    const copy = [...rows];
    // @ts-ignore
    copy[index][field] = field === 'validity' ? parseInt(value) : value;
    setRows(copy);
  };

  const addRow = () => {
    if (rows.length < 5) setRows([...rows, { url: '', validity: 30, custom: '' }]);
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(rows);
      }}
    >
      <Stack spacing={2}>
        {rows.map((r, i) => (
          <Stack direction="row" spacing={2} key={i}>
            <TextField
              label="Long URL"
              fullWidth
              required
              value={r.url}
              error={!isValidUrl(r.url)}
              onChange={e => updateRow(i, 'url', e.target.value)}
            />
            <TextField
              label="Validity (min)"
              type="number"
              value={r.validity}
              onChange={e => updateRow(i, 'validity', e.target.value)}
            />
            <TextField
              label="Custom Shortcode"
              value={r.custom}
              onChange={e => updateRow(i, 'custom', e.target.value)}
            />
          </Stack>
        ))}
        <Button onClick={addRow}>Add Row</Button>
        <Button type="submit" variant="contained">Generate Short URLs</Button>
      </Stack>
    </form>
  );
}
