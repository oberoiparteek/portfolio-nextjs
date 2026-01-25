import MotionSection from "@/components/MotionSection";
import StickyHeader from "@/components/StickyHeader";

export default function Volunteering() {
    return (
        <MotionSection id="volunteering">
            <StickyHeader
                title="Volunteering"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                }
            />
            <div className="experiences">
                <a href="https://www.bloodconnect.org" target="_blank" className="exp">
                    <span className="title link-svg" title="Job title">
                        City President・ BloodConnect Foundation
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
                        <small title="Duration">JAN 2017 - JAN 2018</small>
                    </p>
                    <p className="mt-2 text-sm leading-normal">
                        Lead a team of 10+ volunteers for the Amritsar region that added 1500+
                        new donors to the Emergency donation list and managed helpline service
                        for emergency blood requirements. Organized 15+ Blood Donation
                        awareness camps. Planned and managed the outreach team for Awareness
                        Camps.
                    </p>
                    <ul className="badge-wrapper">
                        <li className="badge">Leadership</li>
                        <li className="badge">Communication</li>
                        <li className="badge">Organization</li>
                        <li className="badge">Problem-solving</li>
                        <li className="badge">Teamwork</li>
                    </ul>
                    <p />
                </a>
            </div>
        </MotionSection>
    );
}
