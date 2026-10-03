import MotionSection from "@/components/MotionSection";
import StickyHeader from "@/components/StickyHeader";
import TiltCard from "@/components/TiltCard";

export default function Projects() {
    return (
        <MotionSection id="projects">
            <StickyHeader
                title="Projects"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                }
            />
            <div className="experiences">
                

                <TiltCard>
                <a href="https://www.cvent.com/" target="_blank" className="exp">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                        <div style={{ padding: "10px", borderRadius: "8px", background: "rgba(92, 229, 213, 0.1)", color: "var(--color-marine)", flexShrink: 0, width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                        <div>
                            <span className="title link-svg text-lg" title="Project" style={{ display: 'flex', alignItems: 'center' }}>
                        Enterprise Event Management Platform ・ Cvent
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
                        </svg></span>
<p>
<small title="Duration">MAY 2025 - PRESENT</small>
</p>
<ul className="mt-2 text-sm leading-normal list-disc ml-6 space-y-2">
                        <li>Spearheaded the frontend architecture for multiple micro-frontend applications within a global enterprise event management platform.</li>
                        <li>Engineered an advanced Konva.js integration for dynamic visual rendering, paired with scalable AWS Fargate services to handle high-throughput, automated artifact generation for attendee credentialing.</li>
                        <li>Developed secure administrative portals for event organizers featuring complex role-based access control and collaboration workflows, seamlessly integrating these UIs with distributed backend services via GraphQL.</li>
                    </ul>
                    <ul className="badge-wrapper">
                        <li className="badge">Micro-Frontends</li>
                        <li className="badge">React 19</li>
                        <li className="badge">Next.js</li>
                        <li className="badge">Konva.js</li>
                        <li className="badge">AWS Fargate</li>
                        <li className="badge">GraphQL</li>
                        <li className="badge">RBAC</li>
                    </ul>
                    <p /></div></div></a>
                </TiltCard>
                <TiltCard>
                <a href="https://www.ciena.com/products/manage-control-plan" target="_blank" className="exp">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                        <div style={{ padding: "10px", borderRadius: "8px", background: "rgba(92, 229, 213, 0.1)", color: "var(--color-marine)", flexShrink: 0, width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        </div>
                        <div>
                            <span className="title link-svg text-lg" title="Job title" style={{ display: 'flex', alignItems: 'center' }}>
                        MCP (Manage Control Plan) Controller application・ Ciena
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
                        </svg></span>
<p>
<small title="Duration">OCT 2022 - MAY 2025</small>
</p>
<ul className="mt-2 text-sm leading-normal list-disc ml-6 space-y-2">
                        <li>Developed 10+ reusable and performant UI screens and components using Ciena’s Frost Components to add new features to the product.</li>
                        <li>Delivered 3 end-to-end features within small agile teams, from development to testing, and deployment.</li>
                        <li>Utilized JavaScript, React, Ember, SCSS, HTML and WebStorm to create reliable, and robust web components.</li>
                    </ul>
                    <ul className="badge-wrapper">
                        <li className="badge">Ember</li>
                        <li className="badge">React</li>
                        <li className="badge">HTML</li>
                        <li className="badge">SCSS</li>
                        <li className="badge">JavaScript</li>
                        <li className="badge">TypeScript</li>
                    </ul>
                    <p /></div></div></a>
                </TiltCard>
                <TiltCard>
                <a href="https://www.nagarro.com/en" target="_blank" className="exp">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                        <div style={{ padding: "10px", borderRadius: "8px", background: "rgba(92, 229, 213, 0.1)", color: "var(--color-marine)", flexShrink: 0, width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        </div>
                        <div>
                            <span className="title link-svg text-lg" title="Job title" style={{ display: 'flex', alignItems: 'center' }}>
                        US manufacturer of biomedical devices (Client Site) ・ Nagarro
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
                        </svg></span>
<p>
                        <small title="Duration">JAN 2021 - OCT 2022</small>
                    </p>
                    <ul className="mt-2 text-sm leading-normal list-disc ml-6 space-y-2">
                        <li>Lead team in overhauling lead capturing and nurturing process, resulting in a 20% lead conversion rate increase.</li>
                        <li>Conducted feasibility study and created design documents for new lead capturing and nurturing system.</li>
                        <li>Developed and delivered 4+ React web components for AEM web application, improving user experience and increasing active users.</li>
                        <li>Developed 7+ microsites for the product portfolio and marketing automation teams.</li>
                    </ul>
                    <ul className="badge-wrapper">
                        <li className="badge">React</li>
                        <li className="badge">Redux</li>
                        <li className="badge">HTML</li>
                        <li className="badge">SCSS</li>
                        <li className="badge">JavaScript</li>
                        <li className="badge">Communication</li>
                        <li className="badge">Code Design</li>
                        <li className="badge">Problem Solving</li>
                        <li className="badge">Bootstrap</li>
                        <li className="badge">Git</li>
                    </ul>
                    <p /></div></div></a>
                </TiltCard>
                <TiltCard>
                <a href="https://www.nagarro.com/en" target="_blank" className="exp">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                        <div style={{ padding: "10px", borderRadius: "8px", background: "rgba(92, 229, 213, 0.1)", color: "var(--color-marine)", flexShrink: 0, width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <div>
                            <span className="title link-svg text-lg" title="Job title" style={{ display: 'flex', alignItems: 'center' }}>
                        Swedish Identity and security management ・ Nagarro
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
                        </svg></span>
<p>
                        <small title="Duration">OCT 2019 - JAN 2021</small>
                    </p>
                    <ul className="mt-2 text-sm leading-normal list-disc ml-6 space-y-2">
                        <li>Collaborated with a cross-functional team to design and implement data pipelines to migrate 50000+ records from the acquired to the parent organization.</li>
                        <li>Engineered and automated migration for 10+ relational objects using staging MYSQL tables to improve data consistency across products.</li>
                        <li>Implemented and scheduled 10+ Data Governance workflows to perform data transformations using JavaScript and MYSQL.</li>
                    </ul>
                    <ul className="badge-wrapper">
                        <li className="badge">JavaScript</li>
                        <li className="badge">Tray.io</li>
                        <li className="badge">Data Modelling</li>
                        <li className="badge">Data Governance</li>
                        <li className="badge">MySQL</li>
                        <li className="badge">ScaleGrid</li>
                    </ul>
                    <p /></div></div></a>
                </TiltCard>
                <TiltCard>
                <a href="https://www.nagarro.com/en" target="_blank" className="exp">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                        <div style={{ padding: "10px", borderRadius: "8px", background: "rgba(92, 229, 213, 0.1)", color: "var(--color-marine)", flexShrink: 0, width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                        </div>
                        <div>
                            <span className="title link-svg text-lg" title="Job title" style={{ display: 'flex', alignItems: 'center' }}>
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
                        </svg></span>
<p>
                        <small title="Duration">MAR 2019 - OCT 2019</small>
                    </p>
                    <ul className="mt-2 text-sm leading-normal list-disc ml-6 space-y-2">
                        <li>Built 5+ micro-sites and 10+ landing pages for the product portfolio website and marketing campaigns.</li>
                        <li>Collaborated with a team of designers, developers, and content writers to create engaging and informative content.</li>
                        <li>Successfully launched micro-sites and landing pages that increased lead generation by 12% and increased sales.</li>
                    </ul>
                    <ul className="badge-wrapper">
                        <li className="badge">HTML</li>
                        <li className="badge">CSS</li>
                        <li className="badge">JavaScript</li>
                        <li className="badge">Bootstrap</li>
                        <li className="badge">Responsive website</li>
                    </ul>
                    <p /></div></div></a>
                </TiltCard>
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
