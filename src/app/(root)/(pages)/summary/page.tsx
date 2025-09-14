"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Zap,
  ArrowRight,
  Star,
  Trophy,
  Target,
} from "lucide-react";
import Link from "next/link";

export default function SummaryDemo() {
  const benefits = [
    {
      title: "Zero Admin Overhead",
      description: "Automated client onboarding from inquiry to payment",
      icon: Zap,
    },
    {
      title: "Professional Experience",
      description: "Consistent, timely communication that builds trust",
      icon: Star,
    },
    {
      title: "Predictable Revenue",
      description: "Faster payments and more clients mean steady income",
      icon: Target,
    },
    {
      title: "Scale Without Stress",
      description: "Handle 3x more clients with the same effort",
      icon: Trophy,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/demo"
              className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
            >
              Prism OS Demo
            </Link>
            <Badge
              variant="outline"
              className="text-green-500 border-green-500"
            >
              Demo Complete
            </Badge>
          </div>
        </div>
      </header>

      <section className="py-20  text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-green-500/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Experience Complete
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Effortless Freelance Automation in Action
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              You&apos;ve just witnessed how automation transforms freelance
              workflows from chaos to clarity, from manual to magical.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Freelancers Choose Automation
            </h2>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-lg bg-gray-800 border border-gray-600"
                >
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Complete Workflow in 6 Simple Steps
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12">
              {[
                "Client Inquiry",
                "Auto Calendar",
                "AI Agreement",
                "eSignature",
                "Payment Track",
                "Live Dashboard",
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{step}</span>
                </div>
              ))}
            </div>

            <div className="p-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Freelance Business?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Join thousands of freelancers who&apos;ve automated their way to
                success
              </p>

              <div className="flex gap-4 justify-center">
                <Button
                  variant="white"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <Link href="/">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
