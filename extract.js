const fs = require('fs');
const https = require('https');

function extractBlock(url, startMarker, endMarker, outputFile) {
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      const startIndex = data.indexOf(startMarker);
      if (startIndex === -1) {
        console.log(`Start marker not found for ${outputFile}`);
        return;
      }
      
      let extract = data.substring(startIndex);
      const endIndex = extract.indexOf(endMarker);
      
      if (endIndex === -1) {
        console.log(`End marker not found for ${outputFile}`);
        return;
      }
      
      extract = extract.substring(0, endIndex + endMarker.length);
      
      // Also grab the konfhub script which is usually at the bottom
      const scriptMarker = '<script id="konfhub-agenda-script-js"';
      const scriptStart = data.indexOf(scriptMarker);
      let scriptTag = '';
      if (scriptStart !== -1) {
          const scriptEnd = data.indexOf('</script>', scriptStart);
          scriptTag = data.substring(scriptStart, scriptEnd + 9);
      }
      
      // Also grab the inline JSON
      const jsonRegex = /<script type="application\/json" id=".*?-json-data">[\s\S]*?<\/script>/;
      const jsonMatch = data.match(jsonRegex);
      const jsonTag = jsonMatch ? jsonMatch[0] : '';
      
      const finalHtml = `
        ${jsonTag}
        ${extract}
        ${scriptTag}
      `;
      
      fs.writeFileSync(outputFile, finalHtml);
      console.log(`Successfully extracted to ${outputFile}`);
    });
  }).on('error', (err) => {
    console.error(`Error fetching ${url}: ${err.message}`);
  });
}

extractBlock(
  'https://dubaifintechsummit.com/speakers/', 
  '<div class="konfhub-speakers-wrap"', 
  '<!-- End speakers -->', // Note: We might need a better end marker. Let's see what works. Actually, looking at the previous grep, I'll just use a generic end if I can find it.
  'speakers-raw.html'
);

// We need a more robust extraction since we don't know the exact end marker.
// Let's just use regular expressions or cheerio. Cheerio is standard but might not be installed. Let's just use string parsing.
