import { MainAbout } from "@/components/custom/MainAbout";
import { MainHero } from "@/components/custom/MainHero";
import { MainOurProducts } from "@/components/custom/MainOurProducts";
import { MainSubHero } from "@/components/custom/MainSubHero";
import { MainTestimonials } from "@/components/custom/MainTestimonials";
import { Products } from "@/components/custom/Products";
import { Locale } from "@/i18n.config";

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
];

export default function Home({ params: { lang } }: { params: { lang: Locale } }) {

  return (
    <main className="bg-cdarkgray">
      <MainHero lang={lang} />
      <MainSubHero lang={lang} />
      <MainAbout lang={lang} />
      <MainOurProducts lang={lang} />
      <Products perfumes={perfumes} />
      <MainTestimonials />
    </main>
  );
}