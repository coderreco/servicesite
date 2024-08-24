import { Container } from '@/components/Container'
import { Chat } from './Chat'
import { fetchFaqs } from '@/app/lib/sanity/queries'

const faqs = [
  {
    question: 'How long does it take to get my website up and running?',
    answer:
      'Typically, we can have your website ready in just under two weeks from onboarding to launch and publish.',
  },
  {
    question:
      'What information do you need from me to start building my website?',
    answer:
      "We'll need details about your business, brand, goals, and any specific features you want to include. This will all be very clearly delineated during your one hour onboarding call with us!",
  },
  {
    question:
      'Can I request specific features or customization for my website?',
    answer:
      "Yes, absolutely! That’s what your hour is for. We're happy to accommodate your requests for customization, with full transparency on what add-ons might entail.",
  },
  {
    question: 'Do you provide hosting services for the website?',
    answer:
      'Yes, we offer hosting services to ensure your website is live and accessible.',
  },
  {
    question: 'Will my website be optimized for search engines (SEO)?',
    answer:
      'Yes, we optimize your website for search engines to help improve visibility.',
  },
  {
    question: "Can I update the content on my website myself after it's built?",
    answer:
      'Yes, you will have full access and ownership to update content easily.',
  },
  {
    question:
      "Do you offer maintenance services for the website after it's launched?",
    answer:
      'Yes, we offer maintenance services to keep your website running smoothly.',
  },
  {
    question:
      'What happens if I need help or support after the website is handed over to me?',
    answer:
      'We provide ongoing support to ensure your satisfaction and address any concerns.',
  },
  {
    question:
      'Can you integrate booking or scheduling systems into the website?',
    answer:
      'Yes, we can integrate booking or scheduling systems to streamline your operations. We are familiar with the common CRMs in the industry (BookingKoala, Jobber and more!) and can integrate their scheduling features into Webflow seamlessly.',
  },
  {
    question:
      'Is there a limit to the number of pages or sections on my website?',
    answer:
      "No, there's no limit. We can accommodate your needs and set you up with the appropriate hosting plan to fulfill them.",
  },
  {
    question: "Do you provide training on how to use the website's features?",
    answer:
      "Yes, we offer training to ensure you're comfortable managing your website and this is integral to our entire process. Not only do we want to give you a fully operational, optimized site at the end - we want to equip you with the tools and knowledge so that you feel empowered with a sense of ownership to continue to work with it long term, on your terms.",
  },
  {
    question: 'Will my website be mobile-friendly and responsive?',
    answer:
      'This is the beauty of Webflow’s power and our carefully curated design - Yes, your website will be optimized for all devices for a seamless user experience.',
  },
  {
    question:
      'What happens if I want to make changes or updates to the website in the future?',
    answer:
      "Throughout the process, we equip you with instructions and tools to learn how to manage the basics. For any advanced alterations, simply let us know, and we'll assist you with any changes or updates you need.",
  },
  {
    question:
      'Are there any ongoing fees or hidden costs associated with the website?',
    answer:
      'No hidden fees. During our onboarding call we will discover the exact set up you need to fulfill your website vision and the pricing provided is transparent, with no surprises.',
  },
  {
    question:
      'Do you offer assistance with content creation or copywriting for the website?',
    answer:
      'Yes, this is absolutely part of the offer. Content creation in a collaborative capacity is part of this process!',
  },
  {
    question:
      'Can you help with domain registration or transferring an existing domain?',
    answer:
      'Yes, this is part of our handoff and we can assist with domain-related tasks to ensure a smooth process.',
  },
  {
    question: 'Will my website be secure and protected against cyber threats?',
    answer:
      'Yes, we take security seriously and implement measures to protect your website.',
  },
  {
    question:
      "What measures are in place to ensure the website's performance and speed?",
    answer:
      'The design was created to optimize your website for performance and speed to provide the best user experience.',
  },
  {
    question:
      "Can you provide examples of websites you've built for other cleaning businesses?",
    answer:
      'Absolutely, please take a look at our gallery showcasing successful use-cases of real businesses thriving with our design! We are happy to provide more portfolios of past projects/testimonials upon request.',
  },
  {
    question: 'How do I get started with your service?',
    answer:
      'Simply reach out to us, book your onboarding call and we can get started today!',
  },
]

export async function Faqs() {
  const questions = await fetchFaqs()

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Container className="relative grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Click the questions to get answers to your questions.
            <br />
            If you can’t find what you’re looking for, use our live chat to get
            in touch.
          </p>
        </div>
        <ul role="list" className="mx-auto mt-16 max-w-2xl lg:mt-0">
          {questions.map((faq: any, faqIndex: number) => (
            <li key={faqIndex}>
              <Chat faq={faq} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
