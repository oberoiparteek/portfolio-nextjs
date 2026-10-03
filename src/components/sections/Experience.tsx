import MotionSection from "@/components/MotionSection";
import StickyHeader from "@/components/StickyHeader";
import TiltCard from "@/components/TiltCard";

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
                <TiltCard>
                <a href="https://www.cvent.com/" target="_blank" className="exp">
                    <div className="flex items-start gap-4 mb-2">
                        <img src="/images/cvent.svg" alt="Cvent Logo" style={{ width: "48px", height: "48px", minWidth: "48px", minHeight: "48px", backgroundColor: "white", padding: "4px" }} className="rounded-lg shadow-sm bg-white p-1 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                        <div>
                            <span className="title link-svg text-lg" title="Job title" style={{ display: 'flex', alignItems: 'center' }}>
                                Senior Frontend Engineer
                                <svg
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
                            <span className="text-sm font-medium mt-1 inline-block" style={{ color: 'var(--color-marine)' }}>Cvent</span>
                        </div>
                    </div>
                    <p>
                        <small title="Duration">MAY 2025 - PRESENT</small>
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1.5rem', marginBottom: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-heading-color)' }}>4</div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Micro-frontends</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-heading-color)' }}>3</div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Squads Adopted</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-heading-color)' }}>1M+</div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Artifacts Scaled</div>
                        </div>
                    </div>
                    <ul className="text-sm leading-normal list-disc ml-6 space-y-2">
                        <li><strong>Frontend Ownership:</strong> Directed architectural decisions, RFCs, and end-to-end production delivery across 4 micro-frontends.</li>
                        <li><strong>Platform Architecture:</strong> Built a reusable React form platform with dynamic validation and accessibility, adopted by 3 product squads.</li>
                        <li><strong>Distributed Rendering:</strong> Scaled asynchronous PDF generation platform to process 1M+ artifacts via AWS ECS Fargate, and engineered a parallel browser-based rendering prototype.</li>
                        <li><strong>GraphQL Optimization:</strong> Decoupled configuration reads via Server-to-Server calls, offloading ~50% of the payload and improving load times.</li>
                    </ul>
                    <ul className="badge-wrapper">
                        <li className="badge">React</li>
                        <li className="badge">Micro-Frontends</li>
                        <li className="badge">GraphQL</li>
                        <li className="badge">AWS ECS</li>
                        
                        <li className="badge">LLM Tooling</li>
                    </ul>
                    <p />
                </a>
                </TiltCard>
                <TiltCard>
                <a href="https://www.ciena.com/products/manage-control-plan" target="_blank" className="exp">
                    <div className="flex items-start gap-4 mb-2">
                        <img src="/images/ciena.svg" alt="Ciena Logo" style={{ width: "48px", height: "48px", minWidth: "48px", minHeight: "48px", backgroundColor: "white", padding: "4px" }} className="rounded-lg shadow-sm bg-white p-1 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                        <div>
                            <span className="title link-svg text-lg" title="Job title" style={{ display: 'flex', alignItems: 'center' }}>
                                Software Development Engineer 2A
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
                            <span className="text-sm font-medium mt-1 inline-block" style={{ color: 'var(--color-marine)' }}>Ciena</span>
                        </div>
                    </div>
                    <p>
                        <small title="Duration">OCT 2022 - MAY 2025</small>
                    </p>
                    <ul className="mt-2 text-sm leading-normal list-disc ml-6 space-y-2">
                        <li>Architected and shipped 4 micro-frontends for an enterprise B2B SaaS platform, enabling autonomous squad deployments and increasing feature adoption by 15%.</li>
                        <li>Re-engineered legacy Ember components into React, delivering a high-performance device management dashboard that reduced device setup time from 9 to 5 minutes and improved FCP by 40%.</li>
                        <li>Built dynamic JSON hydration pipelines for configurable UI workflows, optimizing REST API integrations to sustain sub-500ms median latency.</li>
                        <li>Engineered automated end-to-end test suites using Playwright and Mocha, slashing manual QA verification cycles by 95%.</li>
                        <li>Designed comprehensive Datadog telemetry dashboards tracking client-side errors and network latency to maintain 99.9% UI operational reliability.</li>
                    </ul>
                    <ul className="badge-wrapper">
                        <li className="badge">Micro-frontends</li>
                        <li className="badge">React</li>
                        <li className="badge">TypeScript</li>
                        <li className="badge">Playwright</li>
                        <li className="badge">Mocha</li>
                        <li className="badge">Datadog</li>
                        <li className="badge">REST API</li>
                    </ul>
                    <p />
                </a>
                </TiltCard>
                <TiltCard>
                <a href="https://www.nagarro.com/en" target="_blank" className="exp">
                    <div className="flex items-start gap-4 mb-2">
                        <img src="/images/nagarro.svg" alt="Nagarro Logo" style={{ width: "48px", height: "48px", minWidth: "48px", minHeight: "48px", backgroundColor: "white", padding: "4px" }} className="rounded-lg shadow-sm bg-white p-1 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                        <div>
                            <span className="title link-svg text-lg" title="Job title" style={{ display: 'flex', alignItems: 'center' }}>
                                Senior Engineer, Technology
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
                            <span className="text-sm font-medium mt-1 inline-block" style={{ color: 'var(--color-marine)' }}>Nagarro</span>
                            <div
                                className="link-svg"
                                style={{ paddingTop: 4, fontSize: 13, opacity: 0.8 }}
                                title="Job title"
                            >
                                Also, <b>Engineer</b> and <b>Junior Engineer</b>
                            </div>
                        </div>
                    </div>
                    <p>
                        <small title="Duration">DEC 2018 - OCT 2022</small>
                    </p>
                    <ul className="mt-2 text-sm leading-normal list-disc ml-6 space-y-2">
                        <li>Developed 20+ reusable React components across enterprise design systems, integrating with Adobe Experience Manager (AEM) and Salesforce Marketing Cloud.</li>
                        <li>Built an in-house interactive quiz platform to replace a third-party solution, integrating natively with Google Analytics and CRM services while preserving existing tracking schemas and eliminating intermediary data integrations.</li>
                        <li>Built high-throughput Python and Node.js data validation and de-duplication pipelines deployed on AWS, paired with React proof-of-concept interfaces.</li>
                    </ul>
                    <ul className="badge-wrapper">
                        <li className="badge">React</li>
                        <li className="badge">Python</li>
                        <li className="badge">Node.js</li>
                        <li className="badge">AWS</li>
                        <li className="badge">AEM</li>
                        <li className="badge">Salesforce</li>
                    </ul>
                    <p />
                </a>
                </TiltCard>

                
            </div>
        </MotionSection>
    );
}
