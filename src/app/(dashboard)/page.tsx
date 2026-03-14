"use client";

import DashboardOverview from "@/components/dashboard/adminOverview/DashboardOverview";
import { EventsChart } from "@/components/dashboard/adminOverview/EventsChart";
import { PopularEventsChart } from "@/components/dashboard/adminOverview/PopularEventsChart";
import UserEngagementOverview from "@/components/dashboard/adminOverview/UserEngagementOverview";

export default function Dashboard() {
    return (
        <div className="p-6 space-y-8">
            <DashboardOverview />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <EventsChart />
                <PopularEventsChart />
            </div>
            <UserEngagementOverview />
        </div>
    );
}
