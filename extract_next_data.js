const fs = require('fs');

try {
  const html = fs.readFileSync('konfhub_event.html', 'utf8');
  const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]+?)<\/script>/);
  if (match) {
    const data = JSON.parse(match[1]);
    fs.writeFileSync('next_data.json', JSON.stringify(data, null, 2));
    console.log('Extracted NEXT_DATA');
  } else {
    console.log('No NEXT_DATA found');
  }
} catch (e) {
  console.error(e);
}
