"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';

interface Props {
    className?: string;
    translation: object
}

export const NavBar: React.FC<Props> = ({ className }) => {
    const pathname = usePathname();

    return (
        <div className={cn(className)}>
            <ul className="hidden md:flex justify-center items-center gap-8">
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
            <Sheet>
                <SheetTrigger asChild>
                    <Menu className="block md:hidden" width={24} height={24} color='white' />
                </SheetTrigger>
                <SheetContent className='bg-cgray'>
                    <SheetHeader>
                        <SheetTitle className='text-white text-2xl'>Menu</SheetTitle>
                        <SheetDescription className='text-clightgray'>Quick link</SheetDescription>
                    </SheetHeader>
                    <ul className="flex justify-center items-start flex-col gap-4 mt-10">
                        <SheetClose asChild>
                            <Link href={"/"}>
                                <li className={cn('transition duration-300 font-medium text-lg', pathname === '/' ? 'text-white' : 'text-cgold')}>
                                    Home
                                </li>
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href={"/about"}>
                                <li className={cn('transition duration-300 font-medium text-lg', pathname === '/about' ? 'text-white' : 'text-cgold')}>
                                    About Us
                                </li>
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href={"/collection"}>
                                <li className={cn('transition duration-300 font-medium text-lg', pathname === '/collection' ? 'text-white' : 'text-cgold')}>
                                    Collection
                                </li>
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href={"/contact"}>
                                <li className={cn('transition duration-300 font-medium text-lg', pathname === '/contact' ? 'text-white' : 'text-cgold')}>
                                    Contact Us
                                </li>
                            </Link>
                        </SheetClose>
                    </ul>
                </SheetContent>
            </Sheet>
        </div>
    );
};
