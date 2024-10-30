import React from 'react';
import { NavBar } from './NavBar';
import { Container } from './Container';
import { Logo } from './Logo';

interface Props {
    className?: string;
    translation: object;
}

export const Header: React.FC<Props> = ({ translation }) => {
    return (
        <header className='bg-cdarkgray'>
            <Container className="flex justify-between items-center gap-8 py-7">
                <Logo />
                <NavBar translation={translation} />
            </Container>
        </header>
    );
};