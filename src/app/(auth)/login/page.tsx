"use client"
import Link from "next/link";
import { InputField } from "./InputField";
import { SocialButton } from "./SocialButton";

export default function Login() {

    const socialButtons = [
      {
        icon: "/google.svg",
        links: "https//:accounts.google.com",
        text: "Sign in with Google",
        alt: "Google logo"
      }
    ];

    return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
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
                <h1 className="text-lg text-neutral-900">Sign into Solsn Identity</h1>
                <InputField
                  label="Email"
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
            <Link href={"register"} className="self-stretch my-auto font-bold text-neutral-900">
              Create one
            </Link>
          </div>
        </form>
    </div>
</div>
<div className="right">
    <div className="flex overflow-hidden flex-col  rounded-md  max-md:px-5 max-md:py-18">
      <div className="self-start text-5xl font-semibold tracking-tighter max-md:max-w-full max-md:text-4xl">
        Empower Your Business with Seamless WhatsApp Marketing.
      </div>
      <div className="flex gap-6 items-center self-center mt-10 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="/screens/screen-1.png"
          className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-[0.49] w-[219px]"
        />
        <img
          loading="lazy"
         src="/screens/screen-2.png"
          className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-[0.49] w-[219px]"
        />
      </div>
    </div>
</div>
</div>
    </div>
  )
}
