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
                        style={{ width: '120px', height: '120px', minWidth: '120px', minHeight: '120px', borderRadius: '50%', borderColor: 'rgba(92, 229, 213, 0.4)', objectFit: 'cover' }}
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
                            color: 'rgb(15, 23, 42)',
                            boxShadow: '0 4px 14px rgba(92, 229, 213, 0.4)',
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
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: 'var(--text-heading-color)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            textDecoration: 'none'
                        }}
                    >
                        View Resume
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
