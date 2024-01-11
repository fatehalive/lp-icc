import NavigationFooter from "./navigation/NavigationFooter"
import Link from "next/link"
import Image from "next/image"

import SocialMedia from "./social/SocialMedia"

import indonesiacomiccon from '@/public/indonesiacomiccon.svg'
import x from '@/public/x.svg'
import dgconx from '@/public/dgconx.svg'

const NAVLIST = ["Discover", "Resources", "Support", "Legal"]

export default function Footer() {
    return (
        <footer className="flex justify-center border border-gray-950 text-center">
            <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-10 py-16 lg:py-24 mx-auto">
                    <div className="col-span-2 lg:col-span-3 sm:items-start border border-red-600">
                        <Link href="/">
                            <div className="flex items-center gap-x-0.5 h-11 lg:h-12">
                                <Image width={123} src={indonesiacomiccon} alt="indonesia-comic-con-icon" />
                                <Image width={13} src={x} alt="x-icon" />
                                <Image width={46} src={dgconx} alt="dg-con-x-icon" />
                            </div>
                        </Link>
                    </div>
                    <NavigationFooter navList={NAVLIST} />
                </div>
                <div className="flex flex-col items-center gap-y-6 pb-10 border border-dotted border-blue-600">
                    <div className="flex justify-start items-center gap-0 text-white">
                        <SocialMedia />
                    </div>
                    <div className="text-xs flex justify-center items-center text-center text-gray-400">
                        <span>Copyright</span>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}
