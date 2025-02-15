import Link from 'next/link'
import React from 'react'

const Broadcast = [
    {
      id: 1,
      brodacast_Name: 'Indiana Drives & Engineering Maintenance & Services',
      status: 'Sent',
      audience: 'indiana drives & engineering pvt ltd',
      participants: '1000',
      Analytics: {
        Opens: '60.0%',
        clicks: '2.0%',
      },
    },
  ];
const username ="Manraj Chauhan";

export default function Campaigns() {
  return (
    <>
   <div className='flex px-4 py-10 justify-between bg-gray-100'>
        <form action="" className='flex gap-10 text-center'>
        <h1 className='text-2xl font-bold mt-1'>All campaigns</h1>
            <div className="flex bg-white border rounded-xl transition duration-200 ">
              <input
                type="search"
                className="flex-1 px-4 py-2 bg-white outline-none rounded-xl transition duration-200"
                placeholder="Search here..."
              />
            </div>
          </form>
          <div className='mr-10'>
        <Link href="/add-template" className="bg-green-600 text-white rounded-lg px-6 py-4 shadow-xl hover:opacity-90">
    Create New
    </Link>
    </div>
        </div>
    <div className="w-full bg-white rounded-t-2xl px-2">
      <table className="min-w-full bg-white table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Name</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Audience</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Analytics</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Status</th>
            <th className="px-6 py-3 text-left font-semibold text-neutral-900">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Broadcast.map((broadcast) => (
            <tr key={broadcast.id} className="hover:bg-green-50 text-neutral-700 text-md">
              <td className="px-4 py-4 tracking-tight flex items-center gap-4 ">
                <img src="/icons/demo_user.png" alt="user_icon" className='w-10' />
                <h1>{broadcast.brodacast_Name}</h1>
                </td>
              <td className="px-6 py-4 tracking-tight">
                <div className='flex flex-col gap-2'>
                <h1>{broadcast.audience}</h1>
               <p><span className='font-semibold'>recipients: </span>{broadcast.participants}</p>
                </div>
                </td>

                <td className="px-6 py-4 tracking-tight">
                <div className='flex flex-col gap-2'>
                <div className='flex  justify-between'>
                <h1 className='text-sm'>{broadcast.Analytics.Opens}</h1>
                <h1 className='text-sm'>{broadcast.Analytics.clicks}</h1>
                </div>
                <div className='flex justify-between'>
                <span>Opens</span>
                <span>Clicks</span>
                </div>
                </div>
                </td>

              <td className="px-6 py-4 tracking-tight">
              <div
                className={`rounded-full px-2 py-2 bg-green-100 text-center text-sm h-10 w-20 font-medium ${
                    broadcast.status === 'Sent' ? 'text-green-600' : 'text-red-600 bg-red-100'}`}>
                {broadcast.status}
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
