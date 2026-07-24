const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('next_data.json', 'utf8'));
  const eventData = data.props.pageProps.eventData;
  
  if (eventData) {
    fs.writeFileSync('konfhub_sponsors.json', JSON.stringify({
      sponsors: eventData.sponsors || [],
      sponsor_categories: eventData.sponsor_categories || []
    }, null, 2));
    console.log('Saved sponsors data');
  } else {
    console.log('No eventData found');
  }
} catch (e) {
  console.error(e);
}
