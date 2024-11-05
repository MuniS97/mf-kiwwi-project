import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Headset, MoveRight, ThumbsUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Locale } from '@/i18n.config';
import Link from 'next/link';

interface Props {
    className?: string;
    lang?: Locale;
}

export const MainSubHero: React.FC<Props> = ({ className, lang }) => {
    return (
        <Container className={cn("w-full flex justify-between items-center flex-col md:flex-row gap-8 pt-10 pb-20", className)}>
            <div className='w-full md:max-w-[40%] flex flex-col justify-center items-center md:items-start md:text-left'>
                <h2 className='text-[4em] lg:text-[5em] font-bold text-transparent' style={{ WebkitTextStroke: '1px #f2c437' }}>Featured</h2>
                <h3 className='text-white text-[3em] font-semibold'>The Perfection</h3>
                <p className='text-clightgray text-base font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque iusto eligendi vitae saepe! Non odio commodi eligendi? Id in quo deleniti optio magnam earum consectetur dolorem praesentium, numquam recusandae molestias!</p>
            </div>
            <div className="w-full flex justify-center items-center flex-col md:flex-row gap-8">
                <div className="flex flex-col justify-center items-center gap-5 p-5 border border-clightgray/20 rounded-xl rounded-se-[35%] rounded-es-[35%] text-white w-full aspect-square max-w-[300px]">
                    <ThumbsUp width={70} height={70} />
                    <h4 className="text-[1.5em] font-semibold">Top Brand</h4>
                    <p className="text-clightgray text-base font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href={`/${lang}/about`}>
                        <Button
                            variant={"link"}
                            className="text-cgold hover:no-underline flex justify-center items-center hover:scale-105 hover:text-cgold/80 transition duration-200"
                        >
                            Learn More <MoveRight width={24} height={24} />
                        </Button>
                    </Link>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 p-5 border border-clightgold rounded-xl text-white w-full aspect-square max-w-[300px]">
                    <Headset width={70} height={70} />
                    <h4 className="text-[1.5em] font-semibold">24/7 Support</h4>
                    <p className="text-clightgray text-base font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href={`/${lang}/about`}>
                        <Button
                            variant={"link"}
                            className="text-cgold hover:no-underline flex justify-center items-center hover:scale-105 hover:text-cgold/80 transition duration-200"
                        >
                            Learn More <MoveRight width={24} height={24} />
                        </Button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};