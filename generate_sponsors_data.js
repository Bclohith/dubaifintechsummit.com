const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('all_logos.json', 'utf8'));
  
  const content = `export const sponsorsData = ${JSON.stringify(data, null, 2)};`;
  
  fs.writeFileSync('app/data/sponsors.js', content);
  console.log('Successfully generated app/data/sponsors.js');
} catch (e) {
  console.error(e);
}
