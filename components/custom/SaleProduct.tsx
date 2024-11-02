import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';

interface Props {
    className?: string;
    translation: {
        id: number;
        title: string;
        subtitle: string;
        discount: number;
        image: string;
        button: string;
    }
}

export const SaleProduct: React.FC<Props> = ({ className, translation }) => {
    return (
        <div className={cn("rounded-3xl w-full h-full bg-[url('/images/saleBg.webp')] bg-cover bg-center bg-no-repeat]", className)}>
            <div className='rounded-3xl w-full h-full bg-csemigray flex flex-col sm:flex-row justify-between items-center gap-5 p-10 md:p-5 lg:p-10'>
                <Image src={translation?.image} width={200} height={200} alt={`Perfume ${translation?.id}`} className='w-[50%] lg:w-full lg:h-full object-cover' />
                <div className='flex flex-col justify-center items-center sm:items-start sm:text-left gap-2'>
                    <h4 className='text-white text-[2em] font-bold'>{translation?.title}</h4>
                    <span className='uppercase text-[4em] md:text-[3em] lg:text-[5em] font-bold text-transparent leading-[50px]' style={{ WebkitTextStroke: '1px #f2c437' }}>{translation?.subtitle}</span>
                    <p className='text-white text-[3em] font-bold'>{translation?.discount}%</p>
                    <Button
                        variant={"link"}
                        className="text-cgold hover:no-underline flex justify-center items-center hover:scale-105 hover:text-cgold/80 transition duration-200 p-0"
                    >
                        Learn More <MoveRight width={24} height={24} />
                    </Button>
                </div>
            </div>
        </div>
    );
};