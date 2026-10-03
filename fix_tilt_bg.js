const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

const target = `            .tilt-wrapper .exp:hover {
                    background: var(--color-nav-uiblur-stuck);`;

const replacement = `            .tilt-wrapper .exp:hover {
                    background: linear-gradient(135deg, var(--glass-bg-start) 0%, var(--glass-bg-end) 100%);`;

css = css.replace(target, replacement);
fs.writeFileSync('src/app/globals.scss', css);
