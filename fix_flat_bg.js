const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

const target = `                &:hover {
                    .title {`;

const replacement = `                &:hover {
                    background: rgba(92, 229, 213, 0.05);
                    .title {`;

css = css.replace(target, replacement);
fs.writeFileSync('src/app/globals.scss', css);
