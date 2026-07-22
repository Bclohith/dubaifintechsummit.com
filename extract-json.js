const https = require('https');
const fs = require('fs');

function fetchJson(url, regex, outputFile) {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(regex);
      if (match && match[1]) {
        fs.writeFileSync(outputFile, match[1]);
        console.log(`Saved JSON to ${outputFile}`);
      } else {
        console.log(`Could not find JSON for ${url}`);
      }
    });
  });
}

fetchJson('https://dubaifintechsummit.com/speakers/', /<script type="application\/json" id="speakers-json-data">([\s\S]*?)<\/script>/, 'speakers-data.json');
fetchJson('https://dubaifintechsummit.com/agenda/', /<script type="application\/json" id="agenda-json-data">([\s\S]*?)<\/script>/, 'agenda-data.json');
