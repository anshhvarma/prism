"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wand2, FileText, ArrowRight, Sparkles, Clock } from "lucide-react";
import Link from "next/link";

export default function AgreementDemo() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [animatedFields, setAnimatedFields] = useState<string[]>([]);

  const agreementTemplate = {
    clientName: "{{CLIENT_NAME}}",
    projectScope: "{{PROJECT_SCOPE}}",
    amount: "{{PROJECT_AMOUNT}}",
    timeline: "{{PROJECT_TIMELINE}}",
    paymentTerms: "{{PAYMENT_TERMS}}",
  };

  const filledAgreement = {
    clientName: "Sarah Johnson",
    projectScope:
      "We need a modern website for our SaaS platform with user authentication and payment integration.",
    amount: "$5,000 - $10,000",
    timeline: "6 weeks",
    paymentTerms: "50% upfront, 50% upon completion",
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setAnimatedFields([]);

    // Animate field population
    const fields = [
      "clientName",
      "projectScope",
      "amount",
      "timeline",
      "paymentTerms",
    ];
    fields.forEach((field, index) => {
      setTimeout(() => {
        setAnimatedFields((prev) => [...prev, field]);
      }, (index + 1) * 800);
    });

    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-gradient-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/demo"
              className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            >
              Prism OS Demo
            </Link>
            <div className="text-sm text-muted-foreground">Step 3 of 6</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">
              AI-Powered Agreement Generation
            </h1>
            <p className="text-muted-foreground">
              Watch as AI automatically generates a personalized agreement from
              your template
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Template */}
            <Card className="bg-gradient-card border-border/40">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <CardTitle>Agreement Template</CardTitle>
                </div>
                <CardDescription>
                  Your reusable template with smart placeholders
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <h3 className="text-foreground">Service Agreement</h3>
                  <p>
                    <strong>Client:</strong>{" "}
                    <span className="text-yellow-500">
                      {agreementTemplate.clientName}
                    </span>
                  </p>
                  <p>
                    <strong>Project Scope:</strong>{" "}
                    <span className="text-yellow-500">
                      {agreementTemplate.projectScope}
                    </span>
                  </p>
                  <p>
                    <strong>Total Amount:</strong>{" "}
                    <span className="text-yellow-500">
                      {agreementTemplate.amount}
                    </span>
                  </p>
                  <p>
                    <strong>Timeline:</strong>{" "}
                    <span className="text-yellow-500">
                      {agreementTemplate.timeline}
                    </span>
                  </p>
                  <p>
                    <strong>Payment Terms:</strong>{" "}
                    <span className="text-yellow-500">
                      {agreementTemplate.paymentTerms}
                    </span>
                  </p>

                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs">
                      This agreement is governed by the laws of [State/Country].
                      Both parties agree to the terms outlined above.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Generated Agreement */}
            <Card className="bg-gradient-card border-border/40">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <CardTitle>Generated Agreement</CardTitle>
                  </div>
                  {generated && (
                    <Badge
                      variant="outline"
                      className="text-green-500 border-green-500"
                    >
                      Ready
                    </Badge>
                  )}
                </div>
                <CardDescription>
                  Personalized for Tech Startup Inc
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!isGenerating && !generated ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-muted/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Wand2 className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Click below to generate personalized agreement
                    </p>
                    <Button onClick={handleGenerate} variant="white">
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate Agreement with AI
                    </Button>
                  </div>
                ) : (
                  <div className="prose prose-sm max-w-none">
                    <h3 className="text-foreground">Service Agreement</h3>

                    <p>
                      <strong>Client:</strong>
                      <span
                        className={`ml-2 ${
                          animatedFields.includes("clientName")
                            ? "text-green-500 animate-pulse"
                            : "text-muted-foreground"
                        }`}
                      >
                        {animatedFields.includes("clientName")
                          ? filledAgreement.clientName
                          : isGenerating
                          ? "..."
                          : agreementTemplate.clientName}
                      </span>
                    </p>

                    <p>
                      <strong>Project Scope:</strong>
                      <span
                        className={`ml-2 ${
                          animatedFields.includes("projectScope")
                            ? "text-green-500 animate-pulse"
                            : "text-muted-foreground"
                        }`}
                      >
                        {animatedFields.includes("projectScope")
                          ? filledAgreement.projectScope
                          : isGenerating
                          ? "..."
                          : agreementTemplate.projectScope}
                      </span>
                    </p>

                    <p>
                      <strong>Total Amount:</strong>
                      <span
                        className={`ml-2 ${
                          animatedFields.includes("amount")
                            ? "text-green-500 animate-pulse"
                            : "text-muted-foreground"
                        }`}
                      >
                        {animatedFields.includes("amount")
                          ? filledAgreement.amount
                          : isGenerating
                          ? "..."
                          : agreementTemplate.amount}
                      </span>
                    </p>

                    <p>
                      <strong>Timeline:</strong>
                      <span
                        className={`ml-2 ${
                          animatedFields.includes("timeline")
                            ? "text-green-500 animate-pulse"
                            : "text-muted-foreground"
                        }`}
                      >
                        {animatedFields.includes("timeline")
                          ? filledAgreement.timeline
                          : isGenerating
                          ? "..."
                          : agreementTemplate.timeline}
                      </span>
                    </p>

                    <p>
                      <strong>Payment Terms:</strong>
                      <span
                        className={`ml-2 ${
                          animatedFields.includes("paymentTerms")
                            ? "text-green-500 animate-pulse"
                            : "text-muted-foreground"
                        }`}
                      >
                        {animatedFields.includes("paymentTerms")
                          ? filledAgreement.paymentTerms
                          : isGenerating
                          ? "..."
                          : agreementTemplate.paymentTerms}
                      </span>
                    </p>

                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        This agreement is governed by the laws of
                        [State/Country]. Both parties agree to the terms
                        outlined above.
                      </p>
                    </div>
                  </div>
                )}

                {isGenerating && (
                  <div className="flex items-center gap-2 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <Clock className="h-4 w-4 text-blue-500 animate-spin" />
                    <span className="text-sm text-blue-500">
                      AI is analyzing client data and generating personalized
                      content...
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {generated && (
            <div className="mt-8 text-center">
              <div className="flex gap-4 justify-center">
                <Button variant="outline" asChild>
                  <Link href="/inquiry">Previous: Inquiry</Link>
                </Button>
                <Button variant="white" asChild>
                  <Link href="/signature">
                    Next: eSignature Flow
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
