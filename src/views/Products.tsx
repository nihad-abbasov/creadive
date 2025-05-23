import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Creatrax",
    url: "https://creatrax.vercel.app",
    img: "/images/products/creatrax.png",
    description:
      "Creatrax — kreativ layihələrinizi və komandanızı asanlıqla idarə etməyə imkan verən müasir platformadır. Tapşırıqlar, layihələr və əməkdaşlıq üçün ideal seçim!",
  },
];

export default function Products() {
  return (
    <div className="py-16 min-h-screen bg-gradient-to-br from-[#1e2533] via-[#232b39] to-[#181f2a]">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg">
          Məhsullarımız
        </h1>
        <p className="text-lg text-blue-100 text-center mb-12 max-w-2xl mx-auto">
          Agentliyimizin təqdim etdiyi məhsullar və həllər.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#232b39]/90 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300"
            >
              <Image
                src={product.img}
                alt={product.name}
                width={0}
                height={0}
                sizes="100vw"
                className="w-32 h-32 object-contain rounded-xl mb-4 bg-[#181f2a] border border-[#2e3748]"
              />
              <h2 className="text-2xl font-bold text-white mb-2">
                {product.name}
              </h2>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:scale-105 transition-transform"
              >
                Daha ətraflı
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
