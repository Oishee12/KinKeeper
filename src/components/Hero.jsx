import Link from "next/link";
import { FiPlus } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="bg-slate-50 px-4 py-10 lg:py-14">
        <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
          Friends to keep close in your life
        </h1>

<p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-slate-500 sm:text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

<Link href="#friends"  className="btn mt-5 min-h-0 h-10 rounded-md border-0 bg-emerald-900 px-4 text-xs font-medium text-white hover:bg-emerald-800"> <FiPlus size={14}></FiPlus> Add a Friend
</Link>
        </div>

    </section>
  );
}

export default Hero