import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/evaluation-service';
let token = '';

export async function authenticate(creds: {
  email: string;
  rollNo: string;
  clientId: string;
  clientSecret: string;
  accessCode: string;
}) {
  const res = await axios.post(`${BASE_URL}/auth`, creds);
  token = res.data.access_token;
}

export function log(
  stack: 'frontend',
  level: 'debug' | 'info' | 'warn' | 'error',
  pkg: 'api' | 'utils' | 'components',
  message: string
) {
  if (!token) {
    console.warn('Log skipped: not authenticated');
    return;
  }

  return axios.post(
    `${BASE_URL}/logs`,
    { stack, level, package: pkg, message },
    { headers: { Authorization: `Bearer ${token}` } }
  );
}
