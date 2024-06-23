
import { Container } from '@/components/Container'
import clsx from 'clsx'
import { Suspense } from 'react'
import { unstable_cache } from 'next/cache'
import { TweetSkeleton, EmbeddedTweet, TweetNotFound } from 'react-tweet'
import { getTweet as _getTweet } from 'react-tweet/api'
 
const getTweet = unstable_cache(
  async (id: string) => _getTweet(id),
  ['tweet'],
  { revalidate: 3600 * 24 }
)

  
let tweets = [
  {
    id: "1780593258189480184",
  },
  {
    id: "1780368896895471972",
  },
  {
    id: "1776269705453387834",
  },
  {
    id: "1785722436308160816"
  },
  {
    id: "1784007427677155410"
  },
  {
    id: "1781028143320432741"
  },
  {
    id: "1775913715302621603"
  },
  {
    id: "1755646703280005570"
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
        {/* <TestimonialContent /> */}
        <SocialTestimonials />
      </Container>
    </section>
  )
}

export function SocialTestimonials() {
  return (
      <div className="mx-auto mt-12 max-w-7xl">
        <ul className="max-w-7xl mx-auto md:columns-2 lg:columns-3 space-y-2 gap-2">
          {tweets.map((tweet, index) => (
            <li key={index} className="break-inside-avoid bg-transparent items-center justify-center h-full flex">
              <Suspense fallback={<TweetSkeleton />}>
                <Tweet id={tweet.id} />
              </Suspense>
            </li>
          ))}
        </ul>
      </div>
  )
}

const Tweet = async ({ id }: { id: string }) => {
  try {
    const tweet = await getTweet(id)
    return tweet ? <EmbeddedTweet tweet={tweet} /> : null
  } catch (error) {
    console.error(error)
    return <TweetNotFound error={error} />
  }
}
 