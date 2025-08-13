import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Page() {
  return (
    <>
      <Header />
      <main className="w-screen">
        <div className="prose mx-auto max-w-4xl px-4 py-24">
          <h1>Terms of Service</h1>
          <p>Last updated: Aug 12, 2025</p>
          <h2>1. What You’re Getting</h2>
          <ul>
            <li>
              <strong>Your Website, Paid Over Time</strong> – We’ll build your
              cleaning business website using our optimized template, customized
              for your brand. Instead of paying for it all up front, you can
              make 24 monthly payments of $199. Once the site is fully paid for,
              you own it.
            </li>
            <li>
              <strong>Hosting & Support Included</strong> – While you’re making
              payments, hosting is included along with unlimited support
              requests for changes, fixes, new content, integrations, etc. We
              work on one request at a time to keep things efficient.
            </li>
            <li>
              <strong>Easy-to-Use Editor Access</strong> – You’ll have login
              access to make content changes yourself at any time. You can:
              <ul>
                <li>Edit text, photos, and other content on your pages</li>
                <li>
                  Add new pages using built-in templates (service pages,
                  location pages, project pages, blog posts, etc.)
                </li>
                <li>Publish new content instantly without waiting for us</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <strong>We Keep Admin Access –</strong> For security and to ensure
              site stability, we retain full admin rights. We’ll handle all
              technical updates, backups, and design-level changes.
            </li>
          </ul>
          <h2>2. Payment Options</h2>
          <ul>
            <li>
              <strong>Pay in Full</strong> – Pay the entire amount up front
              (includes hosting and support for 24 months).
            </li>
            <li>
              <strong>Pay Over Time </strong> – $499 upfront + $199/month for 24
              months. Hosting and support are included during this time.
            </li>
          </ul>
          <h2>3. Ending Your Contract Early</h2>
          <p>You have two choices:</p>
          <ol>
            <li>
              <strong>Cancel </strong> – Stop paying and lose access to the
              site.
            </li>
            <li>
              <strong>Buy Out </strong> – Pay the remaining balance in one lump
              sum, own the site, and choose whether to keep hosting/support with
              us or move elsewhere.
              <br />
            </li>
          </ol>
          <h2>4. After You Own the Site</h2>
          <p>When the 24 months are up (or after a buy-out), you can:</p>
          <ul>
            <li>Move the site to your own hosting, or</li>
            <li>Stay with us under a new hosting/support plan.</li>
          </ul>
          <h2>5. Support & Communication</h2>
          <ul>
            <li>
              <strong>Unlimited Support Requests </strong> – Covered items
              include design tweaks, content changes, adding new pages,
              connecting integrations, and more (only for your site with us).
            </li>
            <li>
              <strong>How to Send Requests </strong> – Submit tickets via our
              website or email. Multiple tickets can be submitted at once, but
              we handle them one at a time for quality and focus.
            </li>
            <li>
              <strong>What’s Not Covered </strong> – Requests for unrelated
              software, other websites, or third-party services not included in
              our build.
            </li>
          </ul>
          <h2>6. Your Responsibilities</h2>
          <ul>
            <li>
              Provide all text, images, and other content unless we agree
              otherwise.
            </li>
            <li>Follow all applicable laws when using your site.</li>
          </ul>
          <h2>7. Ownership & Rights</h2>
          <ul>
            <li>
              We own the site until it’s paid in full.
              <br />
            </li>
            <li>
              Once paid, it’s yours to use for your business, but the core
              template may also be used for other clients.
            </li>
          </ul>
          <h2>8. Legal Stuff</h2>
          <ul>
            <li>
              Services are provided “as is,” with no guarantees or warranties.
            </li>
            <li>We aren’t liable for indirect or consequential damages.</li>
            <li>These terms follow the laws of British Columbia, Canada.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
