import MockupSubmissionPageTemplate from '@/components/modules/contact/success/mockupsubmission'
// import MockupPageTemplate from '@/components/modules/mockup/mockup-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a Free Mockup',
  description: 'Request a free mockup for your cleaning business website.',
}

// export default function Mockup() {
//   return <MockupPageTemplate />
// }

export default function Mockup() {
  return <MockupSubmissionPageTemplate />
}
