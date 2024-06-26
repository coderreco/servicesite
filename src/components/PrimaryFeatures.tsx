'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import captureA from '@/images/capture1.png'
import captureB from '@/images/capture2.png'
import captureC from '@/images/capture3.png'
import captureD from '@/images/capture4.png'
import captureE from '@/images/capture5.png'

const features = [
  {
    title: 'Simple and Fast Website Creation',
    description:
      "Get a professional website for your cleaning business within two weeks, with transparent pricing and no hidden fees.",
    image: captureA,
  },
  {
    title: 'Optimized for Local SEO',
    description:
      "Increase visibility with service-area page templates designed to support regional SEO, ensuring your website ranks well in local searches.",
    image: captureB,
  },
  {
    title: 'Conversion-Focused Design',
    description:
      "Built to convert, designed to drive leads and sales with intuitive navigation and compelling calls-to-action.",
    image: captureC,
  },
  {
    title: 'Affordable Solutions',
    description:
      'Benefit from a professional website tailored to your market without the hefty price tag of a custom build, ensuring maximum value for your investment.',
    image: captureD,
  },
  {
    title: 'Efficient Management',
    description:
      'Overcome challenges of managing substandard websites generated by booking CRMs. We use Webflow to simplify the process, allowing you to efficiently manage your online presence and focus on delivering exceptional service.',
    image: captureE,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-emerald-600 pb-28 pt-20 sm:py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl max-w-3xl mx-auto tracking-tight text-white sm:text-4xl md:text-5xl">
            Empower Your Cleaning Business with a Better Website
          </h2>
          {/* <p className="mt-6 text-2xl tracking-tight text-emerald-100">
            Empower Your Cleaning Business with a Better Website
          </p> */}
          <p className="mt-6 max-w-2xl mx-auto text-base tracking-tight text-white">
            We make websites simple for cleaning businesses, providing you with a seamless solution to establish your online presence. With our collaborative approach, we work closely with you to import your content into our pre-made website template, creating a comprehensive, high-converting Webflow Website tailored to your needs.
            Connect with your customers and drive organic growth with an industry-focused website.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 gap-x-4 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-xl lg:p-4',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-emerald-600 lg:text-white'
                              : 'text-emerald-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-emerald-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-full overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-emerald-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt="a screenshot of a cleaning business website"
                        priority
                        sizes="(min-width: 1024px) 75rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
