import React from 'react';
import { Container } from '@/components/custom/Container';
import { MainAbout } from '@/components/custom/MainAbout';
import { MainSubHero } from '@/components/custom/MainSubHero';

const Page = () => {
    return (
        <div className="bg-cdarkgray">
            <div className="w-full h-full bg-[url('/images/testimonialsBg.webp')] bg-cover bg-center bg-no-repeat">
                <div className='w-full h-full bg-csemigray'>
                    <Container className='flex justify-between items-center gap-8 py-20'>
                        <h2 className='text-[5em] font-bold text-white'>About Us</h2>
                        <div className='max-w-[50%] flex flex-col justify-center items-center text-left gap-5'>
                            <p className='text-base text-clightgray'>At mf_kiwwi, we are more than just an online perfume shop in Tashkent—<span className='text-cgold'>we’re a partner in your journey to discover the scent that feels uniquely yours</span>. We understand that fragrance is deeply personal, with the power to evoke memories, enhance confidence, and reflect your true self. That’s why we’re dedicated to offering a carefully selected range of <span className='text-cgold'>high-quality perfumes</span> that speak to every style and personality. Our team is passionate about guiding you through the process, helping you find that perfect fragrance that makes you feel complete. When you shop with mf_kiwwi, you’re not just buying a product; you’re joining a community that values <span className='text-cgold'>authenticity, quality, and a personalized</span> experience. Let us help you express your individuality through the art of scent—experience the difference with mf_kiwwi.</p>
                        </div>
                    </Container>
                </div>
            </div>
            <MainSubHero className='py-20' />
            <section className='w-full flex justify-between items-center flex-wrap gap-8 p-20'>
                <div className='max-md:w-full flex flex-col justify-center items-center'>
                    <span className='text-cgold text-[3em] font-bold'>13</span>
                    <p className='text-lg text-clightgray'>Years of Experience</p>
                </div>
                <div className='max-md:w-full flex flex-col justify-center items-center'>
                    <span className='text-cgold text-[3em] font-bold'>30+</span>
                    <p className='text-lg text-clightgray'>Variety of Perfumes</p>
                </div>
                <div className='max-md:w-full flex flex-col justify-center items-center'>
                    <span className='text-cgold text-[3em] font-bold'>100+</span>
                    <p className='text-lg text-clightgray'>Happy Customers</p>
                </div>
                <div className='max-md:w-full flex flex-col justify-center items-center'>
                    <span className='text-cgold text-[3em] font-bold'>50+</span>
                    <p className='text-lg text-clightgray'>Reviews</p>
                </div>
            </section>
            <MainAbout />
        </div>
    );
};

export default Page;