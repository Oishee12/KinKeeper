const stats = [
    {
    id: 1,
    label: "Days Since Contact",
    getValue: (friend) => `${friend.days_since_contact}d`,
  },
  {
    id: 2,
    label: "Goal (Days)",
    getValue: (friend) => `${friend.goal}d`,
  },
  {
    id: 3,
    label: "Next Due Date",
    getValue: (friend) => friend.next_due_date,
  },
];

const FriendStats = ({friend}) => {
  return (
    <div className="grid grid-cols-3 gap-2 mb-7">
        {stats.map((stat) => (
            <div key={stat.id} className="card rounded-md border border-slate-200 bg-white shadow-sm">
            <div className="card-body items-center justify-center p-6 text-center">
            <p className="text-xl font-semibold text-emerald-900">
                {stat.getValue(friend)}
            </p>
            <p className=" text-base leading-tight text-slate-500">{stat.label}</p>
            </div>
            </div>
        ))}
        
    </div>
  )
}

export default FriendStats