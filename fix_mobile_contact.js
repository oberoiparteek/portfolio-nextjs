const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

// Remove the old mobile contact block
const oldMobile = /@media only screen and \(max-width: 992px\) {\s*\.contact {[\s\S]*?}\s*}/;
css = css.replace(oldMobile, '');

// Find the global contact block and append the media query inside it
const target = `    a:hover {
        color: var(--color-marine);
    }`;

const replacement = `    a:hover {
        color: var(--color-marine);
    }

    @media only screen and (max-width: 992px) {
        position: static;
        width: 100%;
        margin-top: 2rem;
        transform: none;
        
        .wrapper ul {
            flex-direction: row;
            justify-content: center;
            row-gap: 0;
            column-gap: 1.5rem;
            
            &::after {
                display: none;
            }
        }
    }`;

css = css.replace(target, replacement);
fs.writeFileSync('src/app/globals.scss', css);
