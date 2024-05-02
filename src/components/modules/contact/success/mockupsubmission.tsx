// This is the template for the Mockup Submission Success page

import { CalEmbed } from '@/components/CalEmbed'


export default function MockupSubmissionPageTemplate() {

  return (
    <div className="isolate px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-display tracking-tight text-gray-900 sm:text-4xl">We&apos;ll get to work.</h2>
        <p className="mt-2 text-base max-w-lg mx-auto leading-8 text-gray-600">
          Book a call with us to see your mockup and discuss how it will help your business convert.
        </p>
      </div>
      <figure className="mx-auto mt-12 max-w-6xl">
        <CalEmbed />
      </figure>
    </div>
  )
}

