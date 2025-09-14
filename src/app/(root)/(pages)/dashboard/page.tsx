import Link from "next/link";
import React from "react";

const stats = [
  { title: "Active Clients", value: "24", change: "+12%", trend: "up" },
  { title: "Pending Agreements", value: "8", change: "-4%", trend: "down" },
  { title: "Monthly Revenue", value: "$12,450", change: "+23%", trend: "up" },
  { title: "Automation Rate", value: "94%", change: "+8%", trend: "up" },
];

const recentClients = [
  {
    name: "Acme Corp",
    status: "agreement_sent",
    amount: "$3,500",
    date: "2024-01-15",
  },
  {
    name: "Tech Startup Inc",
    status: "signed",
    amount: "$5,200",
    date: "2024-01-14",
  },
  {
    name: "Design Agency",
    status: "payment_pending",
    amount: "$2,800",
    date: "2024-01-13",
  },
  {
    name: "E-commerce Co",
    status: "in_progress",
    amount: "$4,100",
    date: "2024-01-12",
  },
];

const upcomingTasks = [
  {
    title: "Send payment reminder",
    description: "Acme Corp - overdue by 2 days",
    badge: "Auto",
  },
  {
    title: "Generate agreement",
    description: "New inquiry from Tech Startup",
    badge: "Pending",
  },
  {
    title: "Schedule follow-up",
    description: "Design Agency - project kickoff",
    badge: "Tomorrow",
  },
];

const getStatusText = (status: string) => {
  switch (status) {
    case "agreement_sent":
      return "Agreement Sent";
    case "signed":
      return "Signed";
    case "payment_pending":
      return "Payment Pending";
    case "in_progress":
      return "In Progress";
    default:
      return "Unknown";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "agreement_sent":
      return "text-yellow-400";
    case "signed":
      return "text-green-400";
    case "payment_pending":
      return "text-orange-400";
    case "in_progress":
      return "text-blue-400";
    default:
      return "text-gray-400";
  }
};

const getStatusIcon = (status: string) => {
  const baseClasses = "w-4 h-4 rounded-full";
  switch (status) {
    case "agreement_sent":
      return <div className={`${baseClasses} bg-yellow-500`}></div>;
    case "signed":
      return <div className={`${baseClasses} bg-green-500`}></div>;
    case "payment_pending":
      return <div className={`${baseClasses} bg-orange-500`}></div>;
    case "in_progress":
      return <div className={`${baseClasses} bg-blue-500`}></div>;
    default:
      return <div className={`${baseClasses} bg-gray-500`}></div>;
  }
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-5">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
            <p className="text-sm sm:text-base text-gray-400">
              Welcome back! Here&apos;s what&apos;s happening with your clients.
            </p>
          </div>
          <Link href={"/inquiry"}>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors px-4 py-2 bg-white text-black hover:bg-gray-200 w-fit self-start sm:self-auto">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              New Client
            </button>
          </Link>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-lg border bg-gray-900 border-gray-800 hover:bg-gray-800/50 transition-colors p-6"
            >
              <div className="flex flex-row items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-300">
                  {stat.title}
                </h3>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">{stat.value}</div>
                <p
                  className={`text-xs ${
                    stat.trend === "up" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {stat.change} from last month
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {/* Recent Clients */}
          <div className="rounded-lg border bg-gray-900 border-gray-800">
            <div className="p-6 pb-3">
              <h3 className="text-lg font-semibold">Recent Clients</h3>
              <p className="text-sm mt-2 text-gray-400">
                Latest client activities and status updates
              </p>
            </div>
            <div className="p-6 pt-0 space-y-4">
              {recentClients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    {getStatusIcon(client.status)}
                    <div className="min-w-0 flex-1">
                      <p className="font-medium truncate">{client.name}</p>
                      <p className={`text-sm ${getStatusColor(client.status)}`}>
                        {getStatusText(client.status)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <p className="font-semibold">{client.amount}</p>
                    <p className="text-sm text-gray-400">{client.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="rounded-lg border bg-gray-900 border-gray-800">
            <div className="p-6 pb-3">
              <h3 className="text-lg font-semibold">Upcoming Tasks</h3>
              <p className="text-sm mt-2 text-gray-400">
                Automated workflow reminders and actions
              </p>
            </div>
            <div className="p-6 pt-0 space-y-4">
              {upcomingTasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors"
                >
                  <div className="w-5 h-5 bg-gray-600 rounded flex-shrink-0"></div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-gray-400">{task.description}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium flex-shrink-0 border border-gray-600 text-gray-300 bg-gray-800">
                    {task.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
