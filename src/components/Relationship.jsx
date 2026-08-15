

const RelationshipGoal = ({friend}) => {
  return (
    <div className="mt-4 rounded-md border border-slate-200 bg-white p-4 shadow-sm mb-7">
      <div className="flex flex-col lg:flex-row items-center justify-between">
         <div>
          <p className="text-lg font-medium text-emerald-800">
            Relationship Goal
          </p>

          <p className="mt-1 text-base font-semibold text-slate-800">
           Connect every {friend.goal} days
          </p>
        </div>
         <button className="btn btn-md rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
          Edit
        </button>
      </div>
      
    </div>
  )
}

export default RelationshipGoal