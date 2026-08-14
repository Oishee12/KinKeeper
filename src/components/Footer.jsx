import Link from "next/link";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLink = [
    {
        name: "Youtube",
        href: "#",
        icon: FaYoutube,
    },
    {
        name: "Facebook",
        href: "#",
        icon: FaFacebookF,
    },
    {
        name: "Twitter",
        href: "#",
        icon: FaXTwitter,
    },
];

const footerLinks = [
    {
        name: "Privacy Policy",
        href: "#",
    },
    {
        name: "Terms of Service",
        href: "#",
    },
    {
        name: "Cookies",
        href: "#",
    },
];

const Footer = () => {
    return (
        <footer className="bg-emerald-950 text-white">
            <div className="mx-auto max-w-6xl px-4 py-12">
                <div className="text-center">
                    <h2 className="text-xl font-bold tracking-tight lg:text-5xl">KeenKeeper</h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-emerald-100/70">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>

                    <h3 className="mt-4 text-lg font-medium">
                        Social Links
                    </h3>

                    <div className="mt-3 flex justify-center gap-2">
                        {
                            socialLink.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <Link key={social.name} href={social.href} aria-label={social.name} className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-emerald-950 transition hover:scale-105">
                                        <Icon size={13}></Icon>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="mt-5 lg:mt-10 flex flex-col gap-4 border-t border-white/10 pt-4 text-[12px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-center">© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex items-center justify-center flex-wrap gap-5">
                        {
                            footerLinks.map((link) => (
                                <Link key={link.name} href={link.href} className="transition hover:text-white">{link.name}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer