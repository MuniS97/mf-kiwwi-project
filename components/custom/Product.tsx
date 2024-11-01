import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import Image from 'next/image';

interface Props {
    className?: string;
    translation: {
        id: number;
        title: string;
        description: string;
        image: string;
        button: string;
    };
}

export const Product: React.FC<Props> = ({ className, translation }) => {
    return (
        <div className={cn("w-full h-full p-20 md:p-10 flex flex-col justify-center items-center gap-5 text-white rounded-full bg-csemigray", className)}>
            <Image src={translation?.image} width={1000} height={1000} alt={`Perfume ${translation?.id}`} className='object-cover' />
            <h4 className='text-[1.5em] font-semibold'>{translation?.title || `Perfume ${translation?.id}`}</h4>
            <p className='text-base font-light text-clightgray'>{translation?.description || `High Quality Parfume ${translation?.id}`}</p>
            <Button variant={"outline"} className='shadow shadow-white bg-transparent text-white rounded-full py-7 px-10 hover:bg-cgold hover:text-black hover:border-cgold hover:shadow-cgold transition duration-300'>
                {translation?.button || "Discover More"}
            </Button>
        </div>
    );
};