import PackageDetail from '@/components/PackagesDetails'
import { packagesData } from '@/data/PackagesData'
import EnquiryFormDetails from '@/components/EnquiryFormDetails'

export default function Page({ params }) {

  const currentSlug = params.slug
const allPackages = [
  { name: "Paradise - Rajasthan Tour", slug: "paradise-rajasthan-tour" },
  { name: "Classic Rajasthan Package", slug: "classic-rajasthan-package" },
  { name: "Rajasthan Honeymoon Special", slug: "rajasthan-honeymoon-special" },
]

  const data = packagesData.find(pkg => pkg.slug === currentSlug)

  if (!data) {
    return <div className="p-10">Package Not Found</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* 🔥 MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2">
          <PackageDetail data={data} />
        </div>

        {/* RIGHT */}
        <div className="space-y-6 lg:sticky lg:top-24 h-fit">

<EnquiryFormDetails
  type="package"
  destinationName={data.slug}
/>
          <div className="border-2 border-purple-900 rounded-lg shadow p-4 bg-white">
            <h4 className="font-semibold mb-2">Our Tour Packages</h4>

            <ul className="text-sm space-y-2 text-blue-600">

              {allPackages
                .filter(pkg => pkg.slug !== currentSlug)
                .map((pkg, index) => (
                  <li key={index}>
                    <a
                      href={`/${data.category}/${pkg.slug}`}
                      className="hover:underline"
                    >
                      » {pkg.name}
                    </a>
                  </li>
                ))}

            </ul>
          </div>

        </div>

      </div>

    </div>
  )
}