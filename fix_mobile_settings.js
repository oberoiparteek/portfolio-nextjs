const fs = require('fs');
let tsx = fs.readFileSync('src/components/SettingsDropdown.tsx', 'utf8');

const targetPhysics = `<div className="mb-6">
                            <label className="text-sm font-semibold mb-2 block opacity-70">Physics (Cards)</label>`;

const replacementPhysics = `<div className="mb-6 desktop-only-setting">
                            <label className="text-sm font-semibold mb-2 block opacity-70">Physics (Cards)</label>`;

const targetNav = `<div>
                            <label className="text-sm font-semibold mb-2 block opacity-70">Navigation Layout</label>`;

const replacementNav = `<div className="desktop-only-setting">
                            <label className="text-sm font-semibold mb-2 block opacity-70">Navigation Layout</label>`;

tsx = tsx.replace(targetPhysics, replacementPhysics).replace(targetNav, replacementNav);
fs.writeFileSync('src/components/SettingsDropdown.tsx', tsx);
