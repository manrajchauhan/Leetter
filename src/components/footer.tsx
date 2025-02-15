import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const footerLinks = [
    {
        title: 'Leetter',
        links: [
            { name: 'Contact', href: '/contact' },
            { name: 'Blog', href: '/blog' },
            { name: 'Our Story', href: '/about' }
        ]
    },
    {
        title: 'Resources',
        links: [
            { name: 'Careers', href: '/careers' }
        ]
    },
    {
        title: 'Know More',
        links: [
            { name: 'About', href: '/about' }
        ]
    }
];

const Footer = () => {
    return (
        <section className="px-8 md:px-24 pb-12 border-t rounded-t-3xl border-neutral-400 pt-10 mt-20 bg-neutral-900">
            <div className="flex flex-wrap -mx-4 mb-24">
                <div className="w-full xl:w-4/12 px-4 mb-12 xl:mb-0">
                    <Link className="inline-block" href="/">
                        <Image className="block h-10" src="/logo-white.svg" alt="Leetter logo" width={400} height={400} />
                    </Link>
                </div>

                {footerLinks.map((section, index) => (
                    <div
                        key={index}
                        className={`w-1/2 md:w-1/4 xl:w-2/12 px-4 mb-8 md:mb-0 ${index === 0 ? '' : 'xl:mb-0'}`}
                    >
                        <h5 className="text-xl font-bold text-green-600 tracking-tighter mb-4">{section.title}</h5>
                        <ul>
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="mb-2">
                                    <Link className="inline-block text-lg text-neutral-100" href={link.href}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap -mx-4 items-center relative">
                <div className="w-full px-4 mb-8 xl:mb-0">
                    <div className="md:flex items-center">
                        <div className="flex mb-6 md:mb-0 md:mr-12 items-center">
                            <span className="inline-block">
                                <img src="/misc/globe.svg" alt="globe" />
                            </span>
                            <span className="ml-1 text-neutral-100">English</span>
                        </div>
                        <span className="text-lg text-neutral-400">© Leetter 2025 By Solsn Technologies</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
