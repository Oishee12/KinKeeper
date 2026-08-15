

const RelationshipGoal = ({friend}) => {
  return (
    <div className="mt-4 rounded-md border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
         <div>
          <p className="text-xs font-medium text-slate-500">
            Relationship Goal
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-800">
            Every {friend.goal} days
          </p>
        </div>
         <button className="btn btn-xs rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
          Edit
        </button>
      </div>
      
    </div>
  )
}

export default RelationshipGoal