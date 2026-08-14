"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FiHome, FiClock, FiBarChart2 } from "react-icons/fi";

const navItems = [
    {
        name: "Home",
        href: "/",
        icon: FiHome,
    },
  {
    name: "Timeline",
    href: "/timeline",
    icon: FiClock,
  },
  {
    name: "Stats",
    href: "/stats",
    icon: FiBarChart2,
  },

]
const Navbar = () => {
    const pathName = usePathname();
  return (
    <div className="navbar min-h-16 border-b border-gray-200 bg-white px-4 sm:px-6">
        <div className="container mx-auto flex justify-between">
{/* logo */}
 <Link href="/"
          className="text-lg font-bold tracking-tight text-slate-800">
             Kin<span className="text-emerald-800">Keeper</span>
 </Link>
 {/* Navigation */}
 <div className="flex items-center gap-1 sm:gap-2">
{
    navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathName === item.href;

        return(
            <Link key={item.name} href={item.href} className={`flex items-center gap-1.5 rounded-md px-2 sm:px-3 py-2 text-sm text-slate-600transition hover:bg-emerald-50 hover:text-emerald-800 ${isActive ? "bg-emerald-900 text-white hover:bg-emerald-900 hover:text-white" : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"}`}>
               <Icon size={14}></Icon>
               <span>{item.name}</span>
            </Link>
        );
    })
}
 </div>
        </div>
    </div>
  );
}

export default Navbar