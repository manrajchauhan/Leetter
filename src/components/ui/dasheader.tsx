"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import UserModel from "../models/UserModel";
import MoneyModel from "../models/MoneyModel";
import Link from "next/link";

export default function DasHeader() {

    const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
    const [isMoneyModalOpen, setMoneyModalOpen] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhoneNumber = async () => {
      try {
        const response = await fetch("/api/business-profile/profile");
        const data = await response.json();

        if (data.error) {
          setPhoneNumber("Not Connected");
        } else {
          setPhoneNumber(data.display_phone_number || "Not Connected");
        }
      } catch (error) {
        setPhoneNumber("Not Connected");
      } finally {
        setLoading(false);
      }
    };

    fetchPhoneNumber();
  }, []);


    const toggleSettingsModal = () => {
      setSettingsModalOpen(!isSettingsModalOpen);
    };

    const toggleMoneyModal = () => {
      setMoneyModalOpen(!isMoneyModalOpen);
    };

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
          alt: "Business Profile",
          text: "Business Profile",
        },
        {
            href: "/user/user-profile",
            imgSrc: "/misc/user_icon.svg",
            alt: "User Profile",
            text: "User Profile",
          },
      ],
    },

    {
        condition: "/user/user-profile",
        links: [
          {
            href: "/user/settings",
            imgSrc: "/icons/profile.svg",
            alt: "Business Profile",
            text: "Business Profile",
          },
          {
              href: "/user/user-profile",
              imgSrc: "/misc/user_icon.svg",
              alt: "User Profile",
              text: "User Profile",
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

      {
        condition: "/user/campaigns",
        links: [

          {
            href: "/user/campaigns",
            imgSrc: "/icons/dash.svg",
            alt: "All Campaigns",
            text: "All Campaigns",
          },
        ],
      },

      {
        condition: "/user/audience",
        links: [

          {
            href: "/user/audience",
            imgSrc: "/icons/contact.svg",
            alt: "Email Contacts",
            text: "Email Contacts",
          },
        ],
      },

      {
        condition: "/user/account-status",
        links: [

          {
            href: "/user/account-status",
            imgSrc: "/icons/setting.svg",
            alt: "Account Status",
            text: "Account Status",
          },
        ],
      },

  ].find((entry) => entry.condition === pathname)?.links || [];

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
        <Link
          className={`flex mr-10 items-center text-md font-semibold  ${
            pathname === link.href ? "text-green-600" : "text-neutral-600 hover:text-neutral-400"
          }`}
          href={link.href}
        >
          <img src={link.imgSrc} alt={link.alt} className="px-2 w-8 h-8" />
          <span>{link.text}</span>
        </Link>
      </li>
    ));

  return (
    <>
    <div className="bg-green-600 w-full h-0.5"></div>
    <div className=" py-1 px-6 bg-white border-b ">
      <div className="flex items-center">
        {/* Logo */}
        <div className="mr-32">
          <a className="text-xl text-white font-semibold" href="#">
            <img className="h-10" src="/logo.svg" alt="Logo" width="auto" />
          </a>
        </div>

        {/* Links */}
        <div className="hidden xl:block">
        <ul className="flex items-center">
          {renderLinks(links)}
          {renderLinks(additionalLinks)}
        </ul>
        </div>

        <ul className="ml-auto flex gap-7 py-2">

        <li className="mt-2 border-r relative cursor-pointer" id="userIcon" onClick={toggleMoneyModal}>
              <img
                src={userIcon.imgSrc2}
                alt={userIcon.alt}
               className="bg-green-100 lg:inline-flex px-3 pl-3 py-3 leading-none hover:text-black rounded-full hover:bg-green-50 transition duration-200  font-semibold mr-4"
              />
          </li>


          <li className="inline-block mr-4">
      {loading ? (
        <div className="flex flex-col space-y-2">
          <div className="w-24 h-4 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-32 h-5 bg-gray-300 animate-pulse rounded-md"></div>
        </div>
      ) : (
        <>
          <h1 className={`font-medium ${phoneNumber !== "Not Connected" ? "text-green-600" : "text-red-600"}`}>
            {phoneNumber !== "Not Connected" ? "Connected" : "Not Connected"}
          </h1>
          <h1 className="font-semibold">{phoneNumber}</h1>
        </>
      )}
    </li>

          <li className="mt-2 border-l cursor-pointer" id="userIcon"onClick={toggleSettingsModal}>
              <img
                src={userIcon.imgSrc}
                alt={userIcon.alt}
                className="bg-neutral-200 lg:inline-flex px-3 pl-3 py-3 leading-none hover:text-black rounded-full hover:bg-neutral-100 transition duration-200 font-semibold ml-4"
              />
          </li>

          {isSettingsModalOpen && (
        <div id="settingsModal" className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto w-full top-0 right-0 z-50">
          <UserModel />
        </div>
      )}

      {isMoneyModalOpen && (
        <div id="MoneyModal" className="fixed inset-0 overflow-y-auto w-full top-0 right-0 z-50">
          <MoneyModel />
        </div>
      )}

        </ul>

      </div>
    </div>
    </>
  );
}
