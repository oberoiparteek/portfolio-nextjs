import MotionSection from "@/components/MotionSection";
import StickyHeader from "@/components/StickyHeader";

export default function BeyondCode() {
    return (
        <MotionSection id="beyond-code">
            <StickyHeader
                title="Beyond Code"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                }
            />
            <p style={{ lineHeight: '1.8' }}>
                Outside of the terminal, I enjoy the focus and strategy of{" "}
                <span className="tooltip">
                    <span className="fortnite-pointer font-bold" style={{ color: 'var(--text-heading-color)' }}>Fortnite</span> and <span className="sniper-pointer font-bold" style={{ color: 'var(--text-heading-color)' }}>Call of Duty</span>
                    <span className="tooltiptext" style={{ width: 'max-content', bottom: '120%', left: '50%', transform: 'translateX(-50%)' }}>
                        🎮 Hint: Try the Konami Code! (↑ ↑ ↓ ↓ ← → ← → B A)
                    </span>
                </span>
                . Just like in development, precision and quick decision-making are key!
            </p>
        </MotionSection>
    );
}
