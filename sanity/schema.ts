import { type SchemaTypeDefinition } from 'sanity'
import faq from './schemas/faq'
import testimonial from './schemas/testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [faq, testimonial],
}
