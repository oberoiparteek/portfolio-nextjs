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
                I'm Parteek Kumar, a <b>Senior Frontend Engineer</b> with over 7 years of
                experience crafting high-performance, user-centric web applications.
                I specialize in the modern web stack—React, TypeScript, Next.js, and GraphQL—but
                my passion goes beyond just writing clean code. I'm driven by the challenge of
                solving real-world problems and delivering polished digital experiences that
                users genuinely love to use.
            </p>
            <p>
                Outside of the terminal, I enjoy the focus and strategy of <span className="fortnite-pointer">Fortnite</span> and <span className="sniper-pointer">Call of Duty</span>. Just like in development, precision and quick decision-making are key!
                Throughout my career, I've had the privilege of building robust solutions for industries ranging
                from <b>event management</b> and <b>telecommunications</b> to <b>biotechnology</b>.
                My work is grounded in scalable architecture and performance optimization, ensuring that the
                applications I build can stand the test of time and scale. Recently, I also
                published research on <b>LLM audio-generation capabilities at NAACL 2025</b>, exploring the
                frontier of AI and frontend interaction.
            </p>
        </MotionSection>
    );
}
