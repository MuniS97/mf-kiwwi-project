import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Locale } from '@/i18n.config';
import Link from 'next/link';

interface Props {
    className?: string;
    lang?: Locale
}

export const MainOurProducts: React.FC<Props> = ({ className, lang }) => {
    return (
        <Container className={cn("flex flex-col justify-center items-center gap-5 py-36", className)}>
            <h2 className='text-[4em] lg:text-[5em] font-bold text-transparent leading-[50px]' style={{ WebkitTextStroke: '1px #f2c437' }}>Perfume</h2>
            <h3 className='text-white text-[3em] font-semibold'>Create Your Signature</h3>
            <div className="flex flex-col md:flex-row justify-center items-stretch rounded-ss-[100px] rounded-ee-[100px] md:h-[500px] h-auto">
                <Image
                    width={500}
                    height={500}
                    src="/images/mainOurParfumes1.webp"
                    alt="Our Products"
                    className="w-full md:w-1/3 h-[300px] md:h-full object-cover rounded-ss-[100px]"
                />

                <div className="w-full md:w-1/3 bg-csemigray p-8 flex flex-col justify-center items-center md:items-start md:text-left">
                    <h2 className="text-3xl font-bold mb-4 text-white">Our <br /> Product</h2>
                    <p className="text-base font-light mb-6 text-clightgray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea.
                    </p>
                    <Link href={`/${lang}/collection`}>
                        <Button variant={"outline"} className='shadow shadow-white bg-transparent text-white rounded-full py-7 px-10 hover:bg-cgold hover:text-black hover:border-cgold hover:shadow-cgold transition duration-300'>
                            Learn More
                        </Button>
                    </Link>
                </div>

                <div className="w-full md:w-1/3 relative bg-cover bg-center rounded-ee-[100px] overflow-hidden h-[300px] md:h-full">
                    <Image
                        width={500}
                        height={500}
                        src="/images/mainOurParfumes2.webp"
                        alt="Sunset Lime"
                        className="w-full h-full object-cover rounded-ee-[100px]"
                    />
                    <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-center md:text-left">
                        <h3 className="text-2xl font-semibold mb-4 text-white">Sunset Lime</h3>
                        <p className="md:max-w-[70%] text-base font-light mb-4 text-clightgray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ul className="space-y-2 text-cgold">
                            <li>✔ sed quia non numquam</li>
                            <li>✔ modi tempora incidunt</li>
                            <li>✔ nostrum exercitationem</li>
                            <li>✔ vel illum qui dolorem</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    );
};