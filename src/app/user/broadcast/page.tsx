'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '@/components/ui/card';
import Link from 'next/link';

const Broadcast = [
  {
    id: 1,
    brodacast_Name: 'Manraj Chauhan',
    status: 'Approved',
    languages: 'English (US)',
    categories: 'Marketing',
  },
];

export default function Dashboard() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && new URLSearchParams(window.location.search).get('loggedIn') === 'true') {
      toast.success('Login Successful! 🎉');
      router.replace('/user/broadcast', undefined);
    }
  }, [mounted, router]);


  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <div className="p-4">
        <Card />
      </div>
      <div className="flex px-4 py-10 justify-between bg-[#F5F6FA]">
        <form action="" className="flex gap-10 text-center">
          <h1 className="text-2xl font-bold mt-1 px-4">Broadcast lists</h1>
          <div className="flex bg-white border rounded-xl transition duration-200 ">
            <input
              type="search"
              className="flex-1 px-4 py-2 bg-white outline-none rounded-xl transition duration-200"
              placeholder="Search here..."
            />
          </div>
        </form>
        <div className="mr-10">
          <Link
            href="/add-template"
            className="bg-green-600 text-white rounded-lg px-6 py-4 shadow-xl hover:opacity-90"
          >
            Create Broadcast
          </Link>
        </div>
      </div>
      <div className="w-full bg-white rounded-2xl">
        <table className="min-w-full bg-white table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left font-semibold text-neutral-900">Broadcast Name</th>
              <th className="px-6 py-3 text-left font-semibold text-neutral-900">Languages</th>
              <th className="px-6 py-3 text-left font-semibold text-neutral-900">Categories</th>
              <th className="px-6 py-3 text-left font-semibold text-neutral-900">Status</th>
              <th className="px-6 py-3 text-left font-semibold text-neutral-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Broadcast.map((Broadcasts) => (
              <tr key={Broadcasts.id} className="hover:bg-green-50 text-neutral-700 text-md">
                <td className="px-4 py-4 tracking-tight flex items-center gap-4 ">
                  <img src="/icons/demo_user.png" alt="user_icon" className="w-10" />
                  <h1>{Broadcasts.brodacast_Name}</h1>
                </td>
                <td className="px-6 py-4 tracking-tight">{Broadcasts.languages}</td>
                <td className="px-6 py-4 tracking-tight">{Broadcasts.categories}</td>
                <td className="px-6 py-4 tracking-tight">
                  <div
                    className={`rounded-full px-2 py-2 bg-green-100 text-center text-sm h-10 w-20 font-medium ${
                      Broadcasts.status === 'Approved' ? 'text-green-600' : 'text-red-600 bg-red-100'
                    }`}
                  >
                    {Broadcasts.status}
                  </div>
                </td>
                <td className="px-6 py-4 flex">
                  <div className="border py-1 px-2 bg-neutral-50 rounded-md cursor-pointer">
                    <img src="/misc/hamb.svg" alt="menu" className="w-6 h-5 rotate-90" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}
