import { Inter } from 'next/font/google';
import { Stats } from "@/components/Stats/Stats";
import Image from "next/image";

const inter = Inter({ subsets: ['latin'], weight: ["700", "400", "900", "800", "600", "500"] });

export default function Home() {
    return (
        <main className={`bg-darkBlue flex flex-col md:flex-row items-center md:grid
            md:grid-cols-2 md:max-h-[27.875rem] text-center md:text-left h-full w-full max-w-[69.375rem]
        `}>
            <div className="image-wrapper relative md:order-1">
                <Image className={"inline md:hidden w-full h-auto image absolute top-0 left-0"}
                       src={"/images/image-header-mobile.jpg"} fill alt={"image hero"}/>
                <Image className={"hidden md:inline w-full h-auto image absolute top-0 left-0"}
                       src={"/images/image-header-desktop.jpg"} fill alt={"image hero"}/>
                <div className="curtain"/>
            </div>

            <div className={"px-8 pt-10 pb-8 md:pb-14 md:pl-[4.438rem] md:pt-[4.438rem] md:pr-[5.938rem]"}>
                <div className={"flex flex-col gap-4 md:gap-6"}>
                    <h1 className={"text-[1.75rem] md:text-4xl font-bold leading-[2rem]"}>Get <span
                        className={"text-purple"}>insights</span> that help your business grow.</h1>

                    <p className={"text-[0.938rem] opacity-75 leading-[1.563rem]"}>Discover the benefits of data analytics and make better decisions
                        regarding revenue, customer experience,
                        and overall efficiency.</p>
                </div>

                <div className={"flex flex-col md:flex-row gap-6 mt-10 md:justify-between md:pr-[3.25rem]"}>
                    <Stats title={"10k+"} description={"companies"}/>
                    <Stats title={"314"} description={"templates"}/>
                    <Stats title={"12m+"} description={"queries"}/>
                </div>
            </div>
        </main>
    );
}
