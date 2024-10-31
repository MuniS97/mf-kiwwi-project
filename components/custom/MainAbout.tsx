import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Container } from './Container';

interface Props {
    className?: string;
}

export const MainAbout: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("w-full h-full bg-[url('/images/mainAboutBg.webp')] bg-cover bg-no-repeat bg-center", className)}>
            <div className='py-20 px-10 flex justify-end items-end pr-[5%] bg-cgray/70'>
                <Container className='flex justify-end'>
                    <div className='w-full md:max-w-[40%] flex flex-col justify-start items-center md:items-start md:text-left gap-5'>
                        <h2 className='text-[4em] lg:text-[5em] font-bold text-transparent leading-[50px]' style={{ WebkitTextStroke: '1px #f2c437' }}>About</h2>
                        <h3 className='text-white text-[3em] leading-[50px] font-semibold'>The New Fresh <br /> Sensation</h3>
                        <p className='text-clightgray text-base font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quo? Quam optio reprehenderit ducimus non? Illo, quos odio! Eius veritatis perspiciatis assumenda perferendis nihil exercitationem alias quas quasi dolor dolorum!</p>
                        <Button variant={"outline"} className='shadow shadow-white bg-transparent text-white rounded-full py-7 px-10 hover:bg-cgold hover:text-black hover:border-cgold hover:shadow-cgold transition duration-300'>Learn More</Button>
                    </div>
                </Container>
            </div>
        </div>
    );
};