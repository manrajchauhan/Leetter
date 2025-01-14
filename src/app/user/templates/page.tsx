"use client"
import React from 'react';
import Link from 'next/link';

const Template = [
  {
    id: 1,
    name: 'Manraj Chauhan',
    status: 'Approved',
    languages: 'English (US)',
    categories: 'Marketing',
  },
  {
    id: 2,
    name: 'Manraj Chauhan',
    status: 'Rejected',
    languages: 'English (US)',
    categories: 'Marketing',
  },
];


export default function Templates()

{
  return (
    <div className='contact-form'>
        <div className='pt-4 px-4'>
            <h1 className='text-2xl font-bold tracking-tight mb-2'>Your Templates</h1>
            <p className='text-wrap text-lg'>Effortlessly create and customize templates to broadcast engaging messages to your <span className='text-green-700'>users.</span></p>
            </div>
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
        <Link href="/add-template" className="bg-green-600 text-white rounded-lg px-6 py-4 shadow-xl hover:opacity-90">
    Create Message Template
    </Link>
    </div>
        </div>
    <div className="w-full bg-white rounded-2xl">
      <table className="min-w-full bg-white table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Name</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Email/Phone</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Languages</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Categories</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Template.map((Templates) => (
            <tr key={Templates.id} className="hover:bg-green-50 text-neutral-700 text-md">
              <td className="px-4 py-4 tracking-tight flex items-center gap-4 ">
                <img src="/icons/demo_user.png" alt="user_icon" className='w-10' />
                <h1>{Templates.name}</h1>
                </td>
              <td className="px-6 py-4 tracking-tight">{Templates.languages}</td>
              <td className="px-6 py-4 tracking-tight">{Templates.categories}</td>
              <td className="px-6 py-4 tracking-tight">
              <div
                className={`rounded-full px-2 py-2 bg-green-100 text-center text-sm h-10 w-20 font-medium ${
                    Templates.status === 'Approved' ? 'text-green-600' : 'text-red-600 bg-red-100'}`}>
                {Templates.status}
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
