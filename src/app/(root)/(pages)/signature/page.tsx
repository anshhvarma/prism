"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Clock,
  Mail,
  PenTool,
  ArrowRight,
  FileText,
} from "lucide-react";
import Link from "next/link";

export default function SignatureDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      id: 0,
      title: "Agreement Ready",
      description: "AI-generated agreement prepared for signature",
      icon: FileText,
      status: "completed",
      color: "text-green-500",
    },
    {
      id: 1,
      title: "Email Sent to Client",
      description: "DocuSign link automatically sent to sarah@techstartup.com",
      icon: Mail,
      status: currentStep >= 1 ? "completed" : "pending",
      color: currentStep >= 1 ? "text-green-500" : "text-muted-foreground",
    },
    {
      id: 2,
      title: "Client Opens Document",
      description: "Sarah Johnson opened the agreement for review",
      icon: FileText,
      status: currentStep >= 2 ? "completed" : "pending",
      color: currentStep >= 2 ? "text-green-500" : "text-muted-foreground",
    },
    {
      id: 3,
      title: "Document Signed",
      description: "Digital signature captured successfully",
      icon: PenTool,
      status: currentStep >= 3 ? "completed" : "pending",
      color: currentStep >= 3 ? "text-green-500" : "text-muted-foreground",
    },
    {
      id: 4,
      title: "Workflow Triggered",
      description: "Payment automation initiated automatically",
      icon: CheckCircle,
      status: currentStep >= 4 ? "completed" : "pending",
      color: currentStep >= 4 ? "text-green-500" : "text-muted-foreground",
    },
  ];

  const playDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);

    steps.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1);
      }, (index + 1) * 1500);
    });

    setTimeout(() => {
      setIsPlaying(false);
    }, steps.length * 1500);
  };

  useEffect(() => {
    // Auto-play demo on component mount
    playDemo();
  }, []);

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
            <div className="text-sm text-muted-foreground">Step 4 of 6</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">eSignature Workflow</h1>
            <p className="text-muted-foreground">
              Seamless digital signature collection with real-time status
              updates
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Timeline */}
            <Card className="bg-gradient-card border-border/40">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Signature Timeline</CardTitle>
                  <Button
                    onClick={playDemo}
                    variant="outline"
                    size="sm"
                    disabled={isPlaying}
                  >
                    {isPlaying ? "Playing..." : "Replay Demo"}
                  </Button>
                </div>
                <CardDescription>
                  Real-time tracking of signature process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className={`
                        flex items-start gap-4 p-4 rounded-lg border transition-all duration-500
                        ${
                          step.status === "completed"
                            ? "bg-green-500/10 border-green-500/20"
                            : "bg-muted/30 border-border/20"
                        }
                        ${
                          currentStep === step.id && isPlaying
                            ? "scale-105 shadow-glow"
                            : ""
                        }
                      `}
                    >
                      <div
                        className={`
                        p-2 rounded-lg 
                        ${
                          step.status === "completed"
                            ? "bg-green-500/20"
                            : "bg-muted/30"
                        }
                      `}
                      >
                        {step.status === "completed" ? (
                          <CheckCircle className={`h-5 w-5 ${step.color}`} />
                        ) : currentStep === step.id && isPlaying ? (
                          <Clock className="h-5 w-5 text-blue-500 animate-spin" />
                        ) : (
                          <step.icon className={`h-5 w-5 ${step.color}`} />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{step.title}</h3>
                          {step.status === "completed" && (
                            <Badge
                              variant="outline"
                              className="text-green-500 border-green-500 text-xs"
                            >
                              Complete
                            </Badge>
                          )}
                          {currentStep === step.id && isPlaying && (
                            <Badge
                              variant="outline"
                              className="text-blue-500 border-blue-500 text-xs"
                            >
                              In Progress
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Document Preview */}
            <Card className="bg-gradient-card border-border/40">
              <CardHeader>
                <CardTitle>Document Status</CardTitle>
                <CardDescription>
                  Live view of the agreement being signed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Document Info */}
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/20">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Service Agreement</h3>
                        <p className="text-sm text-muted-foreground">
                          Tech Startup Inc - Web Development
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Amount:</span>
                        <span className="ml-2 font-medium">$7,500</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Timeline:</span>
                        <span className="ml-2 font-medium">6 weeks</span>
                      </div>
                    </div>
                  </div>

                  {/* Signature Status */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/20">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-primary">
                            SJ
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">Sarah Johnson</p>
                          <p className="text-xs text-muted-foreground">
                            sarah@techstartup.com
                          </p>
                        </div>
                      </div>
                      {currentStep >= 4 ? (
                        <Badge
                          variant="outline"
                          className="text-green-500 border-green-500"
                        >
                          Signed
                        </Badge>
                      ) : currentStep >= 2 ? (
                        <Badge
                          variant="outline"
                          className="text-blue-500 border-blue-500"
                        >
                          Reviewing
                        </Badge>
                      ) : (
                        <Badge variant="outline">Pending</Badge>
                      )}
                    </div>
                  </div>

                  {/* Success Message */}
                  {currentStep >= 4 && (
                    <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="font-medium text-green-500">
                          Agreement Signed!
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Payment automation has been triggered. Invoice will be
                        sent automatically.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {currentStep >= 4 && (
            <div className="mt-8 text-center">
              <div className="flex gap-4 justify-center">
                <Button variant="outline" asChild>
                  <Link href="/inquiry">Previous: Inquiry</Link>
                </Button>
                <Button variant="white" asChild>
                  <Link href="/payment">
                    Next: Payment Automation
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
