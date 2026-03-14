"use client";
import { LayoutDashboard, UserCheck, User, CreditCard, Settings } from "lucide-react";

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
        title: "Pro User",
        url: "/pro-user",
        icon: UserCheck,
    },
    {
        title: "Free User",
        url: "/free-user",
        icon: User,
    },
    {
        title: "Payment",
        url: "/payment",
        icon: CreditCard,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
];

export const menuItems: Record<string, MenuItem[]> = {
    admin: commonMenuItems,
    super_admin: commonMenuItems,
    organizer: commonMenuItems, 
};
