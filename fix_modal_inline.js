const fs = require('fs');
let tsx = fs.readFileSync('src/components/SettingsDropdown.tsx', 'utf8');

const target = `            {isOpen && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                    }}
                    onClick={() => setIsOpen(false)}
                >
                    <div 
                        className="relative w-full max-w-sm rounded-2xl shadow-2xl p-8 border"
                        style={{ 
                            background: 'var(--color-background)', 
                            borderColor: 'var(--glass-border)',
                            transform: 'translateY(0)',
                            animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}`;

const replacement = `            {isOpen && (
                <div 
                    style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '16px',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                    }}
                    onClick={() => setIsOpen(false)}
                >
                    <div 
                        style={{ 
                            position: 'relative', width: '100%', maxWidth: '384px',
                            padding: '32px', borderRadius: '16px',
                            background: 'var(--color-background)', 
                            border: '1px solid var(--glass-border)',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            transform: 'translateY(0)',
                            animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}`;

tsx = tsx.replace(target, replacement);

const flexTarget = `                            <div className="flex bg-black/20 rounded-lg p-1 gap-1 border" style={{ borderColor: 'var(--glass-border)' }}>`;
const flexReplace = `                            <div style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '4px', gap: '4px', border: '1px solid var(--glass-border)' }}>`;
tsx = tsx.replace(flexTarget, flexReplace).replace(flexTarget, flexReplace);

const gridTarget = `                            <div className="grid grid-cols-2 gap-1 bg-black/20 rounded-lg p-1 border" style={{ borderColor: 'var(--glass-border)' }}>`;
const gridReplace = `                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '4px', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '4px', border: '1px solid var(--glass-border)' }}>`;
tsx = tsx.replace(gridTarget, gridReplace);

const btnTargetDark = `className={\`flex-1 py-2 rounded-md flex justify-center items-center gap-2 text-sm transition-colors \${theme === 'dark' ? 'bg-[var(--color-marine)] text-[var(--color-background)] font-bold shadow-md' : 'hover:bg-black/20'}\`}`;
const btnReplaceDark = `style={{ flex: 1, padding: '8px 0', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '0.875rem', cursor: 'pointer', transition: 'background-color 0.2s', border: 'none', background: theme === 'dark' ? 'var(--color-marine)' : 'transparent', color: theme === 'dark' ? 'var(--color-background)' : 'inherit', fontWeight: theme === 'dark' ? 'bold' : 'normal', boxShadow: theme === 'dark' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none' }}`;
tsx = tsx.replace(btnTargetDark, btnReplaceDark);

const btnTargetLight = `className={\`flex-1 py-2 rounded-md flex justify-center items-center gap-2 text-sm transition-colors \${theme === 'light' ? 'bg-[var(--color-marine)] text-[var(--color-background)] font-bold shadow-md' : 'hover:bg-black/20'}\`}`;
const btnReplaceLight = `style={{ flex: 1, padding: '8px 0', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '0.875rem', cursor: 'pointer', transition: 'background-color 0.2s', border: 'none', background: theme === 'light' ? 'var(--color-marine)' : 'transparent', color: theme === 'light' ? 'var(--color-background)' : 'inherit', fontWeight: theme === 'light' ? 'bold' : 'normal', boxShadow: theme === 'light' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none' }}`;
tsx = tsx.replace(btnTargetLight, btnReplaceLight);

const btnTargetTilt = `className={\`flex-1 py-2 rounded-md flex justify-center items-center gap-2 text-sm transition-colors \${enableTilt ? 'bg-[var(--color-marine)] text-[var(--color-background)] font-bold shadow-md' : 'hover:bg-black/20'}\`}`;
const btnReplaceTilt = `style={{ flex: 1, padding: '8px 0', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '0.875rem', cursor: 'pointer', transition: 'background-color 0.2s', border: 'none', background: enableTilt ? 'var(--color-marine)' : 'transparent', color: enableTilt ? 'var(--color-background)' : 'inherit', fontWeight: enableTilt ? 'bold' : 'normal', boxShadow: enableTilt ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none' }}`;
tsx = tsx.replace(btnTargetTilt, btnReplaceTilt);

const btnTargetFlat = `className={\`flex-1 py-2 rounded-md flex justify-center items-center gap-2 text-sm transition-colors \${!enableTilt ? 'bg-[var(--color-marine)] text-[var(--color-background)] font-bold shadow-md' : 'hover:bg-black/20'}\`}`;
const btnReplaceFlat = `style={{ flex: 1, padding: '8px 0', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '0.875rem', cursor: 'pointer', transition: 'background-color 0.2s', border: 'none', background: !enableTilt ? 'var(--color-marine)' : 'transparent', color: !enableTilt ? 'var(--color-background)' : 'inherit', fontWeight: !enableTilt ? 'bold' : 'normal', boxShadow: !enableTilt ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none' }}`;
tsx = tsx.replace(btnTargetFlat, btnReplaceFlat);

const btnTargetLayout = `className={\`py-2 rounded-md flex justify-center items-center gap-2 text-sm capitalize transition-colors \${layout === l ? 'bg-[var(--color-marine)] text-[var(--color-background)] font-bold shadow-md' : 'hover:bg-black/20'}\`}`;
const btnReplaceLayout = `style={{ padding: '8px 0', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '0.875rem', textTransform: 'capitalize', cursor: 'pointer', transition: 'background-color 0.2s', border: 'none', background: layout === l ? 'var(--color-marine)' : 'transparent', color: layout === l ? 'var(--color-background)' : 'inherit', fontWeight: layout === l ? 'bold' : 'normal', boxShadow: layout === l ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none' }}`;
tsx = tsx.replace(btnTargetLayout, btnReplaceLayout);

fs.writeFileSync('src/components/SettingsDropdown.tsx', tsx);
