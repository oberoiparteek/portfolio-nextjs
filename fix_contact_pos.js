const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

const target = `        .contact {
            position: fixed;
            right: 3rem;
            bottom: 0;
            z-index: 50;

            .wrapper {
                margin-top: 1rem;

                ul {
                    list-style-type: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    row-gap: 1.5rem;
                    align-items: center;

                    &::after {
                        content: '';
                        display: block;
                        width: 1px;
                        height: 90px;
                        margin: 0 auto;
                        background-color: var(--color-marine);
                        opacity: 0.3;
                    }
                }`;

const replacement = `        .contact {
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
                }`;

css = css.replace(target, replacement);
fs.writeFileSync('src/app/globals.scss', css);
