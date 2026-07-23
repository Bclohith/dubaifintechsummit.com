const https = require('https');

function testEndpoint(url) {
  return new Promise((resolve) => {
    const req = https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        resolve({ url, status: res.statusCode, length: data.length, body: data.substring(0, 100) });
      });
    });
    req.on('error', (e) => resolve({ url, error: e.message }));
  });
}

async function run() {
  const eventSlug = 'dubai-future-finance-week-2026';
  const eventId = 'f133240e-1331-44f2-8d6e-6217b3b8984d';
  
  const urls = [
    `https://api.konfhub.com/v1/events/${eventSlug}/speakers`,
    `https://api.konfhub.com/event/${eventSlug}/speakers`,
    `https://api.konfhub.com/api/v1/event/${eventSlug}/speakers`,
    `https://api.konfhub.com/event-details/${eventId}`,
    `https://api.konfhub.com/v1/speakers?event_id=${eventId}`
  ];
  
  for (const url of urls) {
    const result = await testEndpoint(url);
    console.log(`URL: ${result.url}`);
    console.log(`Status: ${result.status} | Length: ${result.length}`);
    console.log(`Preview: ${result.body}\n`);
  }
}

run();
