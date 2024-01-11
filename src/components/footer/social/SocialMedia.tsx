import Link from "next/link";

const SOCIALS = [
    {
        name: 'instagram',
        url: 'https://www.instagram.com/indocomiccon',
        icon: ''
    },
    {
        name: 'facebook',
        url: 'https://www.facebook.com/IndoComicCon',
        icon: ''
    },
    {
        name: 'twitter',
        url: 'https://www.twitter.com/indo_comiccon',
        icon: ''
    },
    {
        name: 'youtube',
        url: 'https://www.youtube.com/channel/UCuWnf3zwPq7cS1njZjXCwvg',
        icon: ''
    },
]

export default function SocialMedia() {
    return SOCIALS.map(social => <Link key={social.name} href={social.url} rel="noopener" target="_blank">{social.name}</Link>)
}
