import React from 'react';
import { NavBar } from './NavBar';
import { Container } from './Container';
import { Logo } from './Logo';
import ChangeLanguage from './ChangeLang';
import { Locale } from '@/i18n.config';

interface Props {
    className?: string;
    translation: object;
    lang: Locale
}

export const Header: React.FC<Props> = ({ translation, lang }) => {
    return (
        <header className='bg-cdarkgray'>
            <Container className="flex justify-between items-center gap-8 py-7">
                <Logo />
                <NavBar translation={translation} lang={lang} />
                <ChangeLanguage />
            </Container>
        </header>
    );
};