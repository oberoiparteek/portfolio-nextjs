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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    );
}
