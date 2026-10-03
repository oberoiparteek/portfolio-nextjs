const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

// Find the .contact block inside header
const target = `        .contact {
            position: fixed;
            right: 2rem;
            top: 50%;
            transform: translateY(-50%);
            z-index: 50;

            .wrapper {
                margin-top: 0;

                ul {
                    list-style-type: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    row-gap: 1.5rem;
                    align-items: center;
                }
            }
        }`;

// Replace it with nothing inside the header
css = css.replace(target, '');

// And append it to the global scope
const append = `
.contact {
    position: fixed;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 50;

    .wrapper {
        margin-top: 0;

        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 1.5rem;
            align-items: center;
        }
    }
}
`;

css += append;
fs.writeFileSync('src/app/globals.scss', css);
