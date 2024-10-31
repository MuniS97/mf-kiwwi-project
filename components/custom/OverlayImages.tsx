"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import Image from 'next/image';

interface OverlayComponentProps {
    className?: string;
}

export const OverlayImages: React.FC<OverlayComponentProps> = ({ className }) => {
    return (
        <div className={cn("flex justify-center items-center", className)}>
            <Container className="flex justify-center items-center gap-20">
                <div className="hidden md:block w-1/3 h-1/3 mt-[15%] border border-cgold rounded-se-[35%] rounded-es-[35%]">
                    <Image width={1000} height={1000} src="/images/overlayImage3.webp" alt="Scent 3" className="w-full h-full object-cover border-8 rounded-se-[35%] rounded-es-[35%] border-transparent" />
                </div>
                <div className="w-[80%] md:w-[40%] mt-[5%]">
                    <Image width={1000} height={1000} src="/images/overlayImage1.webp" alt="Scent 1" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="hidden md:block w-1/3 h-1/3 border border-cgold rounded-ss-[35%] rounded-ee-[35%]">
                    <Image width={1000} height={1000} src="/images/overlayImage2.webp" alt="Scent 2" className="w-full h-full object-cover border-8 rounded-ss-[35%] rounded-ee-[35%] border-transparent" />
                </div>
            </Container>
        </div>
    );
};
