"use client"
import React from 'react';
import Link from 'next/link';

const contact = [
  {
    id: 1,
    name: 'Manraj Chauhan',
    Attributes: 'Company:Solsn',
    email: 'info@solsn.com',
    source: 'Google',
  },

];


export default function Contacts()

{
  return (
    <>
    <div className='p-4 bg-[#F5F6FA]'>
            <div className="pt-4 px-4">
            <h1 className="text-2xl font-bold tracking-tight mb-2">Contacts</h1>
            <p className="text-gray-600 text-lg mt-4 max-w-5xl">
  To get started, simply add your contacts here. This will allow you to easily reach out to them with personalized messages and campaigns. Make sure to keep your contact list updated for better engagement and smoother communication.
</p>
        </div>
        </div>
        <div className='flex px-4 py-10 justify-between bg-[#F5F6FA]'>
        <form action="">
            <div className="flex border bg-white rounded-xl transition duration-200 ">
              <img
                src="/misc/search.svg"
                alt="search"
                className="ml-2 h-5 w-5 self-center"
              />
              <input
                type="search"
                className="flex-1 px-4 py-2 outline-none rounded-xl transition duration-200"
                placeholder="Search here..."
              />
            </div>
          </form>
          <div className='mr-10'>
        <Link href="/add-contact" className="bg-green-600 text-white rounded-lg px-6 py-4 shadow-xl hover:opacity-90">
      Add Contacts
    </Link>
    </div>
        </div>
    <div className="w-full bg-white rounded-2xl max-h-screen overflow-y-auto">
      <table className="min-w-full bg-white table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Name</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Email/Phone</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Source</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Attributes</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Actions</th>
          </tr>
        </thead>

        <tbody>
          {contact.map((contacts) => (
            <tr key={contacts.id} className="hover:bg-green-50 text-neutral-700 text-md">
              <td className="px-4 py-4 tracking-tight flex items-center gap-4 ">
                <img src="/icons/demo_user.png" alt="user_icon" className='w-10' />
                <h1>{contacts.name}</h1>
                </td>
              <td className="px-6 py-4 tracking-tight">{contacts.email}</td>
              <td className="px-6 py-4 tracking-tight">{contacts.source}</td>
              <td className="px-6 py-4 tracking-tight">
              <div
                className=' bg-gray-100 text-center text-sm py-2 px-2 w-full font-medium'>
                {contacts.Attributes}
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
    </>
  );
}
