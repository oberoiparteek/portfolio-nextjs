const fs = require('fs');
let tsx = fs.readFileSync('src/components/SocialSidebar.tsx', 'utf8');

tsx = tsx.replace('https://github.com/namastedev', 'https://github.com/oberoiparteek');
tsx = tsx.replace('https://www.linkedin.com/in/parteek-kumar-390314120/', 'https://linkedin.com/in/parteek-kumar-frontend-developer/');

fs.writeFileSync('src/components/SocialSidebar.tsx', tsx);
