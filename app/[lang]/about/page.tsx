import React from 'react';
import { Container } from '@/components/custom/Container';
import { MainAbout } from '@/components/custom/MainAbout';
import { MainSubHero } from '@/components/custom/MainSubHero';
import { HandCoins, Handshake, Percent } from 'lucide-react';
import { Statistics } from '@/components/custom/Statistics';
import { SaleProduct } from '@/components/custom/SaleProduct';
import { PagesHero } from '@/components/custom/PagesHero';
import { InfoBlocks } from '@/components/custom/InfoBlocks';
import { Locale } from '@/i18n.config';

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

const infoBlocks = [
    { icon: <Handshake width={40} height={40} />, title: 'Quick Payment', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odit?' },
    { icon: <HandCoins width={40} height={40} />, title: 'Affordable Prices', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odit?' },
    { icon: <Percent width={40} height={40} />, title: 'Discounts', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odit?' },
]

const Page = ({ params: { lang } }: { params: { lang: Locale } }) => {
    return (
        <div className="bg-cdarkgray">
            <PagesHero title='About Us' description='At mf_kiwwi, we are more than just an online perfume shop in Tashkent— we’re a partner in your journey to discover the scent that feels uniquely yours. We understand that fragrance is deeply personal, with the power to evoke memories, enhance confidence, and reflect your true self. That’s why we’re dedicated to offering a carefully selected range of high-quality perfumes that speak to every style and personality. Our team is passionate about guiding you through the process, helping you find that perfect fragrance that makes you feel complete. When you shop with mf_kiwwi, you’re not just buying a product; you’re joining a community that values authenticity, quality, and a personalized experience. Let us help you express your individuality through the art of scent—experience the difference with mf_kiwwi.' />
            <MainSubHero className='py-20' lang={lang} />
            <Statistics />
            <MainAbout lang={lang} />
            <InfoBlocks title='About' subtitle='Perks & Benefits' block={infoBlocks} />
            <Container className='w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 py-28'>
                {perfumes.map(perfume => <SaleProduct key={perfume.id} translation={perfume} />)}
            </Container>
        </div>
    );
};

export default Page;