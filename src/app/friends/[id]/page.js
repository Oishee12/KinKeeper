import FriendStats from "@/components/FriendStats";
import RelationshipGoal from "@/components/Relationship";
import friends from "@/data/friends.json"
import Link from "next/link";

function getStatusStyle(status) {
    switch (status) {
        case "overdue":
            return "bg-red-500 text-white";

        case "almost due":
            return "bg-amber-400 text-white";

        case "on-track":
            return "bg-emerald-700 text-white";

        default:
            return "bg-slate-400 text-white";
    }
}

function formatStatus(status) {
    if (status === "almost due") {
        return "Almost Due";
    }

    if (status === "on-track") {
        return "On-Track";
    }

    return "Overdue";
}

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
                <Link href="/" className="mb-6 inline-block text-base font-medium text-emerald-800 hover:underline">← Back to Friends
                </Link>

<div className="grid gap-4 grid-cols-1 lg:grid-cols-5">
      <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">
                    <div className="flex flex-col items-center gap-4 ">
                        <img src={friend.picture} alt={friend.name} className="h-24 w-24 rounded-full object-cover"></img>
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-slate-800">
                                {friend.name}
                            </h1>
                            <div className="mt-2 flex flex-wrap justify-center gap-2 mb-3">
                                <span className={`rounded-full px-2.5 py-1 text-base font-medium ${getStatusStyle(friend.status)}`}>
                                    {formatStatus(friend.status)}
                                </span>
                            </div>
                            <div>
                                {friend.tags.map((tag) => (
                                    <span key={tag} className="rounded-full bg-emerald-100 px-2.5 py-1 text-base font-medium text-emerald-800">{tag.toUpperCase()}</span>
                                ))}
                            </div>
                            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                                {friend.bio}
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                                {friend.email}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                        <button className="btn btn-sm rounded-md border-0 bg-emerald-900 text-white hover:bg-emerald-800">
                            Snooze 2 Weeks
                        </button>

                        <button className="btn btn-sm rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
                            Archive
                        </button>

                        <button className="btn btn-sm rounded-md border border-red-200 bg-white text-red-600 hover:bg-red-50">
                            Delete
                        </button>
                    </div>
                </section>
                <div className="lg:col-span-3">
                    <FriendStats friend={friend}>
                    </FriendStats>
                    <RelationshipGoal friend={friend}></RelationshipGoal>
                </div>
</div>
            </div>
        </main>
    )
}

export default FriendDetailsPage

