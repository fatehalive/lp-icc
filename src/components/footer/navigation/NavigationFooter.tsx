import Link from "next/link"

export default function NavigationFooter({ navList }: { navList: Array<string>}) {
    const LINKS = [
        {
            columnOrder: 1,
            title: "Guests Stars",
            path: "/guests",
        },
        {
            columnOrder: 1,
            title: "Tenants",
            path: "/tenants",
        },
        {
            columnOrder: 1,
            title: "Tenant Registration",
            path: "/exhibit",
        },
        {
            columnOrder: 1,
            title: "Promote Your Brand",
            path: "/brand-promotion",
        },
        {
            columnOrder: 1,
            title: "Gallery",
            path: "/gallery",
        },
        {
            columnOrder: 1,
            title: "Get Your Ticket",
            path: "/ticket",
        },
        {
            columnOrder: 2,
            title: "FAQ",
            path: "/faq",
        },
        {
            columnOrder: 2,
            title: "Event Guidelines",
            path: "/event-guidelines",
        },
        {
            columnOrder: 2,
            title: "Safety & Weapon Policy",
            path: "/safety-and-weapon-policy",
        },
        {
            columnOrder: 2,
            title: "Anti-Harassment Policy",
            path: "/anti-harassment-policy",
        },
        {
            columnOrder: 3,
            title: "Report an Incident",
            path: "/report-incident",
        },
        {
            columnOrder: 3,
            title: "Contact",
            path: "/contact",
        },
        {
            columnOrder: 4,
            title: "Terms of Service",
            path: "/terms",
        },
        {
            columnOrder: 4,
            title: "Privacy Policy",
            path: "/privacy"
        }
    ]
    return (
        <>
            {navList.map((group, index) => (
            <div key={group} className="border border-red-600">
                <div>{group}</div>
                <ul>
                    {LINKS.map(link => {
                        if (index + 1 === link.columnOrder) return (<li><Link key={link.path} href={link.path}>{link.title}</Link></li>)
                    })}
                </ul>
            </div>
            ))}
        </>
    )
}
