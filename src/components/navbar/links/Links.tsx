import Link from "next/link";

export default function Links() {
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
    return (
        <ul>
            {LINKS.map(link => (<Link key={link.title} href={link.path}>{link.title}</Link>))}
        </ul>
    );
}
