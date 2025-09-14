import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export const generateMetadata = ({
  title = "Prism OS – AI Agents for Freelancers & Agencies",
  description = "Prism OS empowers freelancers and small agencies with AI agents that handle client onboarding, contracts, payments, and project tracking seamlessly.",
  keywords = [
    "AI agent for freelancers",
    "client onboarding AI",
    "contract generation",
    "smart payment reminders",
    "project tracking AI",
    "agency productivity tools",
    "workflow AI",
    "freelancer SaaS"
  ],
  noIndex = false,
}: MetadataProps = {}): Metadata => {
  const metadataBase = new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://prism-os.vercel.app"
  );

  return {
    metadataBase,
    title: {
      template: `%s | Prism OS`,
      default: title,
    },
    description,
    keywords,
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url: metadataBase.toString(),
      siteName: "Prism OS",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
};
