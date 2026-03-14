"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Eye, Heart, Activity, Spade } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useGetDashboardStatsQuery } from "@/redux/features/dashboard/dashboardApi";
import { Skeleton } from "@/components/ui/skeleton";

export default function AnalyticsPage() {
    const { data: statsData, isLoading, isError } = useGetDashboardStatsQuery(undefined);

    if (isLoading) {
        return (
            <div className="p-6 space-y-8">
                <div className="space-y-2">
                    <Skeleton className="h-10 w-64" />
                    <Skeleton className="h-4 w-48" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <Skeleton key={i} className="h-32 w-full" />
                    ))}
                </div>
                <div className="space-y-4">
                    <Skeleton className="h-8 w-48" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <Skeleton key={i} className="h-64 w-full" />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (isError || !statsData?.success) {
        return (
            <div className="p-6 flex items-center justify-center min-h-[400px]">
                <p className="text-destructive">Error loading analytics data. Please try again later.</p>
            </div>
        );
    }

    const stats = statsData.data;

    return (
        <div className="p-6 space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-serif text-foreground uppercase tracking-widest">Analytics Dashboard</h1>
                <p className="text-muted-foreground mt-2">Comprehensive insights and metrics</p>
            </div>

            {/* Top Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-secondary border-none shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm text-muted-foreground">Total Users</p>
                                <h3 className="text-3xl font-serif text-primary font-bold mt-2">{stats.totalUsers.toLocaleString()}</h3>
                                <p className="text-xs text-muted-foreground mt-1">+0 this month</p>
                            </div>
                            <Users className="w-8 h-8 text-primary/40" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-secondary border-none shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm text-muted-foreground">Active Users</p>
                                <h3 className="text-3xl font-serif text-[#66BB6A] font-bold mt-2">{stats.activeUsers.toLocaleString()}</h3>
                                <p className="text-xs text-muted-foreground mt-1">Online today</p>
                            </div>
                            <Activity className="w-8 h-8 text-[#66BB6A]/40" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="border-none shadow-sm">
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-sm font-serif uppercase tracking-[0.35em] text-foreground">
                        Recent User Activity
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Latest user actions and events
                    </p>
                    <div className="space-y-2">
                        {stats.recentActivity.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="flex items-center justify-between rounded-xl bg-[#FFF5F8] px-4 py-3"
                            >
                                <div>
                                    <p className="text-sm font-medium">{item.user}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {item.action}
                                    </p>
                                </div>
                                <div className="text-right text-xs sm:text-sm">
                                    <p className="text-muted-foreground">
                                        {new Date(item.timestamp).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-[#FFF5F8] border-none shadow-sm rounded-3xl">
                <CardContent className="p-6 space-y-6">
                    <h2 className="text-sm font-serif uppercase tracking-[0.35em] text-foreground">
                        Monthly Growth
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        User growth trends
                    </p>
                    <div className="space-y-8">
                        <div className="space-y-3">
                            <p className="text-xs text-muted-foreground">User Growth</p>
                            <div className="h-40">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={stats.monthlyGrowth}
                                        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                                        barCategoryGap={5}
                                        barGap={0}
                                    >
                                        <XAxis
                                            dataKey="month"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                                        />
                                        <YAxis hide />
                                        <Tooltip cursor={{ fill: "transparent" }} />
                                        <Bar
                                            dataKey="users"
                                            fill="#F8A8C6"
                                            radius={[18, 18, 0, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
