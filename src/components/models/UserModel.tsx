import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

interface User {
  name: string;
  surname: string;
  email: string;
  client_id: string;
}

const userIcon = {
  href: "#",
  imgSrc: "/misc/user_icon.svg",
  imgSrc2: "/misc/money.svg",
  alt: "User",
};

const links = [
  { name: 'Help Center', href: '/help-center' },
  { name: 'Settings', href: '/user/settings' },
  { name: 'Email Us', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];

export default function UserModel() {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setAuthToken(token);
  }, []);

  useEffect(() => {
    if (authToken) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get('/api/users', {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });

          setUserData(response.data.user);
        } catch (fetchError: any) {
          setError('Failed to fetch user data');
          console.error('Error fetching user data:', fetchError.response?.data || fetchError.message);
        }
      };

      fetchUserData();
    }
  }, [authToken]);

  const closeModal = () => {
    const modalElement = document.getElementById('settingsModal');
    if (modalElement) {
      modalElement.classList.add('hidden');
    }
  };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    const handleLinkClick = () => {
      closeModal();
    };


    document.addEventListener('mousedown', handleClickOutside);

    const linksInsideModal = modalRef.current?.querySelectorAll('a, button');
    linksInsideModal?.forEach((element) => {
      element.addEventListener('click', handleLinkClick);
    });

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      linksInsideModal?.forEach((element) => {
        element.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <div ref={modalRef} className="right-0 top-0 absolute border w-[450px] min-h-screen shadow-lg rounded-md bg-white ">
      <div className="flex items-center p-5 bg-neutral-100 ">
        <img
          loading="lazy"
          src="/logo.svg"
          className="object-contain aspect-square max-w-40 max-md:ml-1 rounded-full "
          alt="Business Logo"
        />
        {/* <button
          className="flex top-5 absolute"
          onClick={() => {
            document.getElementById('settingsModal')?.classList.toggle('hidden');
          }}
        >
          <svg
            className="rounded-full border border-neutral-700 p-2"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="#111827"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button> */}
        <h1 className="px-4 mb-2 font-bold text-green-800 tracking-tighter text-sm"> Personal info</h1>
      </div>
      <div className="p-5 border-t justify-between gap-10">
        <div className="mt-5 flex gap-2 text-center">
          <img src={userIcon.imgSrc} alt={userIcon.alt} className="border px-2 py-2 rounded-full " />
          <h1 className="text-xl font-bold text-gray-800 mt-0.5 capitalize">
            {userData ? (
              <p>
                {userData.name} {userData.surname}
              </p>
            ) : (
              <div className="w-32 h-6 bg-gray-200 animate-pulse rounded-md"></div>
            )}
          </h1>
        </div>
        <h1 className="text-lg font-medium text-gray-600 mt-2">
          {userData ? <p>{userData.email}</p> : <div className="w-32 h-6 bg-gray-200 animate-pulse rounded-md"></div>}
        </h1>
        <h1 className="font-light text-gray-600 mt-1 flex">
          <span className="font-medium">Client ID: </span>{' '}
          {userData ? <p>{userData.client_id}</p> : <div className="w-32 h-6 bg-gray-200 animate-pulse rounded-md"></div>}
        </h1>

        <Link href="account-status">
          <button className="mt-10 flex-1 w-full h-full py-2 bg-green-600 text-center text-white rounded-sm tracking-tighter">
            Account Status
          </button>
        </Link>

        <div className="mt-4 ">
          <div className="flex gap-4">
            {links.slice(0, 2).map((link, index) => (
              <div key={index} className="w-full">
                <Link href={link.href} passHref>
                  <button className="w-full text-center py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
                    {link.name}
                  </button>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            {links.slice(2, 4).map((link, index) => (
              <div key={index} className="w-full">
                <Link href={link.href} passHref>
                  <button className="w-full text-center py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
                    {link.name}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
