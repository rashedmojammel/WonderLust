import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin, LuArrowLeft } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/destination/${id}`, { cache: "no-store" });
  const destination = await res.json();

  const { imageUrl, price, destinationName, duration, country, description, category, departureDate } =
    destination;

  const formattedDate = departureDate
    ? new Date(departureDate).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero image */}
      <div className="relative w-full h-[55vh] overflow-hidden">
        <Image
          className="object-cover"
          alt={destinationName}
          src={imageUrl}
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Back link */}
        <Link
          href="/destinations"
          className="absolute top-6 left-6 flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-4 py-2 transition-colors"
        >
          <LuArrowLeft className="w-4 h-4" />
          Back to Destinations
        </Link>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          {category && (
            <span className="inline-block bg-cyan-500 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 mb-4">
              {category}
            </span>
          )}
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {destinationName}
          </h1>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <LuMapPin className="w-4 h-4" />
            <span>{country}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left - Description */}
        <div className="lg:col-span-2">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Overview
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">{description}</p>
        </div>

        {/* Right - Booking card */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 shadow-sm p-6 sticky top-24">
            <div className="mb-6">
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-1">Starting from</p>
              <p
                className="text-4xl font-bold text-gray-900"
                style={{ fontFamily: "Georgia, serif" }}
              >
                ${price}
                <span className="text-base font-normal text-gray-400 ml-1">/ person</span>
              </p>
            </div>

            <div className="space-y-4 mb-6 border-t border-gray-100 pt-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 flex items-center gap-2">
                  <FaRegCalendar className="w-3.5 h-3.5" />
                  Duration
                </span>
                <span className="font-medium text-gray-800">{duration}</span>
              </div>

              {formattedDate && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 flex items-center gap-2">
                    <FaRegCalendar className="w-3.5 h-3.5" />
                    Departure
                  </span>
                  <span className="font-medium text-gray-800">{formattedDate}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 flex items-center gap-2">
                  <LuMapPin className="w-3.5 h-3.5" />
                  Destination
                </span>
                <span className="font-medium text-gray-800">{country}</span>
              </div>
            </div>

            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-sm tracking-[0.15em] uppercase py-4 transition-colors duration-200">
              Book This Trip
            </button>

            <p className="text-center text-xs text-gray-400 mt-3">
              Free cancellation up to 48 hrs before departure
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DestinationDetailsPage;