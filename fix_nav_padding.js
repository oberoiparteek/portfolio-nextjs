const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

const target = `        .nav {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            gap: 2rem;
            margin-top: 0;`;

const replacement = `        .nav {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            gap: 2rem;
            margin-top: 0;
            padding-top: 0;`;

css = css.replace(target, replacement);
fs.writeFileSync('src/app/globals.scss', css);
