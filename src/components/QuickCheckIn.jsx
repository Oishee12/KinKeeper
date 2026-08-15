"use client";

import { useState } from "react";
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

const QuickCheckIn = ({friend}) => {
    const [message, setMessage] = useState("");

function handleCheckIn(type){
    const newEntry = {
        id: Date.now(),
        type: type.toLowerCase(),
        date: new Date().toISOString(),
        title: `${type} with ${friend.name}`,
      friendId: friend.id,
    }

const existingEntries = JSON.parse(
      localStorage.getItem("timelineEntries") || "[]"
    );

    const updatedEntries = [newEntry, ...existingEntries];

    localStorage.setItem(
      "timelineEntries",
      JSON.stringify(updatedEntries)
    );

    setMessage(`${type} with ${friend.name} added to timeline.`);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }
  return (
    <div className="mt-4 rounded-md border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg text-emerald-800 text-center lg:text-start">
        Quick Check-In
      </h2>

      <div className="mt-3 grid lg:grid-cols-3 gap-2">
        {
            checkInOptions.map((option) => {
                const Icon = option.icon;

                return(
                    <button key={option.name} type="button" 
                    onClick={()=> handleCheckIn(option.name)}
                    className="btn btn-sm flex h-16 flex-col gap-1 rounded-md border border-slate-200 bg-white text-slate-700 hover:border-emerald-700 hover:bg-emerald-50">
                        <Icon size={14}/>
                        <span className="text-sm">{option.name}</span>
                    </button>
                )
            })
        }
      </div>

       {message && (
        <div className="alert mt-3 rounded-md border-0 bg-emerald-100 px-3 py-2 text-xs text-emerald-900">
          <span>{message}</span>
        </div>
      )}
    </div>
  )
}

export default QuickCheckIn