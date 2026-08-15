import { FaPhone, FaComment, FaVideo  } from "react-icons/fa"

const checkInOptions = [
  {
    name: "Call",
    icon: FaPhone,
  },
  {
    name: "Text",
    icon: FaComment,
  },
  {
    name: "Video",
    icon: FaVideo,
  },
];

const QuickCheckIn = () => {
  return (
    <div className="mt-4 rounded-md border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">
        Quick Check-In
      </h2>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {
            checkInOptions.map((option) => {
                const Icon = option.icon;

                return(
                    <button key={option.name} type="button" className="btn btn-sm flex h-16 flex-col gap-1 rounded-md border border-slate-200 bg-white text-slate-700 hover:border-emerald-700 hover:bg-emerald-50">
                        <Icon size={14}/>
                        <span className="text-sm">{option.name}</span>
                    </button>
                )
            })
        }
      </div>
    </div>
  )
}

export default QuickCheckIn