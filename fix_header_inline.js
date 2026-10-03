const fs = require('fs');
let tsx = fs.readFileSync('src/components/Header.tsx', 'utf8');

const target = `        <header className="relative">
            <div className="w-full">
                <div className="absolute top-2 right-4 z-50">
                    <SettingsDropdown />
                </div>
            <ul className="nav pt-12">`;

const replacement = `        <header style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '24px', right: '24px', zIndex: 50 }}>
                <SettingsDropdown />
            </div>
            <ul className="nav" style={{ paddingTop: '24px' }}>`;

tsx = tsx.replace(target, replacement);
fs.writeFileSync('src/components/Header.tsx', tsx);
