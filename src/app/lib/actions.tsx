'use server'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY

const resend = new Resend(resendApiKey)

export const SubmitReview = async (formData: FormData) => {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    website: formData.get('website'),
    message: formData.get('message'),
    displayConsent: formData.get('displayConsent') === 'on' ? true : false,
  }

  const response = resend.emails.send({
    to: ['andrew@coderre.co', 'marcus@milezero.marketing'],
    from: 'Testimonials <testimonials@cleaningwebsitetemplates.com>',
    subject: 'New Testimonial',
    text: `
    Name: ${data.name}
    Email: ${data.email}
    Company: ${data.company}
    Website: ${data.website}
    Message: ${data.message}
    `,
  })

  redirect('/testimonial/thanks')
}

export const SubmitMockupRequest = async (formData: FormData) => {
  const data = {
    name: formData.get('name'),
    email: formData.get('email') as string,
    phoneNumber: formData.get('phone-number') as string,
    company: formData.get('company'),
    website: formData.get('website'),
    message: formData.get('message'),
    displayConsent: formData.get('displayConsent') === 'on' ? true : false,
  }

  const response = resend.emails.send({
    to: ['andrew@coderre.co', 'marcus@milezero.marketing'],
    from: 'Mockup Requests <mockups@cleaningwebsitetemplates.com>',
    subject: 'New Mockup Request',
    reply_to: [data.email, 'andrew@coderre.co', 'marcus@milezero.marketing'],
    text: `
    Name: ${data.name}
    Email: ${data.email}
    Company: ${data.company}
    Website: ${data.website}
    Message: ${data.message}
    `,
  })

  redirect('/mockup/success')
}
