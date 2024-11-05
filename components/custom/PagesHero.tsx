import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface Props {
    className?: string;
    description?: string;
    title: string;
}

export const PagesHero: React.FC<Props> = ({ className, title, description }) => {
    return (
        <section className={cn("w-full h-full bg-[url('/images/testimonialsBg.webp')] bg-cover bg-center bg-no-repeat", className)}>
            <div className='w-full h-full bg-csemigray'>
                <Container className={cn(description ? 'flex flex-col md:flex-row justify-between items-center gap-8 py-40' : " py-40")}>
                    <h2 className='text-[4em] md:text-[5em] font-bold text-white'>{title}</h2>
                    <div className='md:max-w-[50%] flex flex-col justify-center items-center text-left gap-5'>
                        <p className='text-base text-clightgray'>{description}</p>
                    </div>
                </Container>
            </div>
        </section>
    );
};