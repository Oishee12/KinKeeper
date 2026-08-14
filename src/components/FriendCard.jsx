function getStatusStyle(status){
    switch (status){
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

function formatStatus(status){
    if(status === "almost due"){
        return "Almost Due";
    }

    if(status === "on-track"){
        return "On-Track";
    }
    return "Overdue";
}
const FriendCard = ({friend}) => {
  return (
    <div className="card rounded-md border border-slate-200 bg-white shadow-sm">
     <div  className="card-body items-center p-4 text-center">
        <img src={friend.picture} alt={friend.name} 
        className="h-10 w-10 rounded-full object-cover"/>

        <h3 className="mt-1 text-xs font-semibold text-slate-800">
            {friend.name}
        </h3>

        <p className="text-[9px] text-slate-500">
          {friend.days_since_contact}d ago
        </p>

        <div>
            {friend.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-emerald-100 px-2 py-0.5 text-[8px] font-medium text-emerald-800">
                    {tag.toUpperCase()}
                </span>
            ))}
        </div>

        <span
          className={`mt-0.5 rounded-full px-2 py-0.5 text-[8px] font-medium ${getStatusStyle(
            friend.status
          )}`}
        >
          {formatStatus(friend.status)}
        </span>
    </div>   
    </div>
  )
}

export default FriendCard