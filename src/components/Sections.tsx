import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Publications from "./sections/Publications";
import Volunteering from "./sections/Volunteering";
import BeyondCode from "./sections/BeyondCode";

export default function Sections() {
    return (
        <div className="sections-container">
            <About />
            <Experience />
            <Skills />
            <Education />
            <Projects />
            <Publications />
            <Volunteering />
            <BeyondCode />
            <section className="mt-16 mb-24 text-center sm:text-left text-[11px] opacity-40" style={{ color: 'var(--text-s-color)' }}>
                <p>
                    All product names, logos, and brands are property of their respective owners. 
                    Use of these names, logos, and brands on this website is for identification purposes only 
                    and does not imply endorsement or current affiliation.
                </p>
            </section>
        </div>
    )
}