"use client";

import Schema from "@/components/Schema";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Creatrax",
    url: "https://creatrax.az",
    // url: "https://creatrax.vercel.app",
    img: "/images/products/creatrax.png",
    description:
      "Creatrax — kreativ layihələrinizi və komandanızı asanlıqla idarə etməyə imkan verən müasir platformadır. Tapşırıqlar, layihələr və əməkdaşlıq üçün ideal seçim!",
  },
];

export default function Products() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-16 min-h-screen bg-white">
      {/* Schema Markup for Products */}
      {products.map((product) => (
        <Schema key={product.id} type="product" data={product} />
      ))}

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Məhsullarımız
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Agentliyimizin təqdim etdiyi məhsullar və həllər.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300"
            >
              <motion.div
                className="relative mb-6 w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={product.img}
                  alt={product.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </motion.div>

              <motion.h2
                className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300"
                variants={itemVariants}
              >
                {product.name}
              </motion.h2>

              <motion.p
                // mb-8
                className="text-gray-600 flex-grow"
                variants={itemVariants}
              >
                {product.description}
              </motion.p>

              {/* <motion.div variants={itemVariants}>
                <Link
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-2 bg-gradient-to-r text-blue-500 px-8 py-3 rounded-xl font-normal overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <span className="relative z-10">Daha ətraflı</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
