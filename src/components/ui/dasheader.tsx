"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function DasHeader() {
  const pathname = usePathname();

  const links = [
    {
      href: "/user/inbox",
      imgSrc: "/misc/inbox.svg",
      alt: "Inbox",
      text: "Inbox",
    },
  ];

  const additionalLinks = [
    {
      condition: "/user/settings",
      links: [
        {
          href: "/user/settings",
          imgSrc: "/icons/profile.svg",
          alt: "Profile",
          text: "Business Profile",
        },
      ],
    },

    {
        condition: "/user/broadcast",
        links: [
          {
            href: "/user/broadcast",
            imgSrc: "/icons/dash.svg",
            alt: "Overview",
            text: "Overview ",
          },
          {
            href: "/user/broadcast_list",
            imgSrc: "/icons/analytics.svg",
            alt: "Broadcasts List",
            text: "Broadcast Lists ",
          },
        ],
      },
      {
        condition: "/user/broadcast_list",
        links: [
          {
            href: "/user/broadcast",
            imgSrc: "/icons/dash.svg",
            alt: "Overview",
            text: "Overview ",
          },
          {
            href: "/user/broadcast_list",
            imgSrc: "/icons/analytics.svg",
            alt: "Broadcasts List",
            text: "Broadcast Lists ",
          },
        ],
      },

    {
      condition: "/user/templates",
      links: [
        {
            href: "/user/templates",
            imgSrc: "/icons/template.svg",
            alt: "Your Templates",
            text: "Your Templates",
          },
        {
          href: "/user/templates_library",
          imgSrc: "/icons/account.svg",
          alt: "Template Library",
          text: "Template Library",
        },
      ],
    },
    {
        condition: "/user/templates_library",
        links: [
            {
                href: "/user/templates",
                imgSrc: "/icons/template.svg",
                alt: "Your Templates",
                text: "Your Templates",
              },
          {
            href: "/user/templates_library",
            imgSrc: "/icons/account.svg",
            alt: "Template Library",
            text: "Template Library",
          },
        ],
      },
  ].find((entry) => entry.condition === pathname)?.links || [];

  const contactInfo = {
    status: "Active",
    phone: "+91 8850346213",
  };

  const userIcon = {
    href: "#",
    imgSrc: "/misc/user_icon.svg",
    imgSrc2: "/misc/money.svg",
    alt: "User",
  };


  const renderLinks = (linksArray: { href: string; imgSrc: string; alt: string; text: string }[]) =>
    linksArray.map((link, index) => (
      <li key={index} className="relative">
         {link.href === "/user/inbox" && (
    <div className="absolute h-2 w-2 animate-pulse bg-green-500 rounded-full right-7 top-2"></div>
  )}
        <a
          className={`flex mr-10 items-center text-md font-semibold  ${
            pathname === link.href ? "text-green-600" : "text-neutral-600 hover:text-neutral-400"
          }`}
          href={link.href}
        >
          <img src={link.imgSrc} alt={link.alt} className="px-2 w-10 h-10" />
          <span>{link.text}</span>
        </a>
      </li>
    ));

  return (
    <div className="hidden xl:block py-1 px-6 bg-white border-b">
      <div className="flex items-center">
        {/* Logo */}
        <div className="mr-32">
          <a className="text-xl text-white font-semibold" href="#">
            <img className="h-10" src="/logo.svg" alt="Logo" width="auto" />
          </a>
        </div>


        <ul className="flex items-center">
          {renderLinks(links)}
          {renderLinks(additionalLinks)}
        </ul>

        <ul className="ml-auto flex gap-7 py-2">

          <li className="mt-2 border-r">
            <a
              className="bg-green-100 lg:inline-flex px-3 pl-3 py-3 leading-none hover:text-black rounded-full hover:bg-green-50 transition duration-200  font-semibold mr-4"
              href={userIcon.href}
            >
              <img src={userIcon.imgSrc2} alt={userIcon.alt} />
            </a>
          </li>


          <li className="inline-block mr-4">
            <h1 className="text-green-600 font-medium">{contactInfo.status}</h1>
            <h1 className="font-semibold">{contactInfo.phone}</h1>
          </li>

          <li className="mt-2 border-l">
            <a
              className="bg-neutral-200 lg:inline-flex px-3 pl-3 py-3 leading-none hover:text-black rounded-full hover:bg-neutral-100 transition duration-200  font-semibold ml-4"
              href={userIcon.href}
            >
              <img src={userIcon.imgSrc} alt={userIcon.alt} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
