import { CallToAction } from '@/components/CallToAction'
import CaseStudy from '@/components/CaseStudy'
import Comparison from '@/components/Comparison'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Logo } from '@/components/Logo'
import { MacbookScroll } from '@/components/MacbookScroll'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CaseStudy />
        <Testimonials />
        {/* <MacbookScroll src='/milton.png' title="Clean up online conversions" badge={<Logo/>} /> */}
        <CallToAction />
        <Comparison />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
