import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const DestinationCard = ({ destination }) => {
  const { imageUrl, description, duration, destinationName, category, country, price, _id } =
    destination;

  const categoryColors = {
    Beach: "bg-sky-100 text-sky-700",
    Mountain: "bg-emerald-100 text-emerald-700",
    City: "bg-violet-100 text-violet-700",
    Adventure: "bg-orange-100 text-orange-700",
    Cultural: "bg-amber-100 text-amber-700",
    Luxury: "bg-rose-100 text-rose-700",
  };

  return (
    <div className="group relative flex flex-col overflow-hidden bg-white border border-gray-100 hover:shadow-xl hover:shadow-black/8 hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={destinationName}
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
        />

        {/* Category badge */}
        {category && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 ${
              categoryColors[category] ?? "bg-gray-100 text-gray-600"
            }`}
          >
            {category}
          </span>
        )}

        {/* Price overlay */}
        <div className="absolute bottom-0 right-0 bg-cyan-500 text-white px-3 py-2">
          <p className="text-[10px] tracking-widest uppercase opacity-80 leading-none mb-0.5">
            From
          </p>
          <p className="text-lg font-bold leading-none">${price}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1 text-gray-400 text-xs mb-2">
          <LuMapPin className="w-3 h-3 flex-shrink-0" />
          <span className="truncate">{country}</span>
        </div>

        <h2 className="text-base font-bold text-gray-900 leading-snug mb-1 group-hover:text-cyan-600 transition-colors">
          {destinationName}
        </h2>

        {description && (
          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
            {description}
          </p>
        )}

        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <FaRegCalendar className="w-3 h-3" />
            <span>{duration}</span>
          </div>

          <Link
            href={`/destinations/${_id}`}
            className="text-xs font-semibold text-cyan-600 hover:text-cyan-700 tracking-wide uppercase transition-colors flex items-center gap-1"
          >
            Book Now
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;