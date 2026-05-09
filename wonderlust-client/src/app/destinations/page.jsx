import DestinationCard from "@/components/DestinationCard";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:5000/destination", { cache: "no-store" });
  const destinations = await res.json();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-white border-b border-gray-100 px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-500 text-xs tracking-[0.3em] font-semibold uppercase mb-3">
            Explore the world
          </p>
          <h1
            className="text-5xl font-bold text-gray-900 leading-tight mb-4"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            All Destinations
          </h1>
          <p className="text-gray-500 text-lg max-w-xl">
            {destinations.length} curated travel experiences waiting for you.
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {destinations.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg">No destinations found yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <DestinationCard key={destination._id} destination={destination} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default DestinationPage;