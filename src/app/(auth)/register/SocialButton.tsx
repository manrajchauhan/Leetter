import * as React from "react";
import { SocialButtonProps } from "./types";
import Link from "next/link";

export const SocialButton: React.FC<SocialButtonProps> = ({ icon, text, alt,siteURL }) => {
  return (
    <div className="flex overflow-hidden flex-col justify-between items-center w-full rounded-md border border-solid border-zinc-300 min-h-[33px]">
      <Link href={siteURL} className="flex overflow-hidden gap-1.5 justify-center items-center px-3 py-1.5 bg-white rounded-md min-h-[33px] w-full">
        <img
          loading="lazy"
          src={icon}
          alt={alt}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <h1 className="self-stretch my-auto">{text}</h1>
      </Link>
    </div>
  );
};
