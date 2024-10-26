'use client';

import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
    path: string;
    text: string;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({ path, text }) => {

    const currentPath = usePathname();
    const isActive = path === currentPath

    return (
        <Link href={path} className={`${styles["nav-link"]} ${isActive ? styles["nav-link-active"] : ""}`}>
            {text}
        </Link>
    );
};
