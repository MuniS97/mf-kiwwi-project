import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Product } from './Product';

interface Props {
    className?: string;
}

const perfumes = [
    {
        id: 1,
        title: 'Cool Winters',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, odit?',
        image: '/images/perfumes/perfume1.webp',
        button: 'Discover More'
    },
    {
        id: 2,
        title: 'Eu De Rose',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, praesentium?',
        image: '/images/perfumes/perfume2.webp',
        button: 'Discover More'
    },
    {
        id: 3,
        title: 'Warm Sakura',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, debitis.',
        image: '/images/perfumes/perfume3.webp',
        button: 'Discover More'
    },
];

export const Products: React.FC<Props> = ({ className }) => {
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