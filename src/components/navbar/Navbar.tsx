import Link from "next/link"
import Image from "next/image"
import Links from "./links/Links"
import CtaButton from "./cta/CtaButton"

import indonesiacomiccon from '@/public/indonesiacomiccon.svg'
import x from '@/public/x.svg'
import dgconx from '@/public/dgconx.svg'

export default function Navbar() {
    return (
        <header className="navbar z-[998] flex h-16 lg:h-24 w-full items-center justify-center text-sm transition-all duration-200 ease-in-out fixed border border-gray-950">
            <div className="container flex h-full items-center">
                <div className="brand-logo flex-shrink-0 relative border border-dotted border-red-600">
                    <Link href="/">
                        <div className="flex items-center gap-x-0.5 h-11 lg:h-12">
                            <Image width={123} src={indonesiacomiccon} alt="indonesia-comic-con-icon"/>
                            <Image width={13} src={x} alt="x-icon"/>
                            <Image width={46} src={dgconx} alt="dg-con-x-icon"/>
                        </div>
                    </Link>
                </div>
                <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-x-0 lg:flex lg:items-center border border-dotted border-blue-600">
                    <Links />
                </nav>
                <div className="ml-auto flex items-center flex-shrink-0 gap-x-1 sm:gap-x-2 border border-dotted border-yellow-700">
                    <CtaButton
                        to="/ticket"
                        title="Get Your Ticket!"
                    />
                </div>
            </div>
        </header>
    )
}
