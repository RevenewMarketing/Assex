import GlobalBanner from 'src/components/banner/GlobalBanner'
import HeroSection from './sections/HeroSection'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'
import Section5 from './sections/Section5'
import Section6 from './sections/Section6'

function Home() {
  return (
    <div>
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    <GlobalBanner />

    </div>
  )
}

export default Home