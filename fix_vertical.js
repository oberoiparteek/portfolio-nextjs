const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

const target = `                ul {
                    list-style-type: none;
                    display: flex;
                    justify-content: center;
                    column-gap: 1rem;
                    flex-wrap: wrap;
                    align-items: center;`;

const replacement = `                ul {
                    list-style-type: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    row-gap: 1rem;
                    align-items: flex-start;`;

css = css.replace(target, replacement);
fs.writeFileSync('src/app/globals.scss', css);
