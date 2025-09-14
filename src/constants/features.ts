import {
  WandSparklesIcon,
  ChartColumnBigIcon,
  DatabaseIcon,
  TrendingUpIcon,
  ZapIcon,
} from "lucide-react";

export const FEATURES = [
  {
    title: "Client Management",
    description:
      "Manage client interactions seamlessly through intelligent AI agents, keeping track of proposals, contracts, and communications.",
    icon: WandSparklesIcon,
    image: "/images/feature-two.svg",
  },
  {
    title: "Project Tracking",
    description:
      "Keep projects on schedule and monitor progress with real-time updates handled automatically by AI agents.",
    icon: TrendingUpIcon,
    image: "/images/feature-one.svg",
  },
  {
    title: "Payment & Invoicing",
    description:
      "Automate invoices, payment reminders, and transaction tracking, letting AI handle administrative tasks.",
    icon: DatabaseIcon,
    image: "/images/feature-three.svg",
  },
  {
    title: "Analytics & Insights",
    description:
      "Get actionable insights into client activity, agent performance, and workflow efficiency.",
    icon: ChartColumnBigIcon,
    image: "/images/feature-four.svg",
  },
  {
    title: "Workflow Optimization",
    description:
      "AI agents streamline repetitive tasks and optimize workflows so you can focus on delivering results.",
    icon: ZapIcon,
    image: "/images/feature-five.svg",
  },
];
