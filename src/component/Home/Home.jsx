import React from 'react'
import BenefitSection from '../BenefitSection/BenefitSection'
import FeaturesSection from '../FeaturesSection/FeaturesSection'
import HeroSection from '../HeroSection/HeroSection'
import StatisticsSection from '../StatisticsSection/StatisticsSection'
import TrustpilotSection from '../TrustpilotSection/TrustpilotSection'
import WebsiteSubjects from '../WebsiteSubjects/WebsiteSubjects'


function Home() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <BenefitSection />
      <WebsiteSubjects />
      <FeaturesSection />
      <TrustpilotSection />


    </>
  )
}

export default Home