import { DownloadIcon, FilterIcon, TrendingUpIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Client Workflow <br /><span className="font-subheading italic">dashboard</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        Monitor your AI agents handling client proposals, contracts, payments, and projects in real-time with actionable insights.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">

                {/* Client Overview */}
                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Client Overview</h3>
                                <p className="text-sm text-muted-foreground">
                                    Track your clients, proposals, and active contracts managed by AI agents.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">42</div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <TrendingUpIcon className="w-4 h-4" />
                                                +10% new clients this month
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                            <div>Client</div>
                                            <div>Status</div>
                                            <div>Active Projects</div>
                                            <div>Pending Payments</div>
                                        </div>
                                        {[
                                            { name: "Acme Corp", status: "Active", projects: 3, payments: "$5,200" },
                                            { name: "Beta LLC", status: "Pending", projects: 2, payments: "$1,450" },
                                            { name: "Gamma Co", status: "Active", projects: 5, payments: "$8,300" },
                                        ].map((client) => (
                                            <div key={client.name} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                                <div>{client.name}</div>
                                                <div>{client.status}</div>
                                                <div>{client.projects}</div>
                                                <div className="font-semibold">{client.payments}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                {/* Agent Performance */}
                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-sky-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Agent Performance</h3>
                                <p className="text-sm text-muted-foreground">
                                    Monitor AI agents’ activity in handling client tasks and workflow efficiency.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">12</div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <TrendingUpIcon className="w-4 h-4" />
                                                +15% task completion rate
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Agent Table */}
                                    <div className="space-y-2">
                                        <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                            <div>Agent</div>
                                            <div>Tasks</div>
                                            <div>Clients</div>
                                            <div>Efficiency</div>
                                        </div>
                                        {[
                                            { agent: "Agent A", tasks: 24, clients: 5, efficiency: "95%" },
                                            { agent: "Agent B", tasks: 18, clients: 3, efficiency: "88%" },
                                            { agent: "Agent C", tasks: 30, clients: 7, efficiency: "92%" },
                                        ].map((agent) => (
                                            <div key={agent.agent} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                                <div>{agent.agent}</div>
                                                <div>{agent.tasks}</div>
                                                <div>{agent.clients}</div>
                                                <div className="font-semibold">{agent.efficiency}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

            </div>
        </div>
    )
};

export default Analysis;
