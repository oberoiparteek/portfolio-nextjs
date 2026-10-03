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
                        className="w-24 h-24 rounded-full shadow-md border-2"
                        style={{ width: '96px', height: '96px', minWidth: '96px', minHeight: '96px', borderColor: 'rgba(92, 229, 213, 0.4)', objectFit: 'cover' }}
                        priority
                    />
                </div>
                <p
                    className="mb-4 tracking-widest"
                    style={{
                        fontFamily: 'var(--font-martian), ui-monospace, monospace',
                        color: 'var(--color-marine)',
                        opacity: 0.8,
                        textTransform: 'uppercase',
                        fontSize: '0.7rem',
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
                    that solve real user problems.
                </p>
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
                I'm Parteek Kumar, a <b>Senior Frontend Engineer and Tech Lead</b> with over 7 years of
                experience engineering scalable micro-frontends, distributed rendering systems, and reusable UI platforms.
                I specialize in the modern web stack—React 19, Next.js (App Router), TypeScript, and GraphQL.
                I have a proven track record of leading UI architecture across multiple squads, improving frontend performance,
                and integrating AI/LLM developer workflows.
            </p>
            <p>
                Outside of the terminal, I enjoy the focus and strategy of{" "}
                <span className="tooltip">
                    <span className="fortnite-pointer">Fortnite</span> and <span className="sniper-pointer">Call of Duty</span>
                    <span className="tooltiptext" style={{ width: 'max-content', bottom: '120%', left: '50%', transform: 'translateX(-50%)' }}>
                        🎮 Hint: Try the Konami Code! (↑ ↑ ↓ ↓ ← → ← → B A)
                    </span>
                </span>
                . Just like in development, precision and quick decision-making are key!
                Throughout my career, I've had the privilege of building robust solutions for industries ranging
                from <b>event management</b> and <b>telecommunications</b> to <b>biotechnology</b>.
                Recently, I also published peer-reviewed research on <b>Probing Audio-Generation Capabilities of Text-Based LLMs at NAACL SRW 2025</b>, exploring the frontier of AI and frontend interaction.
            </p>
        </MotionSection>
    );
}
