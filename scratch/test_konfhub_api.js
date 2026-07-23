const fs = require('fs');

async function testApi() {
  const urls = [
    'https://api.konfhub.com/v2/events/dubai-future-finance-week-2026/speakers',
    'https://api.konfhub.com/v1/events/dubai-future-finance-week-2026/speakers',
    'https://media.konfhub.com/events/dubai-future-finance-week-2026/speakers.json',
    'https://api.konfhub.com/event/dubai-future-finance-week-2026/speakers',
    'https://api.konfhub.com/events/dubai-future-finance-week-2026'
  ];
  
  for (const url of urls) {
    try {
      console.log('Testing', url);
      const res = await fetch(url);
      if (res.ok) {
        console.log('SUCCESS:', url);
        const data = await res.text();
        console.log(data.substring(0, 500));
        break;
      } else {
        console.log('FAILED:', res.status, res.statusText);
      }
    } catch (e) {
      console.log('ERROR', e.message);
    }
  }
}

testApi();
