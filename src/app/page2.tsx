"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects", "publications", "volunteering"];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "publications", label: "PUBLICATIONS" },
    { id: "volunteering", label: "VOLUNTEERING" },
  ];

  const skills = {
    frontend: [
      "React 18+", "Next.js", "TypeScript", "JavaScript", "GraphQL",
      "HTML5", "CSS3/SCSS", "Redux", "Webpack", "Babel", "Storybook",
      "Material UI", "Bootstrap", "WCAG 2.2 AA", "Jest", "Cypress", "Playwright",
    ],
    tools: [
      "Git", "Jira", "Confluence", "Docker", "Jenkins", "NPM",
      "IntelliJ", "Rest API", "LaunchDarkly", "Mixpanel", "Datadog", "Test automation",
    ],
    backend: ["Node.js", "Python", "MySQL", "SQL"],
  };

  const experiences = [
    {
      company: "Cvent",
      role: "Senior Frontend Engineer",
      period: "MAY 2025 - PRESENT",
      url: "https://www.cvent.com/",
      achievements: [
        "Migrated core event attendees discovery pages to Next.js using the App Router and SSR, fixing SEO indexing issues for large-scale event catalogs and improving initial paint speed for mobile users.",
        "Contributed to core framework by adding the Smart Filter for Check-in question management across sessions (comboboxes, multi-select facets) for the UI library, utilizing virtualization supporting 10,000+ items.",
        "Migrated old REST endpoints to a GraphQL aggregation layer, reducing data grid load-time by 25%.",
        "Set up LaunchDarkly experiment tags to run A/B tests on new attendee search ranking logic per event.",
        "Integrated Mixpanel analytics to track search query fallouts and zero-result rates, providing data-driven insights to refine inventory presentation.",
        "Designed and delivered a React + TypeScript UI templates library enabling 40% faster feature rollout and enforcing cross-team design consistency for custom forms.",
      ],
      tags: ["React 18+", "Next.js", "TypeScript", "GraphQL", "LaunchDarkly", "Mixpanel", "SSR", "Virtualization", "A/B Testing"],
    },
    {
      company: "Ciena",
      role: "Software Development Engineer 2A",
      period: "OCT 2022 - MAY 2025",
      url: "https://www.ciena.com/products/manage-control-plan",
      achievements: [
        "Architected and delivered 4 micro-frontends for enterprise B2B SaaS product, enabling modular deployment and driving a 15% increase in adoption.",
        "Re-engineered legacy Ember applications into React + Hooks, reducing load times by 10% and improving long-term maintainability.",
        "Contributed to mid-tier monorepo and design system improvements, reducing UI code duplication across teams.",
        "Integrated and optimized REST API workflows with sub-200ms median response times across daily transactions.",
        "Mentored 3 frontend engineers in component patterns, testing strategy, and accessibility best practices.",
        "Led sprint planning, technical grooming, and cross-team reviews improving delivery predictability.",
        "Improved observability by designing Datadog dashboards for latency, client errors, and UX metrics.",
      ],
      tags: ["React", "Ember", "TypeScript", "Micro-frontends", "REST API", "Datadog", "Design Systems", "Mentoring"],
    },
    {
      company: "Nagarro",
      role: "Senior Engineer, Technology",
      period: "DEC 2018 - OCT 2022",
      url: "https://www.nagarro.com/en",
      subRoles: "Also, Engineer and Junior Engineer",
      achievements: [
        "Built 20+ reusable React components and marketing features for global clients, improving engagement and reusability.",
        "Designed and developed a custom WYSIWYG editor, reducing editorial go-live time and increasing workflow efficiency.",
        "Implemented code-splitting and async-loading patterns, improving page performance by 20%.",
        "Led the design, testing and deployment of 4+ React web components yielding a 10% increase in content loading speed, 10,000+ new leads captured and increased revenue.",
        "Mentored 4 junior developers through structured project-based learning and architecture sessions.",
        "Successfully delivered 6+ web components to optimize lead capture for a major US-based pharmaceutical manufacturer.",
      ],
      tags: ["React", "JavaScript", "HTML5", "CSS3", "Redux", "Webpack", "Babel", "Material UI", "Bootstrap", "Web Accessibility", "Cypress", "Git", "Jira", "Confluence", "NPM", "Test automation", "Node.js", "MySQL", "SQL"],
    },
  ];

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="custom-cursor hidden lg:block"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />

      <div className="min-h-screen lg:flex lg:justify-between lg:gap-4 max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        {/* Left Column - Sticky Header */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <a href="/">Parteek Kumar</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-marine sm:text-xl">
              Senior Frontend Engineer at Cvent
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-slate-400">
              I build scalable customer-facing web applications and developer tools that solve real user problems
            </p>

            {/* Navigation */}
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`group flex items-center py-3 ${activeSection === item.id ? "active" : ""
                        }`}
                    >
                      <span
                        className={`nav-indicator mr-4 h-px transition-all ${activeSection === item.id
                            ? "w-16 bg-marine"
                            : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-marine"
                          }`}
                      ></span>
                      <span
                        className={`nav-text text-xs font-bold uppercase tracking-widest ${activeSection === item.id
                            ? "text-marine"
                            : "text-slate-500 group-hover:text-marine"
                          }`}
                      >
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            <li className="mr-5 text-xs">
              <a
                href="https://github.com/oberoiparteek"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-marine"
              >
                <Github className="h-6 w-6" />
              </a>
            </li>
            <li className="mr-5 text-xs">
              <a
                href="https://linkedin.com/in/kumarparteek"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-marine"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </li>
            <li className="mr-5 text-xs">
              <a
                href="mailto:oberoi.parteek@gmail.com"
                className="block hover:text-marine"
              >
                <Mail className="h-6 w-6" />
              </a>
            </li>
            <li className="mr-5 text-xs">
              <a
                href="https://drive.google.com/uc?id=1q3_JnY4aZkErOjITSaG2SyIlLpJ1QfDu&export=download"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-marine"
              >
                <Download className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </header>

        {/* Right Column - Scrollable Content */}
        <main className="pt-24 lg:w-1/2 lg:py-24">
          {/* About Section */}
          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                About
              </h2>
            </div>
            <div>
              <p className="mb-4 text-slate-400 leading-relaxed">
                Hey there, I'm Parteek Kumar, a <strong className="text-slate-200">Senior Frontend Engineer</strong>! 🚀
                With over 7 years of experience in the coding trenches, I've battled my way through
                countless lines of React, TypeScript, Next.js, GraphQL, and more. I focus on shipping
                production-grade software that solves actual user problems.
              </p>
              <p className="mb-4 text-slate-400 leading-relaxed">
                I've had the privilege of building web applications for <strong className="text-slate-200">event management platforms</strong>,
                a global leader in <strong className="text-slate-200">Telecommunication and Networking solutions</strong>, a{" "}
                <strong className="text-slate-200">biomedical/biotechnology engineering firm</strong>, and more. These experiences
                have honed my skills in React, TypeScript, Next.js, GraphQL, and modern frontend architecture,
                making me a force to be reckoned with in the frontend realm. I've also published research on{" "}
                <strong className="text-slate-200">LLM audio-generation capabilities at NAACL 2025</strong>!
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Skills
              </h2>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-marine mb-3">Front-end Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-marine/10 px-3 py-1 text-xs font-medium leading-5 text-marine"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-marine mb-3">Software Development Tools:</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-marine/10 px-3 py-1 text-xs font-medium leading-5 text-marine"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-marine mb-3">Backend and databases:</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-marine/10 px-3 py-1 text-xs font-medium leading-5 text-marine"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Experience
              </h2>
            </div>
            <div>
              <ol className="group/list">
                {experiences.map((exp, index) => (
                  <li key={exp.company} className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        {exp.period}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-marine focus-visible:text-marine group/link text-base"
                              href={exp.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                {exp.role} ·{" "}
                                <span className="inline-block">
                                  {exp.company}
                                  <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                </span>
                              </span>
                            </a>
                          </div>
                          {exp.subRoles && (
                            <div className="text-slate-500 text-sm mt-1">{exp.subRoles}</div>
                          )}
                        </h3>
                        <ul className="mt-2 text-sm leading-normal space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-slate-400">• {achievement}</li>
                          ))}
                        </ul>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {exp.tags.map((tag) => (
                            <li key={tag} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-marine/10 px-3 py-1 text-xs font-medium leading-5 text-marine">
                                {tag}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-12">
                <a
                  className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                  href="https://drive.google.com/file/d/1q3_JnY4aZkErOjITSaG2SyIlLpJ1QfDu/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <span className="border-b border-transparent pb-px transition group-hover:border-marine motion-reduce:transition-none">
                      View Full{" "}
                    </span>
                    <span className="whitespace-nowrap">
                      <span className="border-b border-transparent pb-px transition group-hover:border-marine motion-reduce:transition-none">
                        Resume
                      </span>
                      <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* Publications Section */}
          <section id="publications" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Publications
              </h2>
            </div>
            <div>
              <ol className="group/list">
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                      2025
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-marine focus-visible:text-marine group/link text-base"
                            href="https://aclanthology.org/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Probing Audio-Generation Capabilities of Text-Based LLMs ·{" "}
                              <span className="inline-block">
                                NAACL SRW
                                <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-slate-400">
                        Research paper published at NAACL (North American Chapter of the Association for Computational Linguistics) Student Research Workshop 2025, investigating the capabilities of large language models in generating audio content from text-based prompts.
                      </p>
                      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {["Research", "LLMs", "Audio Generation", "NLP", "NAACL 2025"].map((tag) => (
                          <li key={tag} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-marine/10 px-3 py-1 text-xs font-medium leading-5 text-marine">
                              {tag}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Projects Section - Placeholder */}
          <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Projects
              </h2>
            </div>
            <p className="text-slate-400">Projects section coming soon...</p>
          </section>

          {/* Volunteering Section - Placeholder */}
          <section id="volunteering" className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Volunteering
              </h2>
            </div>
            <p className="text-slate-400">Volunteering section coming soon...</p>
          </section>

          {/* Footer */}
          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
              Built with <a href="https://nextjs.org/" className="font-medium text-slate-400 hover:text-marine focus-visible:text-marine" target="_blank" rel="noreferrer">Next.js</a> and <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-marine focus-visible:text-marine" target="_blank" rel="noreferrer">Tailwind CSS</a>, deployed with <a href="https://vercel.com/" className="font-medium text-slate-400 hover:text-marine focus-visible:text-marine" target="_blank" rel="noreferrer">Vercel</a>.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
