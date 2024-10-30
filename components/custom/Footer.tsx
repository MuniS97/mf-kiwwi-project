"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Logo } from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Instagram, MapPin, MousePointer2, Phone, Youtube } from 'lucide-react';
import { Separator } from '../ui/separator';

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
                        <h3 className='text-white font-semibold'>Navigation</h3>
                        <ul className="flex flex-col justify-center items-start gap-2">
                            <Link href={"/"}>
                                <li className={cn('transition duration-300 font-medium text-base', pathname === '/' ? 'text-clightgray' : 'text-cgold')}>
                                    Home
                                </li>
                            </Link>
                            <Link href={"/about"}>
                                <li className={cn('transition duration-300 font-medium text-base', pathname === '/about' ? 'text-clightgray' : 'text-cgold')}>
                                    About Us
                                </li>
                            </Link>
                            <Link href={"/collection"}>
                                <li className={cn('transition duration-300 font-medium text-base', pathname === '/collection' ? 'text-clightgray' : 'text-cgold')}>
                                    Collection
                                </li>
                            </Link>
                            <Link href={"/contact"}>
                                <li className={cn('transition duration-300 font-medium text-base', pathname === '/contact' ? 'text-clightgray' : 'text-cgold')}>
                                    Contact Us
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-10 flex-wrap mt-10'>
                    <Link target='_blank' href={"https://maps.app.goo.gl/oA3MxT2YKN7eXKEYA"}>
                        <div className='flex justify-center items-start gap-2 text-white'>
                            <MapPin width={24} height={24} className='text-cgold' />
                            <p className='text-lg font-semibold'>Tashkent, Uzbekistan</p>
                        </div>
                    </Link>
                    <div className='flex justify-center items-start gap-2 text-white'>
                        <Phone width={24} height={24} className='text-cgold' />
                        <a target='_blank' href='tel:+998886687707' className='text-lg font-semibold'>+998 88 668 77 07</a>
                    </div>
                    <div className='flex justify-center items-start gap-2 text-white'>
                        <Phone width={24} height={24} className='text-cgold' />
                        <a target='_blank' href='mailto:test@gmail.com' className='text-lg font-semibold'>test@gmail.com</a>
                    </div>
                    <div className='flex justify-center items-start gap-2 text-white'>
                        <Link target='_blank' href={"/"}>
                            <div className='p-2 rounded-full border border-clightgold'>
                                <Instagram width={24} height={24} className='text-cgold' />
                            </div>
                        </Link>
                        <Link target='_blank' href={"/"}>
                            <div className='p-2 rounded-full border border-clightgold'>
                                <Youtube width={24} height={24} className='text-cgold' />
                            </div>
                        </Link>
                        <Link target='_blank' href={"/"}>
                            <div className='p-2 rounded-full border border-clightgold'>
                                <MousePointer2 width={24} height={24} className='text-cgold rotate-90' />
                            </div>
                        </Link>
                    </div>
                </div>
                <Separator className='my-10 bg-clightgold' />
                <div>
                    <p className='text-clightgray font-base text-center'>© 2023 mf_kiwwi • All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};