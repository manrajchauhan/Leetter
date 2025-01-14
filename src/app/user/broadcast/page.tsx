import Card from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const Broadcast = [
    {
      id: 1,
      brodacast_Name: 'Manraj Chauhan',
      status: 'Approved',
      languages: 'English (US)',
      categories: 'Marketing',
    },
  ];
const username ="Manraj Chauhan";

export default function Dashboard() {
  return (
    <>
    <div className='px-4 text-green-600 text-3xl font-semibold'>Welcome <span className='text-gray-400'>{username}</span></div>
   <Card/>
   <div className='flex px-4 py-10 justify-between'>
        <form action="" className='flex gap-10 text-center'>
        <h1 className='text-2xl font-bold mt-1'>Broadcast lists</h1>
            <div className="flex bg-gray-100 border rounded-xl transition duration-200 ">
              <input
                type="search"
                className="flex-1 px-4 py-2 bg-gray-100 outline-none rounded-xl transition duration-200"
                placeholder="Search here..."
              />
            </div>
          </form>
          <div className='mr-10'>
        <Link href="/add-template" className="bg-green-600 text-white rounded-lg px-6 py-4 shadow-xl hover:opacity-90">
    Create Broadcast
    </Link>
    </div>
        </div>
    <div className="w-full bg-white rounded-2xl">
      <table className="min-w-full bg-white table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Broadcast Name</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Email/Phone</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Languages</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Categories</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Broadcast.map((Broadcasts) => (
            <tr key={Broadcasts.id} className="hover:bg-green-50 text-neutral-700 text-md">
              <td className="px-4 py-4 tracking-tight flex items-center gap-4 ">
                <img src="/icons/demo_user.png" alt="user_icon" className='w-10' />
                <h1>{Broadcasts.brodacast_Name}</h1>
                </td>
              <td className="px-6 py-4 tracking-tight">{Broadcasts.languages}</td>
              <td className="px-6 py-4 tracking-tight">{Broadcasts.categories}</td>
              <td className="px-6 py-4 tracking-tight">
              <div
                className={`rounded-full px-2 py-2 bg-green-100 text-center text-sm h-10 w-20 font-medium ${
                    Broadcasts.status === 'Approved' ? 'text-green-600' : 'text-red-600 bg-red-100'}`}>
                {Broadcasts.status}
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
)
}
