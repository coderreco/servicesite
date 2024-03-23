import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import clsx from 'clsx'

// const testimonials = [
//   [
//     {
//       content:
//         'TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.',
//       author: {
//         name: 'Sheryl Berge',
//         role: 'CEO at Lynch LLC',
//         image: avatarImage1,
//       },
//     },
//     {
//       content:
//         'I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.',
//       author: {
//         name: 'Amy Hahn',
//         role: 'Director at Velocity Industries',
//         image: avatarImage4,
//       },
//     },
//   ],
//   [
//     {
//       content:
//         'The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.',
//       author: {
//         name: 'Leland Kiehn',
//         role: 'Founder of Kiehn and Sons',
//         image: avatarImage5,
//       },
//     },
//     {
//       content:
//         'There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.',
//       author: {
//         name: 'Erin Powlowski',
//         role: 'COO at Armstrong Inc',
//         image: avatarImage2,
//       },
//     },
//   ],
//   [
//     {
//       content:
//         'I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.',
//       author: {
//         name: 'Peter Renolds',
//         role: 'Founder of West Inc',
//         image: avatarImage3,
//       },
//     },
//     {
//       content:
//         'This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.',
//       author: {
//         name: 'Amy Hahn',
//         role: 'Director at Velocity Industries',
//         image: avatarImage4,
//       },
//     },
//   ],
// ]

let testimonials =  [
    // {
    //   content: "Pure Cleaning Victoria has experienced exponential growth since implementing this website. It has been the key component in lead generation, instrumental in attracting new customers and expanding our reach. Every aspect is carefully curated to our niche, and is undoubtedly the reason for our rapid success as a new company in the space",
    //   author: {
    //     name: "Lexi Vindisch",
    //     role: "Owner of Pure Cleaning Victoria"
    //   }
    // },
    {
      content: "This Website was a game-changer for our cleaning business. Their template not only streamlined our online presence but also significantly boosted our SEO. We couldn't be happier with the results.",
      author: {
        name: "John Smith",
        role: "Owner of Sparkle Clean Solutions"
      }
  },
  {
    content: "What you've already created is leaps and bounds ahead of our old Booking Koala website. Can't wait to see how much better it converts!",
    author: {
      name: "Max Tendero",
      role: "Owner of Keep A Cleaning Company"
    }
  },
  ]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by business owners.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our process is so simple that people can’t help but fall in love
            with it.
          </p>
        </div>
        <TestimonialContent />
      </Container>
    </section>
  )
}

export default function TestimonialContent() {
  return (
      <div className="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div className={clsx("flex flex-col pb-10 sm:pb-16 lg:pb-0 px-12", index !== 0 && "border-l border-gray-600")}>
            <figure className="py-4 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-500">
                <p>
                  "{testimonial.content}"
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="text-base">
                    <div className="font-semibold text-gray-900">{ testimonial.author.name }</div>
                    <div className="mt-1 text-gray-500">{ testimonial.author.role }</div>
                </div>
              </figcaption>
            </figure>
          </div>
          ))}
        </div>
      </div>
  )
}

