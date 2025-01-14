"use client"
import React from 'react';
import Link from 'next/link';

const users = [
  {
    id: 1,
    name: 'Manraj Chauhan',
    status: 'Active',
    email: 'info@solsn.com',
    role: 'Owner',
  },
  {
    id: 2,
    name: 'Manraj Chauhan',
    status: 'Offline',
    email: 'contact@solsn.com',
    role: 'User',
  },
];


export default function UserManagement()

{
  return (
    <div className='management'>
        <div className='flex px-4 py-10 justify-between '>
        <form action="">
            <div className="flex bg-gray-100 border rounded-xl transition duration-200 ">
              <img
                src="/misc/search.svg"
                alt="search"
                className="ml-2 h-5 w-5 self-center"
              />
              <input
                type="search"
                className="flex-1 px-4 py-2 bg-gray-100 outline-none rounded-xl transition duration-200"
                placeholder="Search here..."
              />
            </div>
          </form>
          <div className='mr-10'>
        <Link href="/add-user" className="bg-green-600 text-white rounded-lg px-6 py-4 shadow-xl hover:opacity-90">
      Add User
    </Link>
    </div>
        </div>
    <div className="w-full bg-white rounded-2xl">
      <table className="min-w-full bg-white table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Name</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Email/Phone</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Role</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Status</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-green-50 text-neutral-700 text-md">
              <td className="px-4 py-4 tracking-tight flex items-center gap-4 ">
                <img src="/icons/demo_user.png" alt="user_icon" className='w-10' />
                <h1>{user.name}</h1>
                </td>
              <td className="px-6 py-4 tracking-tight">{user.email}</td>
              <td className="px-6 py-4 tracking-tight">{user.role}</td>
              <td className="px-6 py-4 tracking-tight">
              <div
                className={`rounded-full px-2 py-2 bg-green-100 text-center text-sm h-10 w-20 font-medium ${
                    user.status === 'Active' ? 'text-green-600' : 'text-red-600 bg-red-100'}`}>
                {user.status}
                </div>
               </td>
              <td className="px-6 py-4 flex">
                    <div className='border py-1 px-2 bg-neutral-50 rounded-md cursor-pointer'>
                    <img src="/misc/hamb.svg" alt="menu" className='w-6 h-5 rotate-90' />
                    </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
