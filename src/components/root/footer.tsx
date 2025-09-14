import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
        <Container>
          <div className="flex flex-col items-start justify-start md:max-w-[200px]">
            <div className="flex items-center gap-2">
              <Icons.icon />
              <span className="text-base md:text-lg font-medium text-foreground">
                Prism OS
              </span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm text-start">
              AI-powered platform to automate client onboarding, agreements, payments, and project tracking for freelancers and small agencies.
            </p>
          </div>
        </Container>

        <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <Container delay={0.1} className="h-auto">
              <h3 className="text-base font-medium text-foreground">
                Product
              </h3>
              <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                <li>
                  <Link href="#features" className="link hover:text-foreground transition-all duration-300">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="link hover:text-foreground transition-all duration-300">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="link hover:text-foreground transition-all duration-300">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#languages" className="link hover:text-foreground transition-all duration-300">
                    Supported Languages
                  </Link>
                </li>
              </ul>
            </Container>

            <Container delay={0.2} className="h-auto">
              <h3 className="text-base font-medium text-foreground">
                Solutions
              </h3>
              <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                <li>
                  <Link href="#freelancers" className="link hover:text-foreground transition-all duration-300">
                    Freelancers
                  </Link>
                </li>
                <li>
                  <Link href="#agencies" className="link hover:text-foreground transition-all duration-300">
                    Agencies
                  </Link>
                </li>
                <li>
                  <Link href="#small-business" className="link hover:text-foreground transition-all duration-300">
                    Small Businesses
                  </Link>
                </li>
              </ul>
            </Container>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-8">
            <Container delay={0.3} className="h-auto">
              <h3 className="text-base font-medium text-foreground">
                Resources
              </h3>
              <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                <li>
                  <Link href="#blog" className="link hover:text-foreground transition-all duration-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#guides" className="link hover:text-foreground transition-all duration-300">
                    Workflow Guides
                  </Link>
                </li>
                <li>
                  <Link href="#support" className="link hover:text-foreground transition-all duration-300">
                    Support
                  </Link>
                </li>
              </ul>
            </Container>

            <Container delay={0.4} className="h-auto">
              <h3 className="text-base font-medium text-foreground">
                Company
              </h3>
              <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                <li>
                  <Link href="#about" className="link hover:text-foreground transition-all duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#privacy" className="link hover:text-foreground transition-all duration-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="link hover:text-foreground transition-all duration-300">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </Container>
          </div>
        </div>
      </div>

      <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
        <div className="mt-8 md:flex md:items-center justify-center footer w-full">
          <p className="text-sm text-muted-foreground mt-8 md:mt-0">
            &copy; {new Date().getFullYear()} Prism OS. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
