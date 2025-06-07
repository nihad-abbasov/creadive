import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Creatrax",
    url: "https://creatrax.vercel.app",
    img: "/images/products/creatrax.png",
    description:
      "Creatrax — kreativ layihələrinizi və komandanızı asanlıqla idarə etməyə imkan verən müasir platformadır. Tapşırıqlar, layihələr və əməkdaşlıq üçün ideal seçim!",
  },
  {
    id: 2,
    name: "Mirror Studio",
    url: "https://mirror-cgi.vercel.app/",
    img: "/images/products/mirror.png",
    description:
      "Mirror Studio — CGI və 3D vizualizasiya üçün professional həllər. Məhsullarınızı və layihələrinizi daha cəlbedici təqdim edin.",
  },
  {
    id: 3,
    name: "21 Couture House",
    url: "https://21couturehouse.az/",
    img: "/images/products/21couture.png",
    description:
      "21 Couture House — zərif parçalar və incə detallarla hazırlanmış premium geyim kolleksiyaları. Sənətkarlığa və incəliyə olan dərin hörmətdən doğan atelye.",
  },
  {
    id: 4,
    name: "Buketchim",
    url: "https://buketchim.vercel.app/",
    img: "/images/products/buketchim.png",
    description:
      "Buketchim — gözəl buketlər və xüsusi anlar üçün professional florist xidmətləri. Təravətli güllər və unikal dizayn.",
  },
];

export default function Products() {
  return (
    <div className="py-16 min-h-screen bg-gradient-to-br from-[#1e2533] via-[#232b39] to-[#181f2a]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-2 tracking-tight drop-shadow-lg">
          Məhsullarımız
        </h1>
        <p className="text-lg text-blue-100 text-center mb-12 max-w-2xl mx-auto">
          Agentliyimizin təqdim etdiyi məhsullar və həllər.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-[#232b39]/90 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:bg-[#2a3444] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative mb-6">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-300 rounded-xl"
                />
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors duration-300">
                {product.name}
              </h2>
              <Link
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <span className="relative z-10">Daha ətraflı</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 relative z-10 transform transition-transform duration-300 group-hover/btn:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
