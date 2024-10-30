import "server-only";
import type { Locale } from "@/i18n.config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const dictionaries = {
    ru: async () => await import("@/langs/ru.json").then((module) => module.default),
    en: async () => await import("@/langs/en.json").then((module) => module.default),
    uz: async () => await import("@/langs/uz.json").then((module) => module.default),
};

// export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export const getDictionary = async (locale: Locale) => {
    const dictionaryLoader = dictionaries[locale];

    if (typeof dictionaryLoader !== 'function') {
        throw new TypeError(`Загрузчик словаря для локали '${locale}' не является функцией или не существует`);
    }

    return await dictionaryLoader();
};


export async function homeSellGuardian(key: string, lang: Locale): Promise<any> {
    const res: any = (await cookies()).get("publicationData")?.value;

    if (res !== undefined) {
        const cookieStore = JSON.parse(decodeURIComponent(res));
        if (!cookieStore[key]) {
            redirect(`/${lang}/sell`);
        }
    } else {
        redirect(`/${lang}/sell`);
    }
}