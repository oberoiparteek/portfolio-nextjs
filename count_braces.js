const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');
let open = (css.match(/\{/g) || []).length;
let close = (css.match(/\}/g) || []).length;
console.log(`Open: ${open}, Close: ${close}`);
