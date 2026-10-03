const fs = require('fs');
let tsx = fs.readFileSync('src/components/Header.tsx', 'utf8');

const target = `        <header>
            <div>
                <div className="mb-12 flex justify-start pl-2">
                <SettingsDropdown />
            </div>
            <ul className="nav">`;

const replacement = `        <header className="relative">
            <div className="absolute top-0 right-4 z-50">
                <SettingsDropdown />
            </div>
            <ul className="nav pt-12">`;

tsx = tsx.replace(target, replacement);

// Wait, the original `<div>` had no closing tag removed yet.
// Wait! `<div>` was originally `<div className="nav">`. My previous sed replaced `<div className="nav">` with `<div>...`.
// But there is a closing `</div>` somewhere down below!
