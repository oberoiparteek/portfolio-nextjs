const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

const target = `    .wrapper {
        margin-top: 0;

        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 1.5rem;
            align-items: center;
        }
    }`;

const replacement = `    .wrapper {
        margin-top: 0;

        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 1.5rem;
            align-items: center;
        }
        
        li {
            display: inline;

            svg,
            span {
                width: 2rem;
                height: auto;
                transition: color 0.3s ease;
            }
        }
    }
    
    a:hover {
        color: var(--color-marine);
    }`;

css = css.replace(target, replacement);
fs.writeFileSync('src/app/globals.scss', css);
