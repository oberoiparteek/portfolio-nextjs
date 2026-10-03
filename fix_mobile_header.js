const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

const target = `    header {
        .nav {
            display: none;
        }`;

const replacement = `    header {
        display: none !important;
        .nav {
            display: none;
        }`;

css = css.replace(target, replacement);
fs.writeFileSync('src/app/globals.scss', css);
