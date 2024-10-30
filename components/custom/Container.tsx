import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    children: React.ReactNode
}

export const Container: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={cn("w-full max-w-[1280px] px-10 mx-auto text-center", className)}>
            {children}
        </div>
    );
};