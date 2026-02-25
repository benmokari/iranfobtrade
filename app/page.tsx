export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold leading-tight">
            Verified Iranian Mineral Suppliers
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Direct FOB offers • Fast quotations • Export documentation ready
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/request-quote"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Request a Quote
            </a>

            <a
              href="#products"
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              View Products
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Average response time: 4–12 hours
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-10">Commodities</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Iron Ore",
            "Copper Cathode",
            "Chromite",
            "Gypsum",
            "Bitumen"
          ].map((item) => (
            <div
              key={item}
              className="border border-gray-800 rounded-2xl p-6 hover:border-white transition"
            >
              <h3 className="text-xl font-semibold">{item}</h3>

              <a
                href="/request-quote"
                className="mt-6 inline-block text-sm font-medium text-gray-400 hover:text-white"
              >
                Get Quote →
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
