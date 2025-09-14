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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Users,
  FileText,
  CreditCard,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle,
  DollarSign,
  ArrowRight,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Active Projects",
    value: "8",
    change: "+2 this week",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "Signed Agreements",
    value: "6",
    change: "75% conversion",
    icon: FileText,
    color: "text-green-500",
  },
  {
    title: "Payments Received",
    value: "$28,400",
    change: "+$7,500 this week",
    icon: CreditCard,
    color: "text-purple-500",
  },
  {
    title: "Automation Rate",
    value: "96%",
    change: "Time saved",
    icon: TrendingUp,
    color: "text-orange-500",
  },
];

const projects = [
  {
    id: 1,
    clientName: "Tech Startup Inc",
    projectType: "Web Development",
    agreementStatus: "signed",
    paymentStatus: "paid_partial",
    amount: "$7,500",
    received: "$3,750",
    nextAction: "Send progress update",
    dueDate: "2024-02-15",
    priority: "high",
  },
  {
    id: 2,
    clientName: "Design Agency Co",
    projectType: "Mobile App",
    agreementStatus: "signed",
    paymentStatus: "paid_full",
    amount: "$12,000",
    received: "$12,000",
    nextAction: "Project complete",
    dueDate: "2024-01-30",
    priority: "completed",
  },
  {
    id: 3,
    clientName: "E-commerce Store",
    projectType: "UI/UX Design",
    agreementStatus: "pending",
    paymentStatus: "pending",
    amount: "$4,200",
    received: "$0",
    nextAction: "Send reminder",
    dueDate: "2024-02-01",
    priority: "medium",
  },
  {
    id: 4,
    clientName: "Marketing Firm",
    projectType: "Consulting",
    agreementStatus: "signed",
    paymentStatus: "overdue",
    amount: "$3,800",
    received: "$0",
    nextAction: "Payment reminder",
    dueDate: "2024-01-25",
    priority: "urgent",
  },
  {
    id: 5,
    clientName: "Healthcare App",
    projectType: "Full Stack",
    agreementStatus: "draft",
    paymentStatus: "pending",
    amount: "$15,000",
    received: "$0",
    nextAction: "Send agreement",
    dueDate: "2024-02-10",
    priority: "high",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "signed":
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case "pending":
      return <Clock className="h-4 w-4 text-yellow-500" />;
    case "draft":
      return <FileText className="h-4 w-4 text-blue-500" />;
    case "paid_full":
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case "paid_partial":
      return <Clock className="h-4 w-4 text-orange-500" />;
    case "overdue":
      return <AlertCircle className="h-4 w-4 text-red-500" />;
    default:
      return <Clock className="h-4 w-4 text-gray-500" />;
  }
};

const getStatusBadge = (status: string, type: string) => {
  const isPayment = type === "payment";

  switch (status) {
    case "signed":
      return (
        <Badge variant="outline" className="text-green-500 border-green-500">
          Signed
        </Badge>
      );
    case "pending":
      return (
        <Badge variant="outline" className="text-yellow-500 border-yellow-500">
          Pending
        </Badge>
      );
    case "draft":
      return (
        <Badge variant="outline" className="text-blue-500 border-blue-500">
          Draft
        </Badge>
      );
    case "paid_full":
      return (
        <Badge variant="outline" className="text-green-500 border-green-500">
          Paid
        </Badge>
      );
    case "paid_partial":
      return (
        <Badge variant="outline" className="text-orange-500 border-orange-500">
          Partial
        </Badge>
      );
    case "overdue":
      return (
        <Badge variant="outline" className="text-red-500 border-red-500">
          Overdue
        </Badge>
      );
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "urgent":
      return "border-l-red-500";
    case "high":
      return "border-l-orange-500";
    case "medium":
      return "border-l-yellow-500";
    case "completed":
      return "border-l-green-500";
    default:
      return "border-l-gray-500";
  }
};

export default function DashboardDemo() {
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
            <div className="text-sm text-muted-foreground">Step 6 of 6</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">
              Project Status Dashboard
            </h1>
            <p className="text-muted-foreground">
              Real-time overview of all client projects and automated workflows
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card
                key={stat.title}
                className="bg-gradient-card border-border/40"
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Projects Table */}
          <Card className="bg-gradient-card border-border/40">
            <CardHeader>
              <CardTitle>All Projects</CardTitle>
              <CardDescription>
                Complete overview with automated status tracking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead>Agreement</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Next Action</TableHead>
                    <TableHead>Due Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow
                      key={project.id}
                      className={`border-l-4 ${getPriorityColor(
                        project.priority
                      )}`}
                    >
                      <TableCell>
                        <div>
                          <div className="font-medium">
                            {project.clientName}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {project.projectType}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="font-medium">
                          {project.projectType}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(project.agreementStatus)}
                          {getStatusBadge(project.agreementStatus, "agreement")}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(project.paymentStatus)}
                          {getStatusBadge(project.paymentStatus, "payment")}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{project.amount}</div>
                          <div className="text-sm text-muted-foreground">
                            Received: {project.received}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {project.nextAction.includes("reminder") && (
                            <Calendar className="h-4 w-4 text-orange-500" />
                          )}
                          {project.nextAction.includes("complete") && (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          )}
                          <span className="text-sm">{project.nextAction}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-muted-foreground">
                          {project.dueDate}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Upcoming Automations */}
          <Card className="bg-gradient-card border-border/40">
            <CardHeader>
              <CardTitle>Scheduled Automations</CardTitle>
              <CardDescription>
                Upcoming automated actions and reminders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 border border-border/20">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <Clock className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Payment Reminder</h3>
                    <p className="text-sm text-muted-foreground">
                      Marketing Firm - Overdue payment follow-up
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-orange-500 border-orange-500"
                  >
                    Today
                  </Badge>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 border border-border/20">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Send Agreement</h3>
                    <p className="text-sm text-muted-foreground">
                      Healthcare App - Contract ready for signature
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-blue-500 border-blue-500"
                  >
                    Tomorrow
                  </Badge>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 border border-border/20">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <DollarSign className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Progress Update</h3>
                    <p className="text-sm text-muted-foreground">
                      Tech Startup Inc - Weekly project status
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-purple-500 border-purple-500"
                  >
                    Friday
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <div className="flex gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/inquiry">Previous: Inquiry</Link>
              </Button>
              <Button variant="white" asChild>
                <Link href="/summary">
                  See Final Results
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
