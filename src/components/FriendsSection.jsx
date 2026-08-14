import FriendCard from "./FriendCard"
import friends from "@/data/friends.json"

const FriendsSection = () => {
  return (
   <section id="friends" className="bg-slate-50 px-4 pb-14">
<div className="mx-auto max-w-6xl">
<h2 className="mb-4 text-2xl font-semibold text-slate-800">
    Your Friends</h2>

    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {friends.map((friend)=> (
            <FriendCard key={friend.id} friend={friend}>

            </FriendCard>
        ))}
    </div>
</div>
   </section>
  )
}

export default FriendsSection