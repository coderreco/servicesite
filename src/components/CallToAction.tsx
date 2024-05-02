import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-emerald-600 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get a free mockup
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Send us your website and we&apos;ll show you how it can look using our template, at no charge.
          </p>
          <div className="mt-6 flex justify-center gap-x-6">
            <Button href="/mockup" color='white'>Get my mockup</Button>
            <Button
              href="https://cal.com/team/industry-website-templates/cleaning-template-information"
              variant="outline"
              color='white'
            >
              {/* <svg
                aria-hidden="true"
                className="h-3 w-3 flex-none fill-emerald-600 group-active:fill-current"
              >
                <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
              </svg> */}
              <span>Learn more</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
