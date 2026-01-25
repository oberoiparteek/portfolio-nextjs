"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function MotionSection({
    children,
    id,
    className,
}: {
    children: ReactNode;
    id?: string;
    className?: string;
}) {
    return (
        <motion.section
            id={id}
            className={className}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    );
}
