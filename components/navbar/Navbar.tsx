import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import React from 'react';
import { ActiveLink } from './ActiveLink';

const links = [
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
];

export const Navbar = () => {
    console.log('Navbar');
    return (
        <nav className="flex bg-blue-800 m-3 rounded-xl bg-opacity-50 p-4">
            <Link href="/" className="text-white hover:text-gray-400 items-center">
                <HomeIcon className='mr-2' />
                <span>Home</span>
            </Link>
            <div className='flex-1'>
            </div>

            <ul className="flex">
                {links.map(({ href, label }) => (
                    <li key={href}>
                        <ActiveLink path={href} text={label} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};