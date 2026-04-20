// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy - Ghumakkar Masti Holidays',
  description: 'Read our privacy policy for booking holiday packages with Ghumakkar Masti. How we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      {/* NAV BAR */}
      {/* <Navbar /> */}
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your privacy is important to us. Read how we collect, use, and protect your personal information.
          </p>
        </div>
      </div>

      {/* Privacy Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us when you book our services or contact us.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Personal details (name, email, phone number)</li>
              <li>Travel preferences and requirements</li>
              <li>Payment information (processed securely)</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use your information to provide and improve our travel services.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Process your bookings and reservations</li>
              <li>Communicate with you about your travel plans</li>
              <li>Send promotional offers (with your consent)</li>
              <li>Improve our services and website</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell or rent your personal information to third parties.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>We share information only with trusted partners for service delivery</li>
              <li>Hotels, transport providers, and tour operators</li>
              <li>Payment processors for secure transactions</li>
              <li>Only with your explicit consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>SSL encryption for all data transmission</li>
              <li>Secure payment gateways</li>
              <li>Regular security audits</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have rights regarding your personal information.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your data upon request</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies to enhance your experience on our website.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to improve our services</li>
              <li>Marketing cookies for personalized content</li>
              <li>You can control cookies in your browser settings</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For any privacy-related questions, please contact us:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-800">
                <strong>Email:</strong> booking@ghumakkarmasti.in<br/>
                <strong>Phone:</strong> +91 9821325561, +91-8744878555<br/>
                <strong>Address:</strong> Delhi, India
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Policy Updates</h2>
            <p className="text-gray-700">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  )
}
