"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [active, setActive] = useState(true);
  const pathname = usePathname();

  const mainMenu = [
    // { href: "dashboard", icon: "/icons/dash.svg", label: "Dashboard" },
    { href: "broadcast", icon: "/icons/broadcast.svg", label: "Broadcast" },
    { href: "contacts", icon: "/icons/contact.svg", label: "Contacts" },
    { href: "#", icon: "/icons/analytics.svg", label: "Analytics" },
    { href: "chat_window", icon: "/icons/chatbot.svg", label: "ChatGPT" },
  ];

  const moreMenu = [
    { href: "templates", icon: "/icons/template.svg", label: "Templates" },
    { href: "#", icon: "/icons/billing.svg", label: "Billing Details" },
    { href: "user-management", icon: "/misc/user_icon.svg", label: "User Management" },
  ];

  const settingsLink = { href: "settings", icon: "/icons/setting.svg", label: "Settings" };
  const logoutLink = { href: "#", icon: "/icons/logout.svg", label: "Log Out" };

  interface MenuItemProps {
    href: string;
    icon: string;
    label: string;
  }

  const MenuItem: React.FC<MenuItemProps> = ({ href, icon, label }) => (
    <Link
      href={href}
      className={`flex items-center pl-3 py-3 pr-4 font-semibold text-[18px] tracking-tighter rounded ${
        pathname === `/user/${href}` ? "text-green-600" : "text-neutral-600 hover:text-green-600"
      }`}
    >
      <span className="inline-block mr-3">
        <img
          src={icon}
          alt={label}
          className={`w-5 h-5 ${
            pathname === `/${href}` ? "text-green-500" : "text-neutral-400 hover:text-green-600"
          }`}
        />
      </span>
      <span>{label}</span>
    </Link>
  );

  return (
    <>
      <div className="lg:block relative">
        <div className="lg:hidden inset-0 opacity-10"></div>
        <nav className="top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 overflow-y-auto border-r">
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
            <h3 className="mb-2 text-xs uppercase text-neutral-600 font-medium">
              More
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
              <a
                className="bg-green-400 lg:inline-flex px-8 pl-3 py-3 leading-none hover:text-black border border-black rounded-full hover:bg-green-200 transition duration-200 tracking-tighter font-semibold mt-4 flex items-center gap-4"
                href={logoutLink.href}
              >
                <img src={logoutLink.icon} alt={logoutLink.label} className="text-neutral-400 w-5 h-5 hover:text-green-600" />
                <span>{logoutLink.label}</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
