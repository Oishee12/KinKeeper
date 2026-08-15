import friends from "@/data/friends.json"
import Link from "next/link";

const FriendDetailsPage = async ({ params }) => {
    const { id } = await params;
    const friend = friends.find((item) => item.id === Number(id));

    if (!friend) {
        return (
            <main className="min-h-screen bg-slate-50 px-4 py-10">
                <div className="mx-auto max-w-6xl text-center">
                    <h1 className="text-2xl font-bold text-slate-800">
                        Friend Not Found
                    </h1>

                    <p className="mt-2 text-base text-slate-500">
                        We could not find a friend with this ID.
                    </p>

                    <Link
                        href="/"
                        className="btn mt-5 rounded-md border-0 bg-emerald-900 text-white hover:bg-emerald-800"
                    >
                        Back to Home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-2xl font-bold text-slate-800">
                    {friend.name}
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Friend Details
                </p>
            </div>
        </main>
    )
}

export default FriendDetailsPage