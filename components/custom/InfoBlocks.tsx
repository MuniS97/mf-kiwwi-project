import React from 'react';
import { Separator } from '../ui/separator';
import { Container } from './Container';

interface Props {
    block: {
        icon: React.ReactNode;
        title: string;
        description: string;
    }[],
    title: string;
    subtitle: string;
}

export const InfoBlocks: React.FC<Props> = ({ block, title, subtitle }) => {
    return (
        <Container className='flex flex-col justify-center items-center gap-20 py-10 md:py-20'>
            <div className='text-center flex flex-col justify-center items-center gap-5 px-4'>
                <h2 className='text-3xl md:text-[4em] lg:text-[5em] font-bold text-transparent leading-tight md:leading-[50px]' style={{ WebkitTextStroke: '1px #f2c437' }}>{title}</h2>
                <h3 className='text-white text-2xl md:text-[3em] leading-tight md:leading-[50px] font-semibold'>{subtitle}</h3>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center gap-8 px-4'>
                <div className='text-center flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-none'>
                    <div className='p-5 border border-cgold text-cgold rounded-se-[35%] rounded-es-[35%]'>
                        {block[0].icon}
                    </div>
                    <h4 className='text-lg md:text-[1.5em] font-bold text-white'>{block[0].title}</h4>
                    <p className='max-w-[80%] text-base text-clightgray px-2 md:px-0'>{block[0].description}</p>
                </div>

                <Separator orientation="vertical" className="w-full md:w-px md:h-full bg-clightgray/30 min-h-[1px] md:min-h-[200px] rotate-180 md:rotate-0 my-4 md:my-0" />

                <div className='text-center flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-none'>
                    <div className='p-5 border border-cgold text-cgold rounded-[35%]'>
                        {block[1].icon}
                    </div>
                    <h4 className='text-lg md:text-[1.5em] font-bold text-white'>{block[1].title}</h4>
                    <p className='max-w-[80%] text-base text-clightgray px-2 md:px-0'>{block[1].description}</p>
                </div>

                <Separator orientation="vertical" className="w-full md:w-px md:h-full bg-clightgray/30 min-h-[1px] md:min-h-[200px] rotate-180 md:rotate-0 my-4 md:my-0" />

                <div className='text-center flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-none'>
                    <div className='p-5 border border-cgold text-cgold rounded-ss-[35%] rounded-ee-[35%]'>
                        {block[2].icon}
                    </div>
                    <h4 className='text-lg md:text-[1.5em] font-bold text-white'>{block[2].title}</h4>
                    <p className='max-w-[80%] text-base text-clightgray px-2 md:px-0'>{block[2].description}</p>
                </div>
            </div>
        </Container>
    );
};