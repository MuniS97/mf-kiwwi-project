"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


const ChangeLanguage = () => {
    const pathName = usePathname();

    return (
        <div className="flex font-medium items-center gap-2 max-xl:text-sm">

            <Link href={`/en/${pathName.slice(4)}`}>
                <button
                    className={cn(
                        "max-lg:px-3 max-lg:py-1.5 max-lg:border-2 max-lg:border-secondary max-lg:rounded-full",
                        pathName.slice(1, 3) === "en"
                            ? "max-lg:bg-secondary max-lg:text-black text-secondary"
                            : "bg-transparent text-[#808080] max-lg:text-secondary"
                    )}
                >
                    EN
                </button>
            </Link>
            <Link href={`/ru/${pathName.slice(4)}`}>
                <button
                    className={cn(
                        "max-lg:px-3 max-lg:py-1.5 max-lg:border-2 max-lg:border-secondary max-lg:rounded-full",
                        pathName.slice(1, 3) === "ru"
                            ? "max-lg:bg-secondary max-lg:text-black text-secondary"
                            : "bg-transparent text-[#808080] max-lg:text-secondary"
                    )}
                >
                    RU
                </button>
            </Link>
            <Link href={`/uz/${pathName.slice(4)}`}>
                <button
                    className={cn(
                        "max-lg:px-3 max-lg:py-1.5 max-lg:border-2 max-lg:border-secondary max-lg:rounded-full",
                        pathName.slice(1, 3) === "uz"
                            ? "max-lg:bg-secondary max-lg:text-black text-secondary"
                            : "bg-transparent text-[#808080] max-lg:text-secondary"
                    )}
                >
                    UZ
                </button>
            </Link>
        </div>
    );
};

export default ChangeLanguage;
