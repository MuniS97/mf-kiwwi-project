"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";

interface Review {
    id: number,
    client: string,
    role: string,
    image: string,
    review: string
}

function CustomSwiper({ translation }: {
    translation: Review[]
}) {

    const plugin = React.useRef(
        Autoplay({ delay: 3500, stopOnInteraction: true })
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-[350px] sm:max-w-[600px]"
        >
            <CarouselContent className="flex gap-0 py-20 lg:mt-10">
                {translation.map((item: Review, idx: number) => {
                    return (
                        <CarouselItem key={idx}>
                            <div className='w-full h-full flex flex-col justify-center items-start gap-5 text-left p-10 rounded-ss-[100px] rounded-ee-[100px] bg-csemigray'>
                                <div className='flex justify-center items-center gap-1'>
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <Star key={item} className='text-cgold' width={24} height={24} />
                                    ))}
                                </div>
                                <p className='text-clightgray text-base font-light'>{item.review}</p>
                                <div className='flex justify-center items-center gap-5'>
                                    <Image src={item.image} width={200} height={200} alt={`Perfume ${item.id}`} className='object-cover rounded-full w-16 h-16' />
                                    <div className="flex flex-col justify-center items-start">
                                        <h4 className='text-white text-[1em] font-semibold'>{item.client}</h4>
                                        <p className='text-clightgray text-sm font-light'>{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
            {/* <CarouselPrevious className="top-0 left-[40%] lg:left-[80%] xl:left-[84%] lg:w-20 lg:h-20 h-10 w-10 bg-none! hover:text-white/80 hover:bg-none! text-white border-none" /> */}
            {/* <CarouselNext className="top-0 right-[40%] lg:right-0 xl:right-[5%] lg:w-20 lg:h-20 h-10 w-10 bg-none! hover:text-white/80 hover:bg-none! text-white border-none" /> */}
        </Carousel >
    );
}

export default CustomSwiper;
