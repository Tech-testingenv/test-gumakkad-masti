import Image from 'next/image'

export default function WhyChooseUs() {
  const services = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/15208/15208252.png',
      title: 'Positive Feedbacks',
      description: 'We are really proud to have received so many positive feedbacks for our service. This appreciation to our famous customers is worth more than any award to us.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/6114/6114604.png',
      title: 'Unbeatable Experience',
      description: 'Our experienced team spends a lot of time developing tour packages that ensure that your trip with us is an unforgettable experience.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2038/2038461.png',
      title: 'Finest Hotels',
      description: 'We carefully choose the best hotels in each category, and we have the best personal transportation options available.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/4961/4961759.png',
      title: '24*7 Customer Service',
      description: 'We are always here to help should you need assistance.'
    }
  ]

  return (
    <>
      <div className="text-center my-10">
        <p className="text-orange-500 font-semibold tracking-widest">Ghumakkar Masti</p>
        <h2 className="text-3xl font-bold text-blue-900 mt-2">Why Choose Us</h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
      </div>

      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border-4 border-orange-600 shadow-lg text-center">
              <div className="w-20 h-20 mx-auto flex items-center justify-center bg-white rounded-full shadow-lg border-4 border-orange-500">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-orange-500 font-semibold mt-4">{service.title}</h3>
              <hr className="w-10 mx-auto border-orange-500 my-2" />
              <p className="text-black text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
