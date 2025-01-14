"use client"
import Link from "next/link";
import { InputField } from "./InputField";
import { SocialButton } from "./SocialButton";

export default function Register() {

    const ListFeatures ={
        f1:"Targeted Campaigns to deliver personalized offers",
        f2:"Pre-built templates to send updates & reminders",
        f3:"24x7 instant engagement with no-code chatbots",
        f4:"Powerful automations to resolve issues faster",
        }


    const socialButtons = [
      {
        icon: "/google.svg",
        links: "https//:accounts.google.com",
        text: "Sign in with Google",
        alt: "Google logo"
      }
    ];

    return (
    <div className="font-[family-name:var(--font-geist-sans)]">
        <Link href={"/"}>
        <img
    src="logo.svg"
    width={200}
    height={200}
    className="pt-10 pl-10"
    />
    </Link>
<div className="flex flex-row gap-[16.5rem] row-start-2 px-32">
<div className="left px-20 py-32">
    <div className="flex gap-0 justify-center items-center">
        <form className="flex flex-col justify-center w-full">
          <div className="flex flex-col w-full text-xs font-medium">
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full">
                <h1 className="text-lg text-neutral-900">Sign Up into Solsn Identity</h1>
                <div className="flex gap-10">
                <InputField
                  label="Name"
                  type="text"
                //   value="manrajchauhan2023@gmail.com"
                  required
                />
                  <InputField
                  label="Surname"
                  type="text"
                //   value="manrajchauhan2023@gmail.com"
                  required
                />
                </div>
                <InputField
                  label="Business Email"
                  type="email"
                //   value="manrajchauhan2023@gmail.com"
                  required
                />
                <InputField
                  label="Password"
                  type="password"
                //   value="*********"
                  required
                />
                  <InputField
                  label="Mobile"
                  type="number"
                //   value="*********"
                  required
                />
              </div>
            </div>
            <button type="submit" className="overflow-hidden gap-1.5 self-stretch px-3 py-2.5 mt-6 w-full text-center text-white rounded-md bg-neutral-900 min-h-[32px] shadow-[0px_1px_2px_rgba(22,17,17,0.24)]">
              Sign in
            </button>
          </div>

          <div className="flex gap-2.5 items-center mt-4 w-full text-xs font-medium text-center whitespace-nowrap text-neutral-900">
            <img
              loading="lazy"
              src="/line.svg"
              alt=""
              className="object-contain flex-1 shrink self-stretch my-auto basis-0"
            />
            <div className="self-stretch my-auto">OR</div>
            <img
              loading="lazy"
            src="/line.svg"
              alt=""
              className="object-contain flex-1 shrink self-stretch my-auto basis-0"
            />
          </div>

          <div className="flex flex-col mt-4 w-full text-xs font-medium text-center text-gray-700 gap-3">
            {socialButtons.map((button, index) => (
              <SocialButton
                key={index}
                icon={button.icon}
                text={button.text}
                siteURL={button.links}
                alt={button.alt}
              />
            ))}
          </div>

          <div className="flex gap-0.5 items-center self-start mt-4 text-xs text-center">
            <span className="self-stretch my-auto font-medium text-neutral-900">
              Dont have an account?{" "}
            </span>
            <Link href={"login"} className="self-stretch my-auto font-bold text-neutral-900">
             Login
            </Link>
          </div>
        </form>
    </div>
</div>
<div className="right">
    <div className="flex overflow-hidden flex-col  rounded-md  max-md:px-5 max-md:py-10">
      <div className="self-start text-5xl font-medium tracking-tighter max-md:max-w-full max-md:text-4xl">
      Start Your Journey with Powerful WhatsApp Marketing Tools.
      </div>
      <div className="flex gap-6 items-center mt-10 max-md:mt-10 max-md:max-w-full">
      <ul className="list-disc">
  {Object.values(ListFeatures).map((feature, index) => (
    <li key={index} className="py-2">
      {feature}
    </li>
  ))}
</ul>

      </div>
    </div>
</div>
</div>
    </div>
  )
}
