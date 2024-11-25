"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { OverlayImages } from './OverlayImages';
import { Play } from 'lucide-react';
import Link from 'next/link';
import { Locale } from '@/i18n.config';
import axios from 'axios';

interface Props {
    className?: string;
    lang?: Locale;
}

export const MainHero: React.FC<Props> = ({ className, lang }) => {
    // const postMethod = () => {
    //     axios.post('http://localhost:3000/api/perfumes', {}).then(res => {
    //         console.log(res)
    //     })
    // }

    const patchMethod = () => {
        axios.patch('http://localhost:3000/api/perfumes?id=67348af4581f72fa3b628670', { price: 100 })
            .then(res => {
                console.log(res);
            })
    };


    // const deleteMethod = () => {
    //     axios.delete('http://localhost:3000/api/perfumes?id=6735b026d4f5b6968fef9c0c').then(res => {
    //         console.log(res)
    //     })
    // }


    return (
        <div className={cn("relative flex justify-center items-center py-20", className)}>
            <OverlayImages />
            <div className="w-full h-full absolute text-center z-10 bg-cdarkgray/70 flex flex-col justify-center items-center gap-20">
                <h1 className="text-white text-[4em] md:text-[6em] leading-none font-bold">Find a Signature <br /> Scent you Love</h1>
                <div className='flex justify-center items-center gap-10'>
                    <Link href={`/${lang}/about`}>
                        <button className="transition duration-300 bg-none border border-white text-white hover:border-cgold hover:bg-cgold hover:text-black font-medium py-5 px-10 rounded-full hover:shadow-cgold shadow shadow-white">
                            Learn More
                        </button>
                    </Link>
                    <button onClick={patchMethod} className='group w-[70px] h-[70px] bg-cgold hover:bg-cgray transition duration-300 rounded-full flex justify-center items-center shadow shadow-cgold hover:shadow-cgray'>
                        <Play width={24} height={24} className='text-cgray group-hover:text-cgold' />
                    </button>
                </div>
            </div>
        </div>
    );
}