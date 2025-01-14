import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <section className="px-8 md:px-24 pb-12 border-t rounded-t-3xl border-neutral-400 pt-10 mt-20 bg-neutral-900">
                <div className="flex flex-wrap -mx-4 mb-24 ">
                    <div className="w-full xl:w-4/12 px-4 mb-12 xl:mb-0 ">
                        <Link className="inline-block" href="/">
                            <Image className="block h-10" src="/logo-white.svg" alt="" width={400} height={400}/>
                        </Link>
                    </div>
                    <div className="w-1/2 md:w-1/4 xl:w-2/12 px-4 mb-8 md:mb-0">
                        <h5 className="text-xl font-bold text-green-600 tracking-tighter mb-4">Leetter</h5>
                        <ul>
                            <li className="mb-2"><a className="inline-block text-lg text-neutral-100" href="/contact">Contact</a></li>
                            <li className="mb-2"><a className="inline-block text-lg text-neutral-100" href="/blog">Blog</a></li>
                            <li className="mb-2"><a className="inline-block text-lg text-neutral-100" href="/about">Our Story</a></li>
                        </ul>
                    </div>
                    <div className="w-1/2 md:w-1/4 xl:w-2/12 px-4 mb-8 md:mb-0">
                        <h5 className="text-xl font-bold text-green-600 tracking-tighter mb-4">Resources</h5>
                        <ul>
                        <li>
                                <a className="inline-block text-lg text-neutral-100" href="/careers">
                                    <span className="mr-2">Careers</span>
                                    {/* <span className="inline-block px-2 py-1 text-xs bg-blue-500 text-neutral-100 uppercase rounded-full">Hiring</span> */}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/2 md:w-1/4 xl:w-2/12 px-4">
                        <h5 className="text-xl font-bold text-green-600 tracking-tighter mb-4">Know More</h5>
                        <ul>
                        <li>
                                <a className="inline-block text-lg text-neutral-100" href="/about">
                                    <span className="mr-2">About</span>

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4 items-center relative">
                    <div className="w-full xl:w-4/12 px-4 mb-8 xl:mb-0">
                        <div className="md:flex items-center justify-between">
                            <div className="flex mb-6 md:mb-0 md:mr-12 items-center">
                                <span className="inline-block">
                                    <img src="/misc/globe.svg" alt="globe" />
                                </span>
                                <span className='ml-1 text-neutral-100'>English</span>
                            </div>
                            <div className="-mb-2">
                                <a className="inline-block text-sm mb-2 mr-12 text-neutral-400" href="#">Terms of Use</a>
<a className="inline-block text-sm mb-2 text-neutral-400 hover:text-neutral-100" href="#">Privacy Policy</a>
</div>
</div>
</div>
<div className=" md:block md:w-1/2 xl:w-4/12 px-4 xl:text-center mb-8 md:mb-0">
                        <span className="text-sm text-neutral-400">© Leetter 2025 By Solsn Technologies </span>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-4/12 px-4">
                        <div className="flex flex-col xs:flex-row -mb-3 xs:items-center md:justify-end">
                        <span className="text-sm text-neutral-400">© Leetter 2025 By Solsn Technologies </span>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Footer;
