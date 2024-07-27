export const itemAnimation = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
    },
};

export const cardAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

export const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.35,
        },
    },
};
