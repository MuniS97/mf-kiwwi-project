import React from 'react';
import { PagesHero } from '@/components/custom/PagesHero';
import { Products } from '@/components/custom/Products';

const perfumes = [
    {
        id: 1,
        title: 'Cool Winters',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, odit?',
        image: '/images/perfumes/perfume1.webp',
        button: 'Discover More'
    },
    {
        id: 2,
        title: 'Eu De Rose',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, praesentium?',
        image: '/images/perfumes/perfume2.webp',
        button: 'Discover More'
    },
    {
        id: 3,
        title: 'Warm Sakura',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, debitis.',
        image: '/images/perfumes/perfume3.webp',
        button: 'Discover More'
    },
    {
        id: 4,
        title: 'Cool Winters',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, odit?',
        image: '/images/perfumes/perfume1.webp',
        button: 'Discover More'
    },
    {
        id: 5,
        title: 'Eu De Rose',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, praesentium?',
        image: '/images/perfumes/perfume2.webp',
        button: 'Discover More'
    },
    {
        id: 6,
        title: 'Warm Sakura',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, debitis.',
        image: '/images/perfumes/perfume3.webp',
        button: 'Discover More'
    },
    {
        id: 7,
        title: 'Cool Winters',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, odit?',
        image: '/images/perfumes/perfume1.webp',
        button: 'Discover More'
    },
    {
        id: 8,
        title: 'Eu De Rose',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, praesentium?',
        image: '/images/perfumes/perfume2.webp',
        button: 'Discover More'
    },
    {
        id: 9,
        title: 'Warm Sakura',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, debitis.',
        image: '/images/perfumes/perfume3.webp',
        button: 'Discover More'
    },
];

const Page = () => {
    return (
        <div className="bg-cdarkgray text-white">
            <PagesHero title='Collection' />
            <Products className='py-20' perfumes={perfumes} />
        </div>
    );
};


export default Page;