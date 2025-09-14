import Image from "next/image";
import Container from "../global/container";

const Companies = () => {
  const logos = [
    "/images/companies/logo1.svg",
    "/images/companies/logo1.svg",
    "/images/companies/logo1.svg",
    "/images/companies/logo1.svg",
    "/images/companies/logo1.svg",
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20 mt-16 companies overflow-hidden">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl lg:text-4xl font-medium">
            Trusted by <span className="font-subheading italic">leading</span>{" "}
            Agency
          </h4>
        </div>
      </Container>

      <Container delay={0.1}>
        <div className="flex flex-row flex-wrap items-center justify-center gap-8 max-w-xl mx-auto pt-16 transition-all">
          {logos.map((logoPath, index) => (
            <div key={index} className="relative w-32 h-12">
              <Image
                src={logoPath}
                alt={`Company Logo ${index + 1}`}
                fill
                className="object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Companies;
