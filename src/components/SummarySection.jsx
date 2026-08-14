import SummaryCard from "./SummaryCard"

const summaryData = [
    {
        id: 1,
        value: 10,
        title: "Total Friends",
    },
    {
    id: 2,
    value: 3,
    title: "On Track",
  },
  {
    id: 3,
    value: 6,
    title: "Need Attention",
  },
  {
    id: 4,
    value: 12,
    title: "Interactions this month",
  },
]

const SummarySection = () => {
  return (
    <section className="bg-slate-50 lg:px-4 pb-10"> 
<div className="mx-auto grid max-w-3xl lg:max-w-6xl gap-2 lg:gap-4 grid-cols-2 lg:grid-cols-4">
 
 {summaryData.map((item) => (
    <SummaryCard key={item.id} value={item.value} title={item.title}>
</SummaryCard>
)
)}
</div>
    </section>
  )
}

export default SummarySection