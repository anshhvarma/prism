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
  CreditCard,
  Calendar,
  Mail,
  CheckCircle,
  DollarSign,
  ArrowRight,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function PaymentDemo() {
  const [currentDay, setCurrentDay] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const timeline = [
    {
      day: 0,
      title: "Agreement Signed",
      description: "Payment automation triggered automatically",
      icon: CheckCircle,
      action: "Invoice sent with payment link",
      status: "completed",
      amount: "$3,750 (50% upfront)",
    },
    {
      day: 1,
      title: "First Reminder",
      description: "Gentle reminder sent via email",
      icon: Mail,
      action: "Automated friendly reminder",
      status: currentDay >= 1 ? "completed" : "pending",
      amount: "Payment pending",
    },
    {
      day: 3,
      title: "Second Reminder",
      description: "Professional follow-up with urgency",
      icon: Calendar,
      action: "Escalated reminder tone",
      status: currentDay >= 3 ? "completed" : "pending",
      amount: "Final notice sent",
    },
    {
      day: 4,
      title: "Payment Received",
      description: "Client payment processed successfully",
      icon: DollarSign,
      action: "Project status updated",
      status: currentDay >= 4 ? "completed" : "pending",
      amount: "$3,750 received",
    },
  ];

  const paymentStats = {
    totalAmount: "$7,500",
    received: currentDay >= 4 ? "$3,750" : "$0",
    pending: currentDay >= 4 ? "$3,750" : "$3,750",
    daysToPayment: currentDay >= 4 ? 4 : "ongoing",
  };

  const playDemo = () => {
    setIsPlaying(true);
    setCurrentDay(0);

    timeline.forEach((_, index) => {
      setTimeout(() => {
        setCurrentDay(index + 1);
      }, (index + 1) * 1200);
    });

    setTimeout(() => {
      setIsPlaying(false);
    }, timeline.length * 1200);
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
            <div className="text-sm text-muted-foreground">Step 5 of 6</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">
              Automated Payment Reminders
            </h1>
            <p className="text-muted-foreground">
              Smart payment tracking with progressive reminder system
            </p>
          </div>

          {/* Payment Overview */}
          <div className="grid gap-4 md:grid-cols-4 mb-8">
            <Card className="bg-gradient-card border-border/40">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Total Amount</span>
                </div>
                <div className="text-2xl font-bold">
                  {paymentStats.totalAmount}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/40">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Received</span>
                </div>
                <div className="text-2xl font-bold text-green-500">
                  {paymentStats.received}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/40">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium">Pending</span>
                </div>
                <div className="text-2xl font-bold text-orange-500">
                  {paymentStats.pending}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/40">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Days to Payment</span>
                </div>
                <div className="text-2xl font-bold">
                  {paymentStats.daysToPayment}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Payment Timeline */}
            <Card className="bg-gradient-card border-border/40">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Payment Timeline</CardTitle>
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
                  Automated reminder progression for Tech Startup Inc
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timeline.map((item) => (
                    <div
                      key={item.day}
                      className={`
                        flex items-start gap-4 p-4 rounded-lg border transition-all duration-500
                        ${
                          item.status === "completed"
                            ? "bg-green-500/10 border-green-500/20"
                            : currentDay === item.day && isPlaying
                            ? "bg-blue-500/10 border-blue-500/20 scale-105"
                            : "bg-muted/30 border-border/20"
                        }
                      `}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className={`
                          p-2 rounded-lg 
                          ${
                            item.status === "completed"
                              ? "bg-green-500/20"
                              : currentDay === item.day && isPlaying
                              ? "bg-blue-500/20"
                              : "bg-muted/30"
                          }
                        `}
                        >
                          {item.status === "completed" ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : currentDay === item.day && isPlaying ? (
                            <Clock className="h-5 w-5 text-blue-500 animate-spin" />
                          ) : (
                            <item.icon className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          Day {item.day}
                        </Badge>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{item.title}</h3>
                          {item.status === "completed" && (
                            <Badge
                              variant="outline"
                              className="text-green-500 border-green-500 text-xs"
                            >
                              Done
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.description}
                        </p>
                        <div className="text-xs">
                          <span className="text-primary font-medium">
                            {item.action}
                          </span>
                          <span className="text-muted-foreground ml-2">
                            • {item.amount}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Email Preview */}
            <Card className="bg-gradient-card border-border/40">
              <CardHeader>
                <CardTitle>Automated Email Preview</CardTitle>
                <CardDescription>
                  Tone adapts based on payment status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentDay >= 1 && (
                    <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <div className="flex items-center gap-2 mb-3">
                        <Mail className="h-4 w-4 text-blue-500" />
                        <span className="font-medium text-blue-500">
                          Day 1 - Friendly Reminder
                        </span>
                      </div>
                      <div className="text-sm space-y-2">
                        <p>
                          <strong>Subject:</strong> Quick reminder about your
                          project payment
                        </p>
                        <p className="text-muted-foreground">
                        &quot;Hi Sarah, just a gentle reminder that the 50% upfront
                          payment ($3,750) for your web development project is
                          pending. No rush - just wanted to keep you in the
                          loop!&quot;
                        </p>
                      </div>
                    </div>
                  )}

                  {currentDay >= 3 && (
                    <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="h-4 w-4 text-orange-500" />
                        <span className="font-medium text-orange-500">
                          Day 3 - Professional Follow-up
                        </span>
                      </div>
                      <div className="text-sm space-y-2">
                        <p>
                          <strong>Subject:</strong> Payment Required: Web
                          Development Project
                        </p>
                        <p className="text-muted-foreground">
                          &quot;Dear Sarah, this is a follow-up regarding the
                          outstanding payment of $3,750 for your project. To
                          keep your project on schedule, please process payment
                          at your earliest convenience.&quot;
                        </p>
                      </div>
                    </div>
                  )}

                  {currentDay >= 4 && (
                    <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="font-medium text-green-500">
                          Payment Confirmation
                        </span>
                      </div>
                      <div className="text-sm space-y-2">
                        <p>
                          <strong>Subject:</strong> Payment Received - Project
                          Starting!
                        </p>
                        <p className="text-muted-foreground">
                          &quot;Fantastic! Your payment of $3,750 has been received.
                          I&paos;m excited to start working on your website project.
                          You&apos;ll receive regular updates as we progress!&quot;
                        </p>
                      </div>
                    </div>
                  )}

                  {currentDay < 1 && (
                    <div className="text-center py-8">
                      <Clock className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Automated reminders will appear here based on payment
                        timeline
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {currentDay >= 4 && (
            <div className="mt-8 text-center">
              <div className="flex gap-4 justify-center">
                <Button variant="outline" asChild>
                  <Link href="/demo/signature">Previous: eSignature</Link>
                </Button>
                <Button variant="white" asChild>
                  <Link href="/project-dash">
                    Next: Project Dashboard
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
