const fs = require('fs');
const path = require('path');

const basePath = '/dubaifintechsummit.com';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.js') || file.endsWith('.css')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./app');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace src="/something" with src="/dubaifintechsummit.com/something"
    content = content.replace(/src="\/([^"]+)"/g, 'src="' + basePath + '/"');
    
    // Replace bg: '/something'
    content = content.replace(/bg: '\/([^']+)'/g, 'bg: \'' + basePath + '/\'');

    // Replace url('/something')
    content = content.replace(/url\('\/([^']+)'\)/g, 'url(\'' + basePath + '/\')');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed:', file);
    }
});
