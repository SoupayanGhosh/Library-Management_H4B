
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

type SidebarLink = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

type DashboardLayoutProps = {
  children: React.ReactNode;
  sidebarLinks: SidebarLink[];
  title: string;
};

const DashboardLayout = ({ children, sidebarLinks, title }: DashboardLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#F1F0FB] pt-16">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md h-[calc(100vh-4rem)] fixed">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold text-[#6E59A5]">{title}</h2>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              {sidebarLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-2 px-4 py-2 rounded-md transition-colors",
                        isActive
                          ? "bg-[#6E59A5] text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      )
                    }
                  >
                    {link.icon}
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 ml-64 p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
