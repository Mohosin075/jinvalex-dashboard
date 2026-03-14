"use client";
import { LayoutDashboard, Users, TrendingUp } from "lucide-react";

export interface MenuItem {
    title: string;
    url: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const commonMenuItems: MenuItem[] = [
    {
        title: "Dashboard",
        url: "/",
        icon: LayoutDashboard,
    },
    {
        title: "User Management",
        url: "/users-management",
        icon: Users,
    },
    {
        title: "Analytics",
        url: "/analytics",
        icon: TrendingUp,
    },
];

export const menuItems: Record<string, MenuItem[]> = {
    admin: commonMenuItems,
    super_admin: commonMenuItems,
    organizer: commonMenuItems, 
};
