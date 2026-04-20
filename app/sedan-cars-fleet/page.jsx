import VehicleSection from '@/components/VehicleSection'
import { sedanCarsData  } from '@/data/PackagesData'
import EnquiryForm from '@/components/EnquiryFormDetails' // <-- your existing form

export default function Page() {
  return (
    <div className="bg-white min-h-screen py-10">
      
      <div className="max-w-7xl mx-auto px-4">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE (VEHICLES) */}
          <div className="lg:col-span-2">
                 <VehicleSection
          Heading={sedanCarsData.Top.Heading}
            Paragraph={sedanCarsData.Top.Paragraph}
              data={Object.values(sedanCarsData.cars)}
                      />
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
<EnquiryForm type="car" />
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}


















  {/* Additional Information */}
      {/* <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Our Luxury Cars?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 0116 0zm-1-11a1 1 0 00-1 1v2a1 1 0 002 0V8a1 1 0 00-1-1zm0 4a1 1 0 100 2v2a1 1 0 102 0v-2a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Comfort</h3>
              <p className="text-gray-600">Experience ultimate comfort with our luxury car interiors and features.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 0116 0zm-1-11a1 1 0 00-1 1v2a1 1 0 002 0V8a1 1 0 00-1-1zm0 4a1 1 0 100 2v2a1 1 0 102 0v-2a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Drivers</h3>
              <p className="text-gray-600">Experienced chauffeurs ensure safe and comfortable journey.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 4a1 1 0 011 1v1a1 1 0 11-2 0V7a1 1 0 011-1zm0 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support throughout your journey.</p>
            </div>
          </div>
        </div>
      </div> */}