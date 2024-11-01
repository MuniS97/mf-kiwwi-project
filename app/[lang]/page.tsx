import { MainAbout } from "@/components/custom/MainAbout";
import { MainHero } from "@/components/custom/MainHero";
import { MainOurProducts } from "@/components/custom/MainOurProducts";
import { MainSubHero } from "@/components/custom/MainSubHero";
import { Products } from "@/components/custom/Products";


export default function Home() {
  return (
    <main className="bg-cdarkgray">
      <MainHero />
      <MainSubHero />
      <MainAbout />
      <MainOurProducts />
      <Products />
    </main>
  );
}