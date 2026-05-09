'use client'
import React, { useState } from "react";
import Link from "next/link";

const CATEGORIES = ["Beach", "Mountain", "City", "Adventure", "Cultural", "Luxury"];

const AddDestinationPage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("http://localhost:5000/destination", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(destination),
      });

      if (!res.ok) throw new Error("Failed to add destination");

      await res.json();
      setSuccess(true);
      e.target.reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/destinations"
            className="text-xs text-gray-400 hover:text-gray-600 tracking-widest uppercase transition-colors mb-4 inline-flex items-center gap-1"
          >
            ← Back to Destinations
          </Link>
          <p className="text-cyan-500 text-xs tracking-[0.3em] font-semibold uppercase mb-3">
            Contribute
          </p>
          <h1
            className="text-4xl font-bold text-gray-900"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Add a Destination
          </h1>
          <p className="text-gray-500 mt-2">
            Share a travel experience with the Wanderlust community.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {success && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-5 py-4 mb-8 flex items-center gap-3">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm font-medium">Destination added successfully!</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 mb-8 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="bg-white border border-gray-100 shadow-sm p-8 space-y-7">
          {/* Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-500 tracking-widest uppercase mb-2">
                Destination Name *
              </label>
              <input
                name="destinationName"
                required
                placeholder="e.g. Bali Paradise"
                className="w-full border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-300 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 tracking-widest uppercase mb-2">
                Country *
              </label>
              <input
                name="country"
                required
                placeholder="e.g. Indonesia"
                className="w-full border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-300 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 tracking-widest uppercase mb-2">
                Category *
              </label>
              <select
                name="category"
                required
                defaultValue=""
                className="w-full border border-gray-200 px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-cyan-400 transition-colors bg-white appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Select a category…
                </option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 tracking-widest uppercase mb-2">
                Price (USD) *
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                  $
                </span>
                <input
                  name="price"
                  type="number"
                  required
                  min="0"
                  placeholder="1299"
                  className="w-full border border-gray-200 pl-8 pr-4 py-3 text-gray-900 placeholder:text-gray-300 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 tracking-widest uppercase mb-2">
                Duration *
              </label>
              <input
                name="duration"
                required
                placeholder="e.g. 7 Days / 6 Nights"
                className="w-full border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-300 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Departure Date */}
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-500 tracking-widest uppercase mb-2">
                Departure Date *
              </label>
              <input
                name="departureDate"
                type="date"
                required
                className="w-full border border-gray-200 px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Image URL */}
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-500 tracking-widest uppercase mb-2">
                Image URL *
              </label>
              <input
                name="imageUrl"
                type="url"
                required
                placeholder="https://example.com/image.jpg"
                className="w-full border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-300 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-500 tracking-widest uppercase mb-2">
                Description *
              </label>
              <textarea
                name="description"
                required
                rows={5}
                placeholder="Describe the travel experience, highlights, and what makes it special…"
                className="w-full border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-300 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-300 text-white font-bold text-sm tracking-[0.15em] uppercase py-4 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Adding Destination…
                </>
              ) : (
                "Add Destination"
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddDestinationPage;