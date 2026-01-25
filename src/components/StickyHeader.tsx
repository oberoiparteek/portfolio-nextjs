import { ReactNode } from "react";

export default function StickyHeader({ title, icon }: { title: string; icon?: ReactNode }) {
    return (
        <div className="heading-sticky">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {icon && <span style={{ display: 'flex', alignItems: 'center', color: 'var(--color-marine)' }}>{icon}</span>}
                {title}
            </h2>
        </div>
    );
}
