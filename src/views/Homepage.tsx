import Link from "next/link";

const Homepage = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              We Create Digital
              <span className="text-blue-600"> Experiences</span>
              <br />
              That Matter
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We&apos;re a creative digital agency that helps brands grow
              through innovative design, development, and marketing solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/work"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive digital solutions for your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description:
                  "Custom websites and web applications built with the latest technologies.",
                icon: "💻",
              },
              {
                title: "UI/UX Design",
                description:
                  "Beautiful and intuitive user interfaces that enhance user experience.",
                icon: "🎨",
              },
              {
                title: "Digital Marketing",
                description:
                  "Strategic marketing solutions to grow your online presence.",
                icon: "📈",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
