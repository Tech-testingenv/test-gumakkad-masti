// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms & Conditions - Ghumakkar Masti Holidays',
  description: 'Read our terms and conditions for booking holiday packages with Ghumakkar Masti. Privacy policy and booking terms.',
}

export default function TermsAndConditions() {
  return (
    <div className="bg-white min-h-screen">
      {/* NAV BAR */}
      {/* <Navbar /> */}
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Please read our terms and conditions carefully before booking with Ghumakkar Masti.
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Booking Terms</h2>
            <p className="text-gray-700 mb-4">
              All bookings are subject to availability and confirmation from Ghumakkar Masti. A booking is confirmed only upon receipt of full payment.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>50% advance payment required to confirm booking</li>
              <li>Balance payment must be made 7 days before travel date</li>
              <li>All prices are inclusive of taxes unless specified otherwise</li>
              <li>Package inclusions are as mentioned in the booking confirmation</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Cancellation Policy</h2>
            <p className="text-gray-700 mb-4">
              Cancellations must be communicated in writing to Ghumakkar Masti.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>30+ days before travel: Full refund minus 10% processing fee</li>
              <li>15-29 days before travel: 50% refund</li>
              <li>7-14 days before travel: 25% refund</li>
              <li>Less than 7 days: No refund</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We respect your privacy and are committed to protecting your personal information.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>We collect information only for booking and service purposes</li>
              <li>Your information is never shared with third parties without consent</li>
              <li>We use secure payment gateways for all transactions</li>
              <li>You can request deletion of your personal data at any time</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Liability</h2>
            <p className="text-gray-700 mb-4">
              Ghumakkar Masti is not responsible for any loss, injury, or damage sustained during the tour.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Travel insurance is recommended for all passengers</li>
              <li>We are not liable for weather-related disruptions</li>
              <li>We are not responsible for personal belongings during travel</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For any queries regarding these terms and conditions, please contact us:
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Governing Law</h2>
            <p className="text-gray-700">
              These terms and conditions shall be governed by and construed in accordance with the laws of India.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  )
}
