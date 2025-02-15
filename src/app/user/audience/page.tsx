"use client"
import React from 'react';
import Link from 'next/link';

const contact = [
  {
    id: 1,
    name: 'Manraj',
    surname:'Chauhan',
    phone: '+91 9876543210',
    email: 'info@solsn.com',
    DOB: '12/07/2001',
    address: 'Kalamboli, Navi Mumbai',
    CompanyName : 'Solsn Technologies',

  },
  {
    id: 2,
    name: 'Manraj',
    surname:'Chauhan',
    phone: '+91 9876543210',
    email: 'info@solsn.com',
    DOB: '12/07/2001',
    address: 'Kalamboli, Navi Mumbai',
    CompanyName : 'Solsn Technologies',
  },

];

let totalcontact = "489";
let emailsubscriber ="486";


export default function Audiences()

{
  return (
    <>
    <div className='p-4 bg-white'>
            <div className="pt-4 px-4">
            <h1 className="text-2xl font-bold mb-6">Contacts</h1>
            <div className='flex gap-4'>
                <h1 className='text-md'><span className='text-green-500 mr-2'>{totalcontact}</span>Total Contacts </h1>
                <hr />
                <h1 className='text-md'><span className='text-green-500 mr-2'>{emailsubscriber}</span>Email Subscribers </h1>
            </div>
        </div>
        </div>
        <div className='flex px-4 py-10 justify-between bg-white border-t'>
        <form action="">
            <div className="flex border bg-gray-100 rounded-xl transition duration-200 ">
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
        <Link href="/add-contact" className="bg-green-600 text-white rounded-lg px-6 py-4 shadow-xl hover:opacity-90">
      Add Contacts
    </Link>
    </div>
        </div>
    <div className="w-full bg-white border-t max-h-screen overflow-y-auto">
      <table className="min-w-full bg-white table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-6 py-3 text-left font-semibold text-neutral-900 hover:bg-slate-100">Email Address</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900 hover:bg-slate-100">Name</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900 hover:bg-slate-100">Surname</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900 hover:bg-slate-100">Phone</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900 hover:bg-slate-100">DOB</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900 hover:bg-slate-100">Address</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900 hover:bg-slate-100">Company Name</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900 hover:bg-slate-100">Actions</th>
          </tr>
        </thead>

        <tbody>
          {contact.map((contacts) => (
            <tr key={contacts.id} className="hover:bg-green-50 text-neutral-700 text-md">
              <td className="px-4 py-4 tracking-tight flex items-center gap-4 ">
                <h1>{contacts.email}</h1>
                </td>
              <td className="px-6 py-4 tracking-tight">{contacts.name}</td>
              <td className="px-6 py-4 tracking-tight">{contacts.surname}</td>
              <td className="px-6 py-4 tracking-tight">{contacts.phone}</td>
              <td className="px-6 py-4 tracking-tight">{contacts.DOB}</td>
              <td className="px-6 py-4 tracking-tight">{contacts.address}</td>
              <td className="px-6 py-4 tracking-tight">{contacts.CompanyName}</td>
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
