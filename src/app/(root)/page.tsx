import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/root/analysis";
import Companies from "@/components/root/companies";
import CTA from "@/components/root/cta";
import Features from "@/components/root/features";
import Hero from "@/components/root/hero";
import Navbar from "@/components/root/navbar";
import Integration from "@/components/root/integration";
import LanguageSupport from "@/components/root/lang-support";
import Pricing from "@/components/root/pricing";

const HomePage = () => {
  return (
    <Wrapper className="py-20 relative">
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <Analysis />
      <Integration />
      <Pricing />
      <LanguageSupport />
      <CTA />
    </Wrapper>
  );
};

export default HomePage;
