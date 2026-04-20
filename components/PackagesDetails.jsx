'use client'

export default function PackageDetail({ data }) {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="border-2 border-purple-900 rounded-lg p-4 shadow">
        <h2 className="font-bold text-lg text-blue-800">{data.title}</h2>
        <p className="text-sm mt-2">
          <strong>Destination Covered :</strong> {data.destination}
        </p>
      </div>

      {/* Itinerary */}
      {data.itinerary.map((item, index) => (
        <div key={index} className="border-2 border-purple-900 rounded-lg p-4 shadow">
          <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
      ))}

      {/* Inclusions */}
      <div className="border-2 border-purple-900 rounded-lg p-4 shadow">
        <h3 className="font-semibold mb-2">PACKAGE INCLUSIONS —</h3>
        <ul className="list-disc pl-5 text-sm space-y-1">
          {data.inclusions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Exclusions */}
      <div className="border-2 border-purple-900 rounded-lg p-4 shadow">
        <h3 className="font-semibold mb-2">PACKAGE EXCLUSIONS —</h3>
        <ul className="list-disc pl-5 text-sm space-y-1">
          {data.exclusions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}