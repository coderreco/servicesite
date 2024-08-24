import { groq } from 'next-sanity'
import { client } from '../../../../sanity/lib/client'

export const fetchFaqs = async () => {
  const query = groq`*[_type == "faq"] {
    question,
    answer
  }`

  const faqs = await client.fetch(query, {}, { next: { revalidate: 60 } })

  return faqs
}
