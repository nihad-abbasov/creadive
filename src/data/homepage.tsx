interface ProcessStep {
    id: number;
    title: string;
    description: string;
}

interface OurFeature {
    icon: string;
    title: string;
    description: string;
}

const processSteps: ProcessStep[] = [
    {
        id: 1,
        title: "analysis",
        description: "analysis",
    },
    {
        id: 2,
        title: "strategy",
        description: "strategy",
    },
    {
        id: 3,
        title: "execution",
        description: "execution",
    },
    {
        id: 4,
        title: "monitoring",
        description: "monitoring",
    },
];



const ourFeatures: OurFeature[] = [
    {
        icon: "🎯",
        title: "professional",
        description: "professional",
    },
    {
        icon: "⚡",
        title: "fast",
        description: "fast",
    },
    {
        icon: "💡",
        title: "innovative",
        description: "innovative",
    },
];

export { processSteps, ourFeatures };