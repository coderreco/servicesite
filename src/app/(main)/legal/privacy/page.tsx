import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Page() {
  return (
    <>
      <Header />
      <main className="w-screen">
        <div className="prose mx-auto max-w-4xl px-4 py-24">
          <h1>Privacy Policy</h1>
          <p>
            <em>Last Updated: 11/01/24</em>
          </p>
          <hr />

          <h2>1. Introduction</h2>
          <p>
            At <strong>Cleaning Website Templates</strong> ("we," "us," or
            "our"), we are committed to protecting your privacy. This Privacy
            Policy outlines how we collect, use, and safeguard your personal
            information when you visit our website{' '}
            <a href="http://www.cleaningwebsitetemplates.com">
              www.cleaningwebsitetemplates.com
            </a>{' '}
            and utilize our services.
          </p>
          <hr />

          <h2>2. Information We Collect</h2>
          <p>
            We only collect personal information necessary to provide our
            services effectively. This may include:
          </p>
          <ul>
            <li>
              <strong>Contact Information</strong>: Your name, email address,
              phone number, and mailing address.
            </li>
            <li>
              <strong>Billing Information</strong>: Payment details required for
              processing transactions through Stripe.
            </li>
            <li>
              <strong>Business Information</strong>: Details about your business
              needed to tailor our website template to your brand.
            </li>
          </ul>
          <hr />

          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>
              <strong>Provide Services</strong>: Customize and deliver our
              website templates to meet your business needs.
            </li>
            <li>
              <strong>Process Payments</strong>: Manage billing and payment
              transactions securely via Stripe.
            </li>
            <li>
              <strong>Communicate</strong>: Send you updates, respond to
              inquiries, and provide customer support.
            </li>
            <li>
              <strong>Improve Services</strong>: Enhance our website and
              services based on your feedback and usage.
            </li>
          </ul>
          <hr />

          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell, rent, or share your personal information with third
            parties, except as necessary to provide our services:
          </p>
          <ul>
            <li>
              <strong>Service Providers</strong>: We use Stripe for secure
              payment processing. Your billing information is shared with Stripe
              solely for transaction purposes. Stripe's Privacy Policy can be
              found <a href="https://stripe.com/privacy">here</a>.
            </li>
            <li>
              <strong>Legal Obligations</strong>: We may disclose your
              information if required by law or to comply with legal processes.
            </li>
          </ul>
          <hr />

          <h2>5. Security Measures</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the internet is
            100% secure.
          </p>
          <hr />

          <h2>6. Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites or services,
            such as Stripe for billing. We are not responsible for the privacy
            practices of these external sites. We encourage you to review their
            privacy policies before providing any personal information.
          </p>
          <hr />

          <h2>7. Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies and similar technologies to enhance your browsing
            experience. Cookies are small files stored on your device that help
            us understand how you use our website. You can modify your browser
            settings to decline cookies if you prefer.
          </p>
          <hr />

          <h2>8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>
              <strong>Access</strong>: Request a copy of the personal
              information we hold about you.
            </li>
            <li>
              <strong>Correction</strong>: Ask us to correct any inaccuracies in
              your personal information.
            </li>
            <li>
              <strong>Deletion</strong>: Request the deletion of your personal
              data, subject to legal obligations.
            </li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information
            provided below.
          </p>
          <hr />

          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. Changes will be effective immediately upon posting on our
            website. Your continued use of our services signifies your
            acceptance of the revised policy.
          </p>
          <hr />

          <h2>10. Contact Information</h2>
          <p>
            For any questions or concerns regarding this Privacy Policy, please
            contact us at:
          </p>
          <p>
            <strong>Cleaning Website Templates</strong>
            <br />
            <a href="http://www.cleaningwebsitetemplates.com">
              www.cleaningwebsitetemplates.com
            </a>
            <br />
          </p>
          <hr />

          <p>
            By using our services, you acknowledge that you have read and
            understood this Privacy Policy.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
