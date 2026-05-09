import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Top band */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <h2
              className="text-4xl font-bold text-white mb-4 tracking-tight"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Wanderlust
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              Your gateway to extraordinary travel experiences around the world.
              Crafted for curious minds and adventurous souls.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {["X", "in", "◎"].map((icon) => (
                <button
                  key={icon}
                  className="w-9 h-9 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 text-sm flex items-center justify-center transition-colors"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-white text-xs tracking-[0.2em] uppercase font-semibold mb-5">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              {["Home", "Destinations", "My Bookings", "Profile"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h3 className="text-white text-xs tracking-[0.2em] uppercase font-semibold mb-5">
              Support
            </h3>
            <ul className="space-y-3 text-sm">
              {["Help Center", "Terms of Service", "Privacy Policy", "FAQs"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-white text-xs tracking-[0.2em] uppercase font-semibold mb-5">
              Newsletter
            </h3>
            <p className="text-sm mb-4 leading-relaxed">
              Subscribe for exclusive travel deals and curated inspiration.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 bg-gray-900 border border-gray-700 px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-5 py-3 text-lg transition-colors flex-shrink-0">
                ↗
              </button>
            </div>

            <div className="mt-6 text-sm space-y-1.5">
              <p className="text-gray-500">786 901 1622</p>
              <p className="text-gray-500">info@wanderlust.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-gray-600">
          © 2026 Wanderlust. All rights reserved.
        </p>
        <p className="text-xs text-gray-700">
          Designed with care for travellers worldwide.
        </p>
      </div>
    </footer>
  );
};

export default Footer;