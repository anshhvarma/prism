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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, ArrowRight, Send, Calendar } from "lucide-react";
import Link from "next/link";

export default function Inquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "Sarah Johnson",
    email: "sarah@techstartup.com",
    company: "Tech Startup Inc",
    service: "Web Development",
    budget: "$5,000 - $10,000",
    message:
      "We need a modern website for our SaaS platform with user authentication and payment integration.",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-gradient-card border-border/40">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <CardTitle className="text-2xl">Inquiry Submitted!</CardTitle>
            <CardDescription>Automation in progress...</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-green-500/20">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Processing inquiry...</span>
                <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-blue-500/20">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Generating calendar link...</span>
                <div className="ml-auto animate-spin">⏳</div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/20 opacity-50">
                <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                <span className="text-sm">Sending email...</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-blue-500" />
                <span className="font-medium text-blue-500">
                  Calendly Link Sent!
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Sarah will receive a personalized scheduling link within 30
                seconds
              </p>
            </div>

            <div className="flex gap-2 pt-4">
              <Button variant="outline" className="flex-1" asChild>
                <Link href="/inquiry">Back to Demo</Link>
              </Button>
              <Button variant="white" className="flex-1" asChild>
                <Link href="/agreement">
                  Next: Agreement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

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
            <div className="text-sm text-muted-foreground">Step 1 of 6</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Client Inquiry Form</h1>
            <p className="text-muted-foreground">
              This public form captures client details and triggers the
              automation workflow
            </p>
          </div>

          <Card className="bg-gradient-card border-border/40">
            <CardHeader>
              <CardTitle>Tell us about your project</CardTitle>
              <CardDescription>
                Fill out this form and we&apos;ll get back to you with a
                scheduling link automatically
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="bg-background border-border"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Web Development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="Mobile App">Mobile App</SelectItem>
                        <SelectItem value="UI/UX Design">
                          UI/UX Design
                        </SelectItem>
                        <SelectItem value="Consulting">Consulting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        setFormData({ ...formData, budget: value })
                      }
                    >
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="$1,000 - $5,000">
                          $1,000 - $5,000
                        </SelectItem>
                        <SelectItem value="$5,000 - $10,000">
                          $5,000 - $10,000
                        </SelectItem>
                        <SelectItem value="$10,000 - $25,000">
                          $10,000 - $25,000
                        </SelectItem>
                        <SelectItem value="$25,000+">$25,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Description</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-background border-border min-h-[120px]"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <Button type="submit" variant="white" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Inquiry & Trigger Automation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
