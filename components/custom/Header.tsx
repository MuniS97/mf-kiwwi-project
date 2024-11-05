import React from 'react';
import { NavBar } from './NavBar';
import { Container } from './Container';
import { Logo } from './Logo';
import ChangeLanguage from './ChangeLang';
import { Locale } from '@/i18n.config';

interface Props {
    className?: string;
    translation: object;
    lang: Locale;
}

export const Header: React.FC<Props> = ({ translation, lang }) => {
    return (
        <header className='bg-cdarkgray'>
            <Container className="flex justify-between items-center py-7">
                <Logo />
                <div className='max-md:hidden block'>
                    <NavBar translation={translation} lang={lang} />
                </div>
                <div className="flex items-center gap-4 ml-auto md:ml-0">
                    <ChangeLanguage />
                    <div className='max-md:block hidden'>
                        <NavBar translation={translation} lang={lang} />
                    </div>
                </div>
            </Container>
        </header>
    );
};
