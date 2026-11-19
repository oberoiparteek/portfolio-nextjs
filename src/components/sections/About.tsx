import MotionSection from "@/components/MotionSection";
import StickyHeader from "@/components/StickyHeader";
import Image from "next/image";

export default function About() {
    return (
        <MotionSection id="about">
            <div className="mb-12">
                <div className="mb-6">
                    <Image
                        src="/images/profile-hires.jpg"
                        alt="Parteek Kumar"
                        width={96}
                        height={96}
                        className="rounded-full shadow-md border-2"
                        style={{ width: '120px', height: '120px', minWidth: '120px', minHeight: '120px', borderRadius: '50%', borderColor: 'var(--color-marine)', objectFit: 'cover' }}
                        priority
                    />
                </div>
                <p
                    className="mb-4 tracking-widest"
                    style={{
                        fontFamily: 'var(--font-martian), ui-monospace, monospace',
                        color: 'var(--color-marine)',
                        opacity: 1,
                        textTransform: 'uppercase',
                        fontSize: '0.75rem',
                        fontWeight: 600
                    }}
                >
                    <span className="inline-block w-1.5 h-1.5 rounded-full mr-2 animate-pulse" style={{ backgroundColor: 'var(--color-marine)', transform: 'translateY(-1px)' }}></span>
                    Available for Senior Frontend roles • Based in Gurgaon • Open to relocation
                </p>
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-2" style={{ fontFamily: 'var(--font-bricolage), sans-serif' }}>
                    Parteek Kumar
                </h1>
                <h2 className="text-lg sm:text-xl font-medium mb-5" style={{ fontFamily: 'var(--font-bricolage), sans-serif', color: 'rgb(var(--text-s-color))' }}>
                    Senior Frontend Engineer at Cvent
                </h2>
                <p className="text-base max-w-sm opacity-80" style={{ color: 'rgb(var(--text-s-color))' }}>
                    I build scalable customer-facing web applications and developer tools
                    that solve real user problems.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem', marginBottom: '2rem' }}>
                    <a 
                        href="#experience"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0.75rem 1.5rem',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            borderRadius: '9999px',
                            transition: 'all 0.3s',
                            background: 'var(--color-marine)',
                            color: 'var(--color-on-marine)',
                            boxShadow: '0 4px 14px rgba(13, 148, 136, 0.3)',
                            textDecoration: 'none'
                        }}
                    >
                        Explore Experience <span style={{ marginLeft: "0.5rem" }}>→</span>
                    </a>
                    <a 
                        href="/r"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0.75rem 1.5rem',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            borderRadius: '9999px',
                            transition: 'all 0.3s',
                            background: 'var(--glass-bg-start)',
                            color: 'var(--text-heading-color)',
                            border: '1px solid var(--glass-border)',
                            boxShadow: 'var(--card-shadow)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            textDecoration: 'none'
                        }}
                    >
                        View Resume
                    </a>
                </div>

                {/* Mobile-only social links placed cleanly in Hero */}
                <div className="mobile-hero-socials" style={{ display: 'none', alignItems: 'center', gap: '1.25rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
                    <a href="https://github.com/oberoiparteek" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--text-heading-color)', opacity: 0.8, transition: 'opacity 0.2s' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                    <a href="https://twitter.com/oberoi_parteek" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: 'var(--text-heading-color)', opacity: 0.8, transition: 'opacity 0.2s' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/kumarparteek/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-heading-color)', opacity: 0.8, transition: 'opacity 0.2s' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="mailto:oberoi.parteek@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" style={{ color: 'var(--color-marine)', opacity: 0.9, transition: 'opacity 0.2s' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </a>
                </div>
</div>
            <StickyHeader
                title="About"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                }
            />
            <p>
                I'm a Senior Frontend Engineer focused on building scalable web applications and developer platforms. I work primarily with React, Next.js, TypeScript, and GraphQL, with a particular interest in frontend architecture, performance, and developer experience.
            </p>
            <p>
                Over the last 7+ years, I've had the privilege of building robust solutions for industries ranging from <b>event management</b> and <b>telecommunications</b> to <b>biotechnology</b>. I enjoy solving problems where complex engineering meets intuitive product UX.
            </p>
            
        </MotionSection>
    );
}
