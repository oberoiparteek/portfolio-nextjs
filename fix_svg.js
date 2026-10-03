const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

const target = `                .link-svg {
                    svg {
                        transform: translate(-4px, 4px);
                        max-width: 20px;
                    }
                }`;

const replacement = `                .link-svg {
                    svg {
                        width: 14px;
                        height: 14px;
                        transform: translate(-2px, 2px);
                        transition: transform 0.3s ease;
                    }
                }`;

css = css.replace(target, replacement);
fs.writeFileSync('src/app/globals.scss', css);
