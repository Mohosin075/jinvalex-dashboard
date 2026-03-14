import { LayoutDashboard, UserCheck, User, CreditCard, Settings, FileText } from "lucide-react";
import { MenuItem, Role } from "@/types/navigation";

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
    {
        title: "Terms & Conditions",
        url: "/terms-conditions",
        icon: FileText,
    },
];

export const MENU_ITEMS: Record<Role, MenuItem[]> = {
    admin: commonMenuItems,
    super_admin: commonMenuItems,
    organizer: commonMenuItems,
};
