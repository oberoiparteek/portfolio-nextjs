const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

css = css.replace(/background: rgba\(255, 255, 255, 0\.12\);/g, 'background: rgba(255, 255, 255, 0.22);');
css = css.replace(/border: 1px solid rgba\(255, 255, 255, 0\.15\);/g, 'border: 1px solid rgba(255, 255, 255, 0.3);');

fs.writeFileSync('src/app/globals.scss', css);
