import ContactForm from '@/components/custom/ContactForm';
import { Container } from '@/components/custom/Container';
import { InfoBlocks } from '@/components/custom/InfoBlocks';
import { PagesHero } from '@/components/custom/PagesHero';
import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

const infoBlocks = [
    {
        icon: <Phone className='w-12 h-12' />,
        title: '+998 88 668 77 07',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus.'
    },
    {
        icon: <Mail className='w-12 h-12' />,
        title: 'firdavs435@icloud.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus.'
    },
    {
        icon: <MapPin className='w-12 h-12' />,
        title: 'Tashkent, Uzbekistan',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus.'
    }
]

const Page: React.FC = () => {
    return (
        <div className='bg-cdarkgray'>
            <PagesHero title='Contact Us' />
            <InfoBlocks title='Contact' subtitle='Get in Touch' block={infoBlocks} />
            <Container className='flex flex-col md:flex-row justify-start items-start gap-8 pt-10 pb-20'>
                <div className='w-full md:max-w-[40%] flex flex-col justify-center items-start text-left'>
                    <h2 className='text-[4em] lg:text-[5em] font-bold text-transparent leading-[50px]' style={{ WebkitTextStroke: '1px #f2c437' }}>Form</h2>
                    <h3 className='text-white text-[3em] font-semibold'>Get In Touch <span className='max-md:hidden'>!!</span></h3>
                    <p className='text-clightgray text-base font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem illum, vel unde ullam nemo explicabo doloremque vitae modi rerum libero magnam totam recusandae maiores suscipit id quos sunt eveniet facere?</p>
                </div>
                <ContactForm />
            </Container>
        </div>
    );
};

export default Page;