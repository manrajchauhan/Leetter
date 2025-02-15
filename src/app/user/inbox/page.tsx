import React from 'react';

const chats = [
  { id: 1, name: 'Manraj Chauhan', lastMessage: 'is it Avaiable?', avatar: '/logo.svg' },

];

export default function Inbox() {
  return (
    <div className="flex">
      {/* Side Panel */}
      <aside className="w-1/4 border-r bg-white">
        <div className="p-4">
          {/* Search Form */}
          <form action="">
            <div className="flex bg-gray-100 border rounded-xl focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200 transition duration-200">
              <img
                src="/misc/search.svg"
                alt="search"
                className="ml-2 h-5 w-5 self-center"
              />
              <input
                type="search"
                className="flex-1 px-4 py-2 bg-gray-100 outline-none rounded-xl focus:bg-gray-100 transition duration-200"
                placeholder="Search here..."
              />
            </div>
          </form>

          {/* Contacts List */}
          <div className="p-4">
            <h2 className="font-normal text-lg mb-4 text-green-500">CONTACTS.</h2>
            <ul>
              {chats.map((chat) => (
                <li key={chat.id} className="py-3 border-b flex items-start gap-3">
                  <img
                    src={chat.avatar}
                    alt="Avatar"
                    className="h-8 w-8 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{chat.name}</h3>
                    <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

   {/* Chat Window */}
<main className="w-1/2 bg-gray-50 border-r relative" style={{ backgroundImage: "url(/grain.png)" }}>
  <div className="focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200 transition duration-200">
    {/* Upper */}
    <div className="flex px-2 mt-1 py-1 border-b justify-between bg-white">
      <div className="flex gap-4">
        <img
          src="/logo.svg"
          alt="Avatar"
          className="h-8 w-8 rounded-full"
        />
        <div>
          <h2 className="font-bold text-md">Manraj Chauhan</h2>
          <h2 className="text-md">+91 8850346213</h2>
        </div>
      </div>
      <div className="hamb">
        <img src="/misc/hamb.svg" alt="hamb" className="h-10 w-6 cursor-pointer" />
      </div>
    </div>

    {/* Layout for upcoming & outgoing messages */}
<div className="p-4 space-y-4 h-[calc(100vh-150px)] overflow-y-auto ">
  {/* Incoming Message */}
  <div className="flex items-start gap-3">
    <div className="bg-white rounded-lg p-3 max-w-xs">
      <p className="text-sm">IDBI Bank A/C NN09300 debited INR. 19200.00 Det:NEFT-ICIC0000874-INDIANA D- Chq No 441044.</p>
    </div>
  </div>

  {/* Outgoing Message */}
  <div className="flex items-start gap-3 justify-end">
    <div className="bg-green-100 text-black rounded-lg p-3 max-w-xs">
      <p className="text-sm">Hi Sir, Whatsapp?</p>
    </div>
  </div>
</div>


  </div>

  {/* Bottom Message Input */}
  <div
    className="border-t bg-white py-3 px-3  flex items-center gap-3 w-full absolute rounded-xl bottom-1"
    style={{ maxWidth: "inherit" }}
  >
    <form action="" className='w-full'>
        <div className='w-full'>
    {/* Text Input */}
    <textarea
      placeholder="Type your message..."
      className="flex-grow w-full rounded-lg focus:outline-none focus:none focus:none resize-none font-sm"
     rows={1}
    />
    </div>
    <div className='flex justify-between'>
    {/* Attachment Icon */}
    <label htmlFor="file-upload" className="cursor-pointer mt-2">
      <img src="/misc/file.svg" alt="Attach" className="h-6 w-6" />
      <input id="file-upload" type="file" className="hidden" />
    </label>

    {/* Send Button */}
    <button className="bg-green-600 text-white rounded-lg px-4 py-2">
      Send
    </button>
    </div>
    </form>
  </div>
</main>



      {/* Profile Details */}
      <section className="w-1/3 relative bg-white">
      <div className="focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200 transition duration-200">
        <div className='flex px-2 py-2 border-b'>
        <div className='flex items-center justify-center gap-2'>
            <img src="/misc/contact.svg" alt="contact" className='w-5 h-5 '/>
        <h2 className="font-medium text-lg text-green-500">Contact Info.</h2>
        </div>
          </div>
        <div className='border-b'>
         <ul className='py-2 px-2'>
            <li className=" items-start gap-3">
        <div className='flex gap-10 mb-2 justify-between px-5'>
          <h2 className="font-normal text-md text-neutral-400">User Name</h2>
          <h2 className="text-md ">Manraj Chauhan</h2>
          </div>
          <div className='flex gap-10 justify-between px-5'>
          <h2 className="font-normal text-neutral-400 text-md">Phone Number</h2>
          <h2 className="text-md">(+91) 8850346213</h2>
          </div>
              </li>
          </ul>
          </div>
        </div>
        <div className="absolute bottom-0 right-10 flex gap-4">
  <div className="flex items-center gap-2">
    <img src="/misc/time.svg" alt="time" className="w-8 h-8" />
    <h2>23:59</h2>
  </div>
  <div className="window border rounded-xl p-2">
    <select name="status" id="status" className="outline-none">
      <option value="open">Open</option>
      <option value="closed">Close</option>
      <option value="pending">Pending</option>
    </select>
  </div>
</div>

      </section>
    </div>
  );
}
