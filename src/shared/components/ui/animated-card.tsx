import { ReactNode } from "react";

import { motion } from 'framer-motion';

interface Props {
    children: ReactNode;
    keyProp: string;
    classname?: string;
}

export const AnimatedCard = (props: Props) => {
    const {
        children,
        keyProp,
        classname
    } = props;

    return (
        <motion.div
            key={keyProp}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={classname}
        >
            {children}
        </motion.div>
    )
}