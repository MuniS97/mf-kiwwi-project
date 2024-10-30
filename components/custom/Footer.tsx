"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Logo } from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
    const pathname = usePathname();

    return (
        <footer className='w-full h-full bg-cdarkgray bg-[url("/images/footerBg.webp")] bg-cover bg-center bg-no-repeat bg-blend-overlay py-20'>
            <Container className={cn(className)}>
                <div className='flex flex-col md:flex-row justify-between items-start gap-10'>
                    <div className='flex flex-col justify-center items-start gap-5'>
                        <Logo />
                        <p className='text-clightgray font-base text-left md:max-w-[60%]'>Discover the essence of elegance with mf_kiwwi, your go-to destination for exquisite perfumes in Uzbekistan. Our carefully curated collection embodies sophistication and individuality, designed to leave a lasting impression. </p>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-5'>
                        <h3 className='text-clightgray font-semibold'>Navigation</h3>
                        <ul className="flex flex-col justify-center items-start gap-2">
                            <Link href={"/"}>
                                <li className={cn('transition duration-300 font-medium text-base', pathname === '/' ? 'text-white' : 'text-cgold')}>
                                    Home
                                </li>
                            </Link>
                            <Link href={"/about"}>
                                <li className={cn('transition duration-300 font-medium text-base', pathname === '/about' ? 'text-white' : 'text-cgold')}>
                                    About Us
                                </li>
                            </Link>
                            <Link href={"/collection"}>
                                <li className={cn('transition duration-300 font-medium text-base', pathname === '/collection' ? 'text-white' : 'text-cgold')}>
                                    Collection
                                </li>
                            </Link>
                            <Link href={"/contact"}>
                                <li className={cn('transition duration-300 font-medium text-base', pathname === '/contact' ? 'text-white' : 'text-cgold')}>
                                    Contact Us
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div></div>
                <div></div>
            </Container>
        </footer>
    );
};