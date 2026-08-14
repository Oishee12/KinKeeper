import Footer from '@/components/Footer'
import FriendsSection from '@/components/FriendsSection'
import Hero from '@/components/Hero'
import SummarySection from '@/components/SummarySection'

const Homepage = () => {
  return (
      <div className='min-h-screen bg-slate-50'>
        <Hero></Hero>
      <SummarySection></SummarySection>
      <FriendsSection></FriendsSection>
      <Footer></Footer>
    </div>
  )
}

export default Homepage