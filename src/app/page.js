import Hero from '@/components/Hero'
import SummarySection from '@/components/SummarySection'

const Homepage = () => {
  return (
      <div className='min-h-screen bg-slate-50'>
        <Hero></Hero>
      <SummarySection></SummarySection>
    </div>
  )
}

export default Homepage