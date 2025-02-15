"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  name: string;
  surname: string;
}

export default function Card() {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  const cardData = [
    { value: 10, label: 'Sent', icon: '/misc/tick.svg' },
    { value: 1, label: 'Open', icon: '/misc/double_tick.svg' },
    { value: 2, label: 'Read', icon: '/misc/read.svg' },
    { value: 2, label: 'Replied', icon: '/misc/replied.svg' },
    { value: 2, label: 'Processing', icon: '/misc/replied.svg' },
    { value: 2, label: 'Failed', icon: '/misc/replied.svg' },
  ];

  return (
    <section className="py-2">
      <div className="container px-4 mx-auto">
      <div className="flex text-green-600 text-3xl font-semibold">
  Welcome
  <span className="text-gray-400 ml-4 capitalize">
    {userData ? (
      <p>{userData.name} {userData.surname}</p>
    ) : (
      <div className="w-32 h-6 bg-gray-200 animate-pulse rounded-md"></div>
    )}
  </span>
</div>
        <h1 className="mb-4 mt-4 font-bold text-2xl">Overview</h1>
        <div className="flex flex-wrap -m-4">
          {cardData.map((card, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4 relative">
              <div className="p-6 rounded-xl border border-gray-200 bg-[#F5F6FA] shadow-sm">
                <h2 className="mb-2 text-3xl font-bold">{card.value}</h2>
                <h3 className="text-sm text-gray-600">{card.label}</h3>
              </div>
              <div className="absolute top-10 right-10 h-10 w-10 bg-white rounded-full flex items-center justify-center">
                <img
                  src={card.icon}
                  alt={card.label}
                  className="h-5 w-5"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
