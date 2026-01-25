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
                    <span>Front-end Technologies:</span>
                    <ul className="badge-wrapper green">
                        <li className="badge">React 18+</li>
                        <li className="badge">Next.js</li>
                        <li className="badge">TypeScript</li>
                        <li className="badge">JavaScript</li>
                        <li className="badge">GraphQL</li>
                        <li className="badge">HTML5</li>
                        <li className="badge">CSS3/SCSS</li>
                        <li className="badge">Redux</li>
                        <li className="badge">Webpack</li>
                        <li className="badge">Babel</li>
                        <li className="badge">Storybook</li>
                        <li className="badge">Material UI</li>
                        <li className="badge">Bootstrap</li>
                        <li className="badge">WCAG 2.2 AA</li>
                        <li className="badge">Jest</li>
                        <li className="badge">Cypress</li>
                        <li className="badge">Playwright</li>
                    </ul>
                </div>
                <div className="sdetools">
                    <span>Software Development Tools:</span>
                    <ul className="badge-wrapper yellow">
                        <li className="badge">Git</li>
                        <li className="badge">Jira</li>
                        <li className="badge">Confluence</li>
                        <li className="badge">Docker</li>
                        <li className="badge">Jenkins</li>
                        <li className="badge">NPM</li>
                        <li className="badge">IntelliJ</li>
                        <li className="badge">Rest API</li>
                        <li className="badge">LaunchDarkly</li>
                        <li className="badge">Mixpanel</li>
                        <li className="badge">Datadog</li>
                        <li className="badge">Test automation</li>
                    </ul>
                </div>
                <div className="backend">
                    <span>Backend and databases:</span>
                    <ul className="badge-wrapper red">
                        <li className="badge">Node.js</li>
                        <li className="badge">Python</li>
                        <li className="badge">MySQL</li>
                        <li className="badge">SQL</li>
                    </ul>
                </div>
            </div>
        </MotionSection>
    );
}
