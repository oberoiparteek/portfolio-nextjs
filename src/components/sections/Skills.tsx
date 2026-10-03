import MotionSection from "@/components/MotionSection";
import StickyHeader from "@/components/StickyHeader";

export default function Skills() {
    return (
        <MotionSection id="skills">
            <StickyHeader
                title="Skills"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                }
            />
            <div className="skills">
                <div className="frontend">
                    <span>Frontend Architecture:</span>
                    <ul className="badge-wrapper green">
                        <li className="badge">React 19 & RSC</li>
                        <li className="badge">Next.js (App Router, PPR)</li>
                        <li className="badge">TypeScript</li>
                        <li className="badge">Konva.js</li>
                        <li className="badge">Micro-Frontends</li>
                        <li className="badge">Design Systems</li>
                        <li className="badge">Tailwind CSS</li>
                        <li className="badge">WCAG Accessibility</li>
                        <li className="badge">Web Vitals (INP, LCP)</li>
                    </ul>
                </div>
                <div className="sdetools">
                    <span>Engineering Excellence:</span>
                    <ul className="badge-wrapper yellow">
                        <li className="badge">LLM Agent Tooling</li>
                        <li className="badge">Playwright</li>
                        <li className="badge">Mocha</li>
                        <li className="badge">Datadog Observability</li>
                        <li className="badge">CI/CD Automation</li>
                        <li className="badge">Distributed Systems</li>
                    </ul>
                </div>
                <div className="backend">
                    <span>Backend & Cloud:</span>
                    <ul className="badge-wrapper red">
                        <li className="badge">Node.js</li>
                        <li className="badge">Python</li>
                        <li className="badge">GraphQL (Apollo Federation)</li>
                        <li className="badge">AWS (ECS Fargate)</li>
                        <li className="badge">OpenSearch</li>
                        <li className="badge">REST APIs</li>
                        <li className="badge">Microservices</li>
                    </ul>
                </div>
            </div>
        </MotionSection>
    );
}
