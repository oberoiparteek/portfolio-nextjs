import MotionSection from "@/components/MotionSection";
import StickyHeader from "@/components/StickyHeader";

export default function Publications() {
    return (
        <MotionSection id="publications">
            <StickyHeader
                title="Publications"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                }
            />
            <div className="experiences">
                <a href="https://aclanthology.org/" target="_blank" className="exp">
                    <span className="title link-svg" title="Publication">
                        Probing Audio-Generation Capabilities of Text-Based LLMs ・ NAACL SRW
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
                        <small title="Publication Year">2025</small>
                    </p>
                    <p className="mt-2 text-sm leading-normal">
                        Research paper published at NAACL (North American Chapter of the
                        Association for Computational Linguistics) Student Research Workshop
                        2025, investigating the capabilities of large language models in
                        generating audio content from text-based prompts.
                    </p>
                    <ul className="badge-wrapper">
                        <li className="badge">Research</li>
                        <li className="badge">LLMs</li>
                        <li className="badge">Audio Generation</li>
                        <li className="badge">NLP</li>
                        <li className="badge">NAACL 2025</li>
                    </ul>
                    <p />
                </a>
            </div>
        </MotionSection>
    );
}
