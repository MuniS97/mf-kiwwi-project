import React from 'react';
import { Container } from '@/components/custom/Container';
import { MainAbout } from '@/components/custom/MainAbout';
import { MainSubHero } from '@/components/custom/MainSubHero';
import { Separator } from '@/components/ui/separator';
import { HandCoins, Handshake, Percent } from 'lucide-react';
import { Statistics } from '@/components/custom/Statistics';
import { SaleProduct } from '@/components/custom/SaleProduct';

const perfumes = [
    {
        id: 4,
        title: 'Perfume',
        subtitle: "sale",
        discount: 30,
        image: '/images/perfumes/perfume4.webp',
        button: 'Discover More'
    },
    {
        id: 5,
        title: 'Perfume',
        subtitle: "sale",
        discount: 15,
        image: '/images/perfumes/perfume5.webp',
        button: 'Discover More'
    }
]

const Page = () => {
    return (
        <div className="bg-cdarkgray">
            <section className="w-full h-full bg-[url('/images/testimonialsBg.webp')] bg-cover bg-center bg-no-repeat">
                <div className='w-full h-full bg-csemigray'>
                    <Container className='flex justify-between items-center gap-8 py-20'>
                        <h2 className='text-[5em] font-bold text-white'>About Us</h2>
                        <div className='max-w-[50%] flex flex-col justify-center items-center text-left gap-5'>
                            <p className='text-base text-clightgray'>At mf_kiwwi, we are more than just an online perfume shop in Tashkent—<span className='text-cgold'>we’re a partner in your journey to discover the scent that feels uniquely yours</span>. We understand that fragrance is deeply personal, with the power to evoke memories, enhance confidence, and reflect your true self. That’s why we’re dedicated to offering a carefully selected range of <span className='text-cgold'>high-quality perfumes</span> that speak to every style and personality. Our team is passionate about guiding you through the process, helping you find that perfect fragrance that makes you feel complete. When you shop with mf_kiwwi, you’re not just buying a product; you’re joining a community that values <span className='text-cgold'>authenticity, quality, and a personalized</span> experience. Let us help you express your individuality through the art of scent—experience the difference with mf_kiwwi.</p>
                        </div>
                    </Container>
                </div>
            </section>
            <MainSubHero className='py-20' />
            <Statistics />
            <MainAbout />
            <section className='flex flex-col justify-center items-center gap-10 py-10 md:py-20'>
                <div className='text-center flex flex-col justify-center items-center gap-5 px-4'>
                    <h2 className='text-3xl md:text-[4em] lg:text-[5em] font-bold text-transparent leading-tight md:leading-[50px]' style={{ WebkitTextStroke: '1px #f2c437' }}>About</h2>
                    <h3 className='text-white text-2xl md:text-[3em] leading-tight md:leading-[50px] font-semibold'>Perks & Benefits</h3>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center gap-8 px-4'>
                    <div className='text-center flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-none'>
                        <div className='p-5 border border-cgold rounded-se-[35%] rounded-es-[35%]'>
                            <Handshake className='text-cgold' width={40} height={40} />
                        </div>
                        <h4 className='text-lg md:text-[1.5em] font-bold text-white'>Quick Payment</h4>
                        <p className='max-w-[80%] text-base text-clightgray px-2 md:px-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, assumenda!</p>
                    </div>

                    <Separator orientation="vertical" className="w-full md:w-px md:h-full bg-clightgray/30 min-h-[1px] md:min-h-[200px] rotate-180 md:rotate-0 my-4 md:my-0" />

                    <div className='text-center flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-none'>
                        <div className='p-5 border border-cgold rounded-[35%]'>
                            <HandCoins className='text-cgold' width={40} height={40} />
                        </div>
                        <h4 className='text-lg md:text-[1.5em] font-bold text-white'>Affordable Prices</h4>
                        <p className='max-w-[80%] text-base text-clightgray px-2 md:px-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, blanditiis!</p>
                    </div>

                    <Separator orientation="vertical" className="w-full md:w-px md:h-full bg-clightgray/30 min-h-[1px] md:min-h-[200px] rotate-180 md:rotate-0 my-4 md:my-0" />

                    <div className='text-center flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-none'>
                        <div className='p-5 border border-cgold rounded-ss-[35%] rounded-ee-[35%]'>
                            <Percent className='text-cgold' width={40} height={40} />
                        </div>
                        <h4 className='text-lg md:text-[1.5em] font-bold text-white'>Big Deals</h4>
                        <p className='max-w-[80%] text-base text-clightgray px-2 md:px-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, atque!</p>
                    </div>
                </div>
            </section>
            <Container className='w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 py-28'>
                {perfumes.map(perfume => <SaleProduct key={perfume.id} translation={perfume} />)}
            </Container>
        </div>
    );
};

export default Page;