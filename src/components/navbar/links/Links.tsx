"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Guests',
        path: '/guests'
    },
    {
        title: 'Rundown',
        path: '/rundown'
    },
    {
        title: 'Tenants',
        path: '/tenants'
    },
    {
        title: 'Promo',
        path: '/promo'
    },
    {
        title: 'Gallery',
        path: '/gallery'
    }
]

export default function Links() {
    const pathname = usePathname()
    return (
        <ul className="flex">
            {LINKS.map(link => {
                console.log(pathname)
                const isActive = pathname === link.path
                return (
                    <Link 
                        className={clsx("px-10", isActive && "font-bold")} 
                        key={link.title}
                        href={link.path}
                    >
                        {link.title}
                    </Link>
                )
            })}
        </ul>
    );
}
