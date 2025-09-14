export type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    annuallyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "starter",
        title: "Starter",
        desc: "For independent freelancers who want to automate client onboarding and get paid on time without manual follow-ups.",
        monthlyPrice: 499,
        annuallyPrice: 4990,
        buttonText: "Start with Starter",
        features: [
            "Automated client onboarding flow",
            "Calendar scheduling integration",
            "Smart agreement generation",
            "Basic payment reminders",
            "Google Sheets sync",
            "Email support"
        ],
        link: "#"
    },
    {
        id: "pro",
        title: "Pro",
        desc: "Best for growing freelancers and small agencies needing smarter automations and payment tracking.",
        monthlyPrice: 1499,
        annuallyPrice: 14990,
        badge: "Most Popular",
        buttonText: "Upgrade to Pro",
        features: [
            "Everything in Starter",
            "DocuSign integration for e-signatures",
            "Razorpay / Stripe integration",
            "Customizable agreement templates",
            "Progress tracking dashboard",
            "Priority support",
            "Up to 5 team members"
        ],
        link: "#"
    },
    // {
    //     id: "agency",
    //     title: "Agency",
    //     desc: "For established agencies that need scalable AI workflows, advanced automation, and multi-client management.",
    //     monthlyPrice: 3999,
    //     annuallyPrice: 39990,
    //     badge: "Advanced",
    //     buttonText: "Contact Sales",
    //     features: [
    //         "Everything in Pro",
    //         "Unlimited client projects",
    //         "Custom AI automation workflows",
    //         "Multi-brand / client management",
    //         "API access & integrations",
    //         "Advanced analytics & insights",
    //         "Dedicated success manager",
    //         "24/7 premium support"
    //     ],
    //     link: "#"
    // },
];
