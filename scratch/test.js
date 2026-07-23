
const https = require('https');
https.get('https://api.konfhub.com/event/dubai-future-finance-week-2026', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log('Response:', data.substring(0, 500)));
}).on('error', err => console.log('Error:', err.message));

