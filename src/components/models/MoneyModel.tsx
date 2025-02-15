import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

export default function MoneyModel() {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const toggleModal = () => {
    const modal = document.getElementById('MoneyModal');
    if (modal) modal.classList.toggle('hidden');
  };

  const closeModal = () => {
    const modalElement = document.getElementById('MoneyModal');
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
    <div
      ref={modalRef}
      id="MoneyModal"
      className="absolute right-[16rem] top-20 border w-[420px] shadow-lg rounded-lg bg-white"
    >
      {/* Header Section */}
      <div className="flex items-center p-5">
        {/* <button
          className="absolute right-5 top-3"
          onClick={toggleModal}
        >
          <svg
            className="rounded-full border border-neutral-700 p-2"
            width="30"
            height="30"
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
            />
          </svg>
        </button> */}
        <h1 className="mb-2 font-bold text-green-800 tracking-tighter text-md">
          Money Info
        </h1>
      </div>

      <div className="p-5 border-t gap-10">
        <p className="text-sm text-gray-600">
          Your balance is used to send messages, with costs deducted per message based on the pricing plan.
        </p>
        <div className="flex mt-4 justify-between items-center">
          <h1 className="text-md text-gray-800 tracking-tighter">
            Available Credits: <span className="font-bold">₹900.00</span>
          </h1>
          <div className="flex justify-center items-center">
            <Link href="usage" className="text-green-600 tracking-tighter text-md">
              Usage History
            </Link>
            <img src="/icons/arrow.svg" alt="arrow-img" className="h-5 w-8" />
          </div>
        </div>
        <div className="mt-5 flex gap-2 text-center border-t">
          <button className="mt-3 flex-1 w-full h-full py-2 bg-green-600 text-center text-white rounded-sm tracking-tighter">
            <Link href="add-money">Add Money</Link>
          </button>

          <button className="mt-3 flex-1 w-full h-full py-2 bg-green-600 text-center text-white rounded-sm tracking-tighter">
            <Link href="pricing-chart">Message Pricing</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
