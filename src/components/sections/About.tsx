import MotionSection from "@/components/MotionSection";
import StickyHeader from "@/components/StickyHeader";

export default function About() {
    return (
        <MotionSection id="about">
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
