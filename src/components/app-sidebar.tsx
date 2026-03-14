"use client";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { menuItems } from "@/lib/navigation/MenuItems";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectRole } from "@/redux/features/auth/authSlice";
import { useGetUserProfileQuery } from "@/redux/features/user/userApi";
import { getImageUrl } from "@/utils/imageUrl";
import { baseApi } from "@/redux/api/baseApi";

export function AppSidebar() {
    const pathname = usePathname();
    const role = useAppSelector(selectRole);
    // Use admin items for now
    const items = menuItems["admin"]; 
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { data: myProfile } = useGetUserProfileQuery();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(baseApi.util.resetApiState());
        router.push("/auth/login");
        router.refresh();
    };

    return (
        <Sidebar className="border-r border-sidebar-border bg-white">
            <SidebarContent className="p-0 h-full flex flex-col justify-between">
                <div>
                    <div className="px-10 py-12">
                        <Link href="/" className="block">
                            <h1 className="text-[32px] font-bold text-black tracking-tight leading-none">name</h1>
                        </Link>
                    </div>
                    <SidebarGroup className="px-0">
                        <SidebarGroupContent>
                            <SidebarMenu className="space-y-1">
                                {items.map((item) => {
                                    const isActive = pathname === item.url || (item.url !== "/" && pathname.startsWith(item.url));
                                    return (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild className="h-12 py-0 px-0 hover:bg-transparent">
                                                <Link 
                                                    href={item.url} 
                                                    className={`flex items-center gap-4 px-10 py-3 transition-all duration-200 border-l-[6px] ${isActive ? "bg-[#0052FF] text-white border-[#0052FF]" : "text-[#828282] hover:text-gray-900 border-transparent hover:bg-gray-50"}`}
                                                >
                                                    <item.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-[#828282]"}`} />
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-medium text-[15px]">{item.title}</span>
                                                        {item.title === "Pro User" && (
                                                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                                                        )}
                                                    </div>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    );
                                })}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </div>
                
                <div className="mt-auto p-10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-md transition-colors duration-200 text-[#EB5757] border border-[#EB5757]/30 hover:bg-red-50 w-full cursor-pointer text-sm font-medium"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span>Sign-out</span>
                    </button>
                </div>
            </SidebarContent>
        </Sidebar>
    );
}
