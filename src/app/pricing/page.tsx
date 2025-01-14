"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useState } from "react";

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  const plans = [
    {
      name: "Starter",
      monthlyPrice: "₹1,499",
      yearlyPrice: "₹14,999",
      description: "Perfect for individuals or small teams getting started.",
      features: [
        "Unlimited contacts",
        "10 agents included",
        "Basic analytics",
        "Email support",
      ],
    },
    {
      name: "Professional",
      monthlyPrice: "₹3,999",
      yearlyPrice: "₹39,999",
      description: "For growing businesses looking for advanced tools.",
      features: [
        "Unlimited contacts",
        "25 agents included",
        "Advanced analytics",
        "Priority email support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: "₹7,999",
      yearlyPrice: "₹79,999",
      description: "Custom solutions for large organizations.",
      features: [
        "Unlimited contacts",
        "Unlimited agents",
        "Custom analytics & reports",
        "Dedicated account manager",
      ],
    },
  ];


  return (
    <>
      <Header />
      <section className="py-24 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="mb-20 md:max-w-2xl text-center mx-auto">
            <span className="inline-block mb-4 text-3xl text-green-400 font-medium tracking-tighter">
              Get great features at a price that makes sense
            </span>
            <h2 className="font-heading mb-8 text-6xl lg:text-6xl text-black tracking-tighter">
              Affordable pricing with zero setup fees
            </h2>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="relative p-1 max-w-max mx-auto border rounded-full cursor-pointer"
            >
              <div className="flex items-center">
                <div
                  className={`py-5 px-9 text-center font-medium rounded-full transition-all duration-200 ${
                    isMonthly ? "bg-green-300 text-black" : "text-neutral-600"
                  }`}
                >
                  Monthly billing
                </div>
                <div
                  className={`py-3.5 px-9 text-center rounded-full flex items-center justify-center transition-all duration-200 ${
                    !isMonthly ? "bg-green-300" : "bg-transparent"
                  }`}
                >
                  <p
                    className={`mr-2.5 font-medium ${
                      !isMonthly ? "text-black" : "text-neutral-600"
                    }`}
                  >
                    Annual billing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 p-4"
              >
                <div
                  className={`relative px-8 pt-12 pb-12 h-full bg-neutral-900 border-2 border-gray-900 border-opacity-30 rounded-3xl ${
                    plan.popular ? "shadow-2xl scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4 px-3 py-1.5 text-xs font-medium text-white bg-green-500 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <p className="mb-2 text-lg text-white font-light">{plan.name}</p>
                  <p className="mb-6 text-gray-300">{plan.description}</p>
                  <p className="mb-4 text-white font-medium text-5xl">
                    {isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                    <span className="text-base font-medium text-gray-300">
                      {isMonthly ? " / month" : " / year"}
                    </span>
                  </p>
                  <p className="mb-6 text-xs text-gray-300 font-light uppercase">
                    What's included
                  </p>
                  <ul className="mb-10 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center"
                      >
                        <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-white">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <a
                    className="relative z-10 block px-14 py-4 text-center font-medium tracking-wide border-2 border-green-400 bg-green-400 hover:bg-green-500 text-black rounded-full transition duration-300"
                    href="#"
                  >
                    Get started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<Footer/>
    </>
  );
}
