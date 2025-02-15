"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {

    if (typeof window !== "undefined") {
      const authToken = localStorage.getItem("authToken");

      if (authToken) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push("/login");
      }
    }
  }, [router]);

  if (isAuthenticated === null) return null;

  const mainMenu = [
    { href: "/user/broadcast", icon: "/icons/broadcast.svg", label: "Broadcast" },
    { href: "/user/contacts", icon: "/icons/contact.svg", label: "Contacts" },
    { href: "/user/templates", icon: "/icons/template.svg", label: "Templates" },
    { href: "#", icon: "/icons/billing.svg", label: "Account Details" },
    { href: "#", icon: "/icons/analytics.svg", label: "Analytics" },
    { href: "/user/user-management", icon: "/misc/user_icon.svg", label: "User Management" },
  ];

  const moreMenu = [
    { href: "/user/campaigns", icon: "/icons/broadcast.svg", label: "Campaigns" },
    { href: "/user/audience", icon: "/icons/contact.svg", label: "Audience" },
    { href: "/user/email-templates", icon: "/icons/template.svg", label: "Email Templates" },
  ];

  const settingsLink = { href: "/user/settings", icon: "/icons/setting.svg", label: "Settings" };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("userData");
    router.push("/login");
  };

  interface MenuItemProps {
    href: string;
    icon: string;
    label: string;
  }

  const MenuItem: React.FC<MenuItemProps> = ({ href, icon, label }) => (
    <Link
      href={href}
      className={`flex items-center pl-3 py-3 pr-4 font-semibold text-[18px] tracking-tighter rounded ${
        pathname === href ? "text-green-600" : "text-neutral-600 hover:text-green-600"
      }`}
    >
      <span className="inline-block mr-3">
        <img
          src={icon}
          alt={label}
          className="w-5 h-5"
        />
      </span>
      <span>{label}</span>
    </Link>
  );

  return (
    <aside className="bg-white border-r w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 overflow-y-auto">
      <div className="px-4 pb-6">
        {/* Main Menu */}
        <ul className="mb-8 text-sm font-medium">
          {mainMenu.map((item, index) => (
            <li key={index}>
              <MenuItem href={item.href} icon={item.icon} label={item.label} />
            </li>
          ))}
        </ul>

        {/* More Menu */}
        <h3 className="mb-2 text-md uppercase text-neutral-600 font-medium">
          Email Marketing
        </h3>
        <ul className="text-sm font-medium">
          {moreMenu.map((item, index) => (
            <li key={index}>
              <MenuItem href={item.href} icon={item.icon} label={item.label} />
            </li>
          ))}
        </ul>

        {/* Settings and Logout */}
        <div className="pt-8">
          <MenuItem href={settingsLink.href} icon={settingsLink.icon} label={settingsLink.label} />
          <button
            onClick={handleLogout}
            className="w-40 flex items-center justify-start px-3 py-3 text-[18px] font-semibold tracking-tighter text-white border border-black rounded-full hover:bg-green-500 bg-green-600 transition duration-200 mt-4"
          >
            <img src="/icons/logout.svg" alt="Log Out" className="w-5 h-5 mr-3" />
            Log Out
          </button>
        </div>
      </div>
    </aside>
  );
}
