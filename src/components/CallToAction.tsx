import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-emerald-600 py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It&apos;s time to take your business to the next level. Book a call to start the onboarding process today. No strings attached
          </p>
          <Button href="https://cal.com/andrew-coderre/cleaning-template-onboarding" color="white" className="mt-10">
            Get started
          </Button>
        </div>
      </Container>
    </section>
  )
}
