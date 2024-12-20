import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/custom/Header";
import { Footer } from "@/components/custom/Footer";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
    icons: {
        icon: "/logo.jpg"
    }
};

export default async function RootLayout({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    const { header, footer } = await getDictionary(lang);
    return (
        <html lang="ru">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Header translation={header} lang={lang} />
                <main>
                    {children}
                </main>
                <Footer translation={footer} lang={lang} />
                <Toaster />
            </body>
        </html>
    );
}
