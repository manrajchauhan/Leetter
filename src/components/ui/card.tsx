import React from 'react';

export default function Card() {
  const cardData = [
    {
      value: 10,
      label: 'Sent',
      icon: '/misc/tick.svg',
    },
    {
      value: 1,
      label: 'Open',
      icon: '/misc/double_tick.svg',
    },
    {
      value: 2,
      label: 'Read',
      icon: '/misc/read.svg',
    },
    {
      value: 2,
      label: 'Replied',
      icon: '/misc/replied.svg',
    },
    {
        value: 2,
        label: 'Processing',
        icon: '/misc/replied.svg',
      },
    {
        value: 2,
        label: 'Failed',
        icon: '/misc/replied.svg',
      },
  ];

  return (
    <>
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <h1 className="mb-4 font-bold text-2xl">Overview</h1>
          <div className="flex flex-wrap -m-4">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/4 p-4 relative"
              >
                <div className="p-6 rounded-xl border bg-gray-100">
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
    </>
  );
}
