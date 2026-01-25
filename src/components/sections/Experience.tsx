import MotionSection from "@/components/MotionSection";
import StickyHeader from "@/components/StickyHeader";

export default function Experience() {
    return (
        <MotionSection id="experience">
            <StickyHeader
                title="Experience"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                }
            />
            <div className="experiences">
                <a href="https://www.cvent.com/" target="_blank" className="exp">
                    <span className="title link-svg" title="Job title">
                        Senior Frontend Engineer ・ Cvent
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
                        <small title="Duration">MAY 2025 - PRESENT</small>
                    </p>
                    <p className="mt-2 text-sm leading-normal">
                        Migrated core event attendees discovery pages to Next.js using the App
                        Router and SSR, fixing SEO indexing issues for large-scale event
                        catalogs and improving initial paint speed for mobile users.
                        <br />
                        Contributed to core framework by adding the Smart Filter for Check-in
                        question management across sessions (comboboxes, multi-select facets)
                        for the UI library, utilizing virtualization supporting 10,000+ items.
                        <br />
                        Migrated old REST endpoints to a GraphQL aggregation layer, reducing
                        data grid load-time by 25%.
                        <br />
                        Set up LaunchDarkly experiment tags to run A/B tests on new attendee
                        search ranking logic per event.
                        <br />
                        Integrated Mixpanel analytics to track search query fallouts and
                        zero-result rates, providing data-driven insights to refine inventory
                        presentation.
                        <br />
                        Designed and delivered a React + TypeScript UI templates library
                        enabling 40% faster feature rollout and enforcing cross-team design
                        consistency for custom forms.
                    </p>
                    <ul className="badge-wrapper">
                        <li className="badge">React 18+</li>
                        <li className="badge">Next.js</li>
                        <li className="badge">TypeScript</li>
                        <li className="badge">GraphQL</li>
                        <li className="badge">LaunchDarkly</li>
                        <li className="badge">Mixpanel</li>
                        <li className="badge">SSR</li>
                        <li className="badge">Virtualization</li>
                        <li className="badge">A/B Testing</li>
                    </ul>
                    <p />
                </a>
                <a
                    href="https://www.ciena.com/products/manage-control-plan"
                    target="_blank"
                    className="exp"
                >
                    <span className="title link-svg" title="Job title">
                        Software Development Engineer 2A ・ Ciena
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
                        <small title="Duration">OCT 2022 - MAY 2025</small>
                    </p>
                    <p className="mt-2 text-sm leading-normal">
                        Architected and delivered 4 micro-frontends for enterprise B2B SaaS
                        product, enabling modular deployment and driving a 15% increase in
                        adoption.
                        <br />
                        Re-engineered legacy Ember applications into React + Hooks, reducing
                        load times by 10% and improving long-term maintainability.
                        <br />
                        Contributed to mid-tier monorepo and design system improvements,
                        reducing UI code duplication across teams.
                        <br />
                        Integrated and optimized REST API workflows with sub-200ms median
                        response times across daily transactions.
                        <br />
                        Mentored 3 frontend engineers in component patterns, testing strategy,
                        and accessibility best practices.
                        <br />
                        Led sprint planning, technical grooming, and cross-team reviews
                        improving delivery predictability.
                        <br />
                        Improved observability by designing Datadog dashboards for latency,
                        client errors, and UX metrics.
                    </p>
                    <ul className="badge-wrapper">
                        <li className="badge">React</li>
                        <li className="badge">Ember</li>
                        <li className="badge">TypeScript</li>
                        <li className="badge">Micro-frontends</li>
                        <li className="badge">REST API</li>
                        <li className="badge">Datadog</li>
                        <li className="badge">Design Systems</li>
                        <li className="badge">Mentoring</li>
                    </ul>
                    <p />
                </a>
                <a href="https://www.nagarro.com/en" target="_blank" className="exp">
                    <span className="title link-svg" title="Job title">
                        Senior Engineer, Technology ・ Nagarro
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
                    <div
                        className="link-svg"
                        style={{ paddingTop: 10, fontSize: 13 }}
                        title="Job title"
                    >
                        Also,
                        <b>Engineer</b> and <b>Junior Engineer</b>
                    </div>
                    <p>
                        <small title="Duration">DEC 2018 - OCT 2022</small>
                    </p>
                    <p className="mt-2 text-sm leading-normal">
                        Built 20+ reusable React components and marketing features for global
                        clients, improving engagement and reusability.
                        <br />
                        Designed and developed a custom WYSIWYG editor, reducing editorial
                        go-live time and increasing workflow efficiency.
                        <br />
                        Implemented code-splitting and async-loading patterns, improving page
                        performance by 20%.
                        <br />
                        Led the design, testing and deployment of 4+ React web components
                        yielding a 10% increase in content loading speed, 10,000+ new leads
                        captured and increased revenue.
                        <br />
                        Mentored 4 junior developers through structured project-based learning
                        and architecture sessions.
                        <br />
                        Successfully delivered 6+ web components to optimize lead capture for a
                        major US-based pharmaceutical manufacturer.
                    </p>
                    <ul className="badge-wrapper">
                        <li className="badge">React</li>
                        <li className="badge">JavaScript</li>
                        <li className="badge">HTML5</li>
                        <li className="badge">CSS3</li>
                        <li className="badge">Redux</li>
                        <li className="badge">Webpack</li>
                        <li className="badge">Babel</li>
                        <li className="badge">Material UI</li>
                        <li className="badge">Bootstrap</li>
                        <li className="badge">Web Accessibility</li>
                        <li className="badge">Cypress</li>
                        <li className="badge">Git</li>
                        <li className="badge">Jira</li>
                        <li className="badge">Confluence</li>
                        <li className="badge">NPM</li>
                        <li className="badge">Test automation</li>
                        <li className="badge">Node.js</li>
                        <li className="badge">MySQL</li>
                        <li className="badge">SQL</li>
                    </ul>
                    <p />
                </a>
                <a href="https://www.nagarro.com/en" target="_blank" className="exp">
                    <span className="title link-svg" title="Job title">
                        Financial Planning Association ・ Nagarro
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
                        <small title="Duration">MAR 2019 - OCT 2019</small>
                    </p>
                    <p className="mt-2 text-sm leading-normal">
                        Built 5+ micro-sites and 10+ landing pages for the product portfolio website
                        and marketing campaigns. Collaborated with a team of designers, developers,
                        and content writers to create engaging and informative content. Successfully
                        launched micro-sites and landing pages that increased lead generation by 12%
                        and increased sales.
                    </p>
                    <ul className="badge-wrapper">
                        <li className="badge">HTML</li>
                        <li className="badge">CSS</li>
                        <li className="badge">JavaScript</li>
                        <li className="badge">Bootstrap</li>
                        <li className="badge">Responsive website</li>
                    </ul>
                    <p />
                </a>
                <div className="text-center">
                    <a
                        className="my-1 underline-link link-svg"
                        href="https://drive.google.com/file/d/1q3_JnY4aZkErOjITSaG2SyIlLpJ1QfDu/view?usp=sharing"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        View Full Resume
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
                    </a>
                </div>
            </div>
        </MotionSection>
    );
}
