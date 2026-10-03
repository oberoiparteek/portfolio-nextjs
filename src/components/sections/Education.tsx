import MotionSection from "@/components/MotionSection";
import StickyHeader from "@/components/StickyHeader";

export default function Education() {
    return (
        <MotionSection id="education">
            <StickyHeader
                title="Education"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                }
            />
            <div className="experiences">
                <a href="https://online.gndu.ac.in/" target="_blank" className="exp">
                    <span className="title link-svg" title="Degree">
                        Master of Computer Applications (MCA) ・ Guru Nanak Dev University
                        <svg
                            role="presentation"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                    <p>
                        <small title="GPA">Score: 8.7 / 10.0</small>
                    </p>
                    <p />
                </a>
            </div>
        </MotionSection>
    );
}
