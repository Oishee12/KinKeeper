const SummaryCard = ({ value, title}) => {
    return (
        <div className="card border border-slate-200 bg-white shadow-sm">
            <div className="card-body items-center text-center p-2 lg:p-5">

                <h2 className="text-3xl font-bold text-slate-800">{value}</h2>

                <p className="font-medium text-slate-700">
                    {title}
                </p>
            </div>
        </div>
    )
}

export default SummaryCard