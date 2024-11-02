import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import CustomSwiper from './CustomSwiper';

interface Props {
    className?: string;
}

const testimonials = [
    {
        id: 1,
        client: 'John Doe',
        role: 'CEO, Doe Inc.',
        image: '/images/testimonial1.webp',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae illo. Consequatur, quod.',
    },
    {
        id: 2,
        client: 'Jane Doe',
        role: 'Marketing Manager, Doe Inc.',
        image: '/images/testimonial2.webp',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, molestiae.',
    },
    {
        id: 3,
        client: 'Bob Smith',
        role: 'Software Engineer, Doe Inc.',
        image: '/images/testimonial3.webp',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae illo. Consequatur, quod.',
    },
]

export const MainTestimonials: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("w-full h-full bg-[url('/images/testimonialsBg.webp')] bg-cover bg-center bg-no-repeat", className)}>
            <div className='py-20 flex justify-end items-end bg-cgray/70'>
                <Container className='flex flex-col md:flex-row justify-center items-center gap-8'>
                    <div className='md:max-w-[40%] md:text-left'>
                        <h2 className='text-[4em] lg:text-[5em] font-bold text-transparent leading-[80px]' style={{ WebkitTextStroke: '1px #f2c437' }}>Feedback</h2>
                        <h3 className='text-white text-[3em] leading-[50px] font-semibold'>Our Testimonials</h3>
                    </div>
                    <div className='md:max-w-[60%]'>
                        <CustomSwiper translation={testimonials} />
                    </div>
                </Container>
            </div>
        </div>
    );
};