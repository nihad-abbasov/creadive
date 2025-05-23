"use client";

export default function Faq() {
  return (
    <div className="py-16 min-h-screen bg-gradient-to-br from-[#1e2533] via-[#232b39] to-[#181f2a]">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg">Tez-tez verilən suallar</h1>
        <p className="text-lg text-blue-100 text-center mb-12 max-w-2xl mx-auto">
          Ən çox verilən suallar və cavablar.
        </p>
        <div className="space-y-6">
          {/* Add your FAQ items here */}
          <div className="bg-[#232b39]/90 rounded-2xl p-6 shadow-lg">
            <h2 className="text-lg font-bold text-white mb-2">Sual 1</h2>
            <p className="text-gray-300">Cavab 1</p>
          </div>
          <div className="bg-[#232b39]/90 rounded-2xl p-6 shadow-lg">
            <h2 className="text-lg font-bold text-white mb-2">Sual 2</h2>
            <p className="text-gray-300">Cavab 2</p>
          </div>
        </div>
      </div>
    </div>
  );
} 