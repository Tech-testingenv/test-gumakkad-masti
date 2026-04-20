"use client";

import CarDetails from "@/components/CarDetails";
import { useParams } from "next/navigation";
import { sedanCarsData  } from "@/data/PackagesData";
import EnquiryForm from "@/components/EnquiryFormDetails";
import Link from "next/link";

export default function Page() {
  const { slug } = useParams();

  // current car
  const car = sedanCarsData ?.cars?.[slug];

  // convert object → array
  const allcars = Object.values(sedanCarsData.cars );

  if (!car) {
    return <h1 className="text-center mt-10">Car Not Found</h1>;
  }

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">
            <CarDetails {...car} />
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* ENQUIRY FORM */}
<EnquiryForm type="car" carName={car.name}   showCarFields={true} />
              {/* OUR CARS */}
              <div className="border-2 border-purple-900 rounded-lg shadow p-4 bg-white">
                <h4 className="font-semibold mb-3">Our Cars</h4>

                <ul className="text-sm space-y-2 text-blue-600">

                  {allcars
                    .filter((item) => item.slug !== slug) // hide current car
                    .map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/${item.category}/${item.slug}`}
                          className="hover:underline"
                        >
                          » {item.name}
                        </Link>
                      </li>
                    ))}

                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}