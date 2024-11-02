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
    };
}

export const SaleProduct: React.FC<Props> = ({ className, translation }) => {
    return (
        <div className={cn("rounded-3xl w-full h-full bg-[url('/images/saleBg.webp')] bg-cover bg-center bg-no-repeat", className)}>
            <div className="rounded-3xl w-full h-full bg-csemigray flex flex-col lg:flex-row justify-between items-center gap-5 p-6 md:p-8 lg:p-10">
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <Image
                        src={translation?.image}
                        width={200}
                        height={200}
                        alt={`Perfume ${translation?.id}`}
                        className="w-full max-w-[150px] sm:max-w-[200px] lg:max-w-[250px] object-cover"
                    />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-2 text-center lg:text-left">
                    <h4 className="text-white text-2xl md:text-3xl font-bold">{translation?.title}</h4>
                    <span
                        className="uppercase text-3xl md:text-4xl lg:text-5xl font-bold text-transparent leading-[1] md:leading-[1.2] lg:leading-[1.2]"
                        style={{ WebkitTextStroke: '1px #f2c437' }}
                    >
                        {translation?.subtitle}
                    </span>
                    <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">{translation?.discount}%</p>
                    <Button
                        variant={"link"}
                        className="text-cgold hover:no-underline flex justify-center items-center hover:scale-105 hover:text-cgold/80 transition duration-200 p-0"
                    >
                        {translation?.button} <MoveRight width={24} height={24} />
                    </Button>
                </div>
            </div>
        </div>
    );
};
