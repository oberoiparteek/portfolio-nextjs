import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Publications from "./sections/Publications";
import Volunteering from "./sections/Volunteering";

export default function Sections() {
    return (
        <div className="sections-container">
            <div className="mb-16 md:hidden">
                {/* On mobile, this will be hidden if we keep MobileTopBar, or we show it. 
                    Actually, let's just make it visible everywhere, and maybe adjust margins. */}
            </div>
            <div className="mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3" style={{ fontFamily: 'var(--font-bricolage), sans-serif' }}>
                    Parteek Kumar
                </h1>
                <h2 className="text-xl sm:text-2xl font-medium mb-4" style={{ fontFamily: 'var(--font-bricolage), sans-serif', color: 'var(--color-marine)' }}>
                    Senior Frontend Engineer at Cvent
                </h2>
                <p className="text-base max-w-sm opacity-80" style={{ color: 'rgb(var(--text-s-color))' }}>
                    I build scalable customer-facing web applications and developer tools
                    that solve real user problems.
                </p>
            </div>
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Publications />
            <Volunteering />
        </div>
    )
}