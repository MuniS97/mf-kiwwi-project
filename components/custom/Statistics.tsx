"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Container } from './Container';

const Counter = ({ targetValue, plus }: { targetValue: number, plus?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const startCount = 0;
                        const duration = 1000;
                        const increment = targetValue / (duration / 16);
                        let currentCount = startCount;

                        const counterInterval = setInterval(() => {
                            currentCount += increment;
                            if (currentCount >= targetValue) {
                                setCount(targetValue);
                                clearInterval(counterInterval);
                            } else {
                                setCount(Math.ceil(currentCount));
                            }
                        }, 16);

                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [targetValue]);

    return (
        <span ref={ref} className='text-cgold text-[3em] font-bold'>
            {count}{plus}
        </span>
    );
};

export const Statistics = () => {
    return (
        <Container className='w-full flex justify-between items-center flex-wrap gap-8 p-20 pb-40'>
            <div className='max-md:w-full flex flex-col justify-center items-center'>
                <Counter targetValue={13} />
                <p className='text-lg text-clightgray'>Years of Experience</p>
            </div>
            <div className='max-md:w-full flex flex-col justify-center items-center'>
                <Counter targetValue={30} plus='+' />
                <p className='text-lg text-clightgray'>Variety of Perfumes</p>
            </div>
            <div className='max-md:w-full flex flex-col justify-center items-center'>
                <Counter targetValue={100} />
                <p className='text-lg text-clightgray'>Happy Customers</p>
            </div>
            <div className='max-md:w-full flex flex-col justify-center items-center'>
                <Counter targetValue={50} plus='+' />
                <p className='text-lg text-clightgray'>Reviews</p>
            </div>
        </Container>
    );
};
