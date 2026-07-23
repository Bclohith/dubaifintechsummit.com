const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'dubaifintechsummit.com',
  port: 443,
  path: '/about/',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Connection': 'keep-alive'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('scratch/live_about_page.html', data);
    console.log(`Saved live page, Status: ${res.statusCode}, Size: ${data.length}`);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
