import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Product } from './Product';

interface Props {
    className?: string;
    perfumes: {
        id: number;
        title: string;
        description: string;
        image: string;
        button: string;
    }[]
}


export const Products: React.FC<Props> = ({ className, perfumes }) => {
    return (
        <Container className={cn("w-ful h-hull pb-20", className)}>
            <h2 className='text-[4em] lg:text-[5em] font-bold text-transparent leading-[50px]' style={{ WebkitTextStroke: '1px #f2c437' }}>Perfume</h2>
            <h3 className='text-white text-[3em] font-semibold'>Create Your Signature</h3>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-stretch gap-8 mt-10'>
                {perfumes.map((perfume) => (
                    <Product key={perfume.id} translation={perfume} />
                ))}
            </div>
        </Container>
    );
};