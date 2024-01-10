import Link from "next/link"
import Image from "next/image"
import Links from "./links/Links"
import CtaButton from "./cta/CtaButton"

import indonesiacomiccon from '@/public/indonesiacomiccon.svg'
import x from '@/public/x.svg'
import dgconx from '@/public/dgconx.svg'

export default function Navbar() {
    return (
        <header className="flex h-16 lg:h24 w-full justify-center fixed border border-solid border-gray-900">
            <div className="container flex h-full items-center">
                <div className="border border-dotted border-red-600">
                    <Link href="/">
                        <div className="flex items-center gap-x-0.5 h-11 lg:h-12">
                            <Image width={123} src={indonesiacomiccon} alt="indonesia-comic-con-icon"/>
                            <Image width={13} src={x} alt="x-icon"/>
                            <Image width={46} src={dgconx} alt="dg-con-x-icon"/>
                        </div>
                    </Link>
                </div>
                <nav className="border border-dotted border-blue-600">
                    <Links />
                </nav>
                <div className="flex border border-dotted border-yellow-700">
                    <CtaButton
                        to="/ticket"
                        title="Get Your Ticket!"
                    />
                </div>
            </div>
        </header>
    )
}
