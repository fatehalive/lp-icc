import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="flex flex-col items-center justify-center relative isolate lg:pt-2 2xl:pt-6">
            <div className="absolute inset-0 z-0"><Image src={""} alt="image"></Image></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-950 via-[20%] lg:via-[5%] via-transparent to-[80%] lg:to-[95%] to-gray-950"></div>
            <div className="container relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    <div className="relative isolate mb-16 sm:mb-0 row-span-2 z-50">
                        <div className="relative z-10 flex flex-col items-center sm:items-start justify-end py-16 rounded-2xl h-full">
                            <div className="relative isolate">
                                <span
                                    className="uppercase block mb-1.5 text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white/100"
                                >
                                    Indonesia Comic Con 2023 ⚡️
                                </span>
                                <h1 id="hero-title"
                                    className="relative z-10 text-white font-display tracking-tight text-[9vw] xs:text-[9vw] sm:text-[8vw] md:text-[7vw] lg:text-[4vw] xl:text-[2.75vw] 2xl:text-[2.8vw] 3xl:text-[2.6vw] !leading-[1.1] uppercase"
                                >
                                    Bringing
                                    <br />
                                    the Best
                                    <br />
                                    <span className="text-red-600">Pop</span>
                                    <span className="text-accent-yellow-base">
                                        Cu<Link href="/login">l</Link>ture
                                    </span>
                                    Experience
                                </h1>
                                <div
                                    className="absolute z-30 right-0 bottom-[50%] hover:scale-[1.1] transition-transform duration-300">
                                    <Image
                                        src=""
                                        alt="wayang"
                                        width="514.88" height="610.75"
                                        className="w-28 xl:w-32 2xl:w-36 pointer-events-none select-none animate-[slow-bounce_10s_linear_infinite] drop-shadow-xl"
                                    ></Image>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-x-2 items-center mt-4 lg:mt-6">
                                <Link
                                    href="/ticket"
                                    className="px-6 py-5 bg-accent-yellow-base rounded-full flex items-center justify-center text-black font-bold tracking-tight hover:bg-accent-yellow-darken transition-colors"
                                >
                                    Get your ticket
                                </Link>
                                <Link
                                    href="/"
                                    aria-current="page"
                                    className="px-6 py-5 border border-white rounded-full flex items-center justify-center text-white font-bold tracking-tight hover:bg-white hover:text-black transition-colors"
                                >
                                    Be part of ICC
                                </Link>
                            </div>
                        </div>
                        <div className="absolute z-0 bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 h-1 w-[80%] rounded-b-full overflow-hidden grid grid-cols-3">
                            <span className="h-full bg-red-600"></span>
                            <span className="h-full bg-accent-yellow-lighten"></span>
                            <span className="h-full bg-sky-500"></span></div>
                        <div className="lg:hidden absolute z-20 bottom-0 left-0">
                            <Image
                                src=""
                                alt="thunderbolt"
                                className="w-16 pointer-events-none select-none translate-y-[110%] -translate-x-[20%] rotate-[-15deg]"
                            />
                        </div>
                        <div className="lg:hidden absolute z-20 bottom-0 right-0">
                            <Image
                                src=""
                                alt="thunderbolt"
                                className="w-10 pointer-events-none select-none translate-y-[20%] translate-x-[30%] scale-x-[-1] rotate-[15deg]"
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="group bg-gradient-to-b from-red-600 to-red-700 rounded-2xl overflow-hidden relative isolate px-6 py-6 3xl:py-8 h-full">
                            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                                <div>{"<!---->"}</div> <span className="text-white font-heading text-4xl mt-6">Nov 4-5, 2023</span>
                                <span className="text-white tracking-tight mt-3">
                                    Jakarta Convention Center (JCC) Senayan, Assembly, Cendrawasih, and Plenary Hall
                                </span> <span className="text-white text-xs sm:text-sm tracking-tight mt-3">
                                    10 AM - 9 PM
                                </span>
                            </div>
                            <Image
                                src=""
                                alt="captain"
                                className="absolute z-40 top-0 rotate-[-30deg] right-0 translate-x-[30%] w-28 lg:w-32 2xl:w-36 3xl:w-40 pointer-events-none select-none group-hover:scale-[1.2] transition-transform duration-300"
                            />
                        </div>
                        <div
                            className="absolute z-50 right-0 top-0 sm:top-auto sm:bottom-0 animate-[slow-bounce-emoji-surprised_12s_linear_infinite]">
                            <div className="emoji group aspect-square p-2 rounded-full bg-white/60 backdrop-blur-lg -translate-y-[100%] sm:translate-y-[50%] translate-x-[20%] sm:translate-x-[40%]" style={{ transform: "translate(32px, 40px)" }}>
                                <div className="aspect-square w-14 xl:w-16 rounded-full bg-white flex items-center justify-center">
                                    <div className="w-10 xl:w-12 rotate-12 group-hover:scale-[2.1] transition-transform duration-300">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}