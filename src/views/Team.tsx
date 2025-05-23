"use client";

export default function Team() {
  return (
    <div className="py-16 min-h-screen bg-gradient-to-br from-[#1e2533] via-[#232b39] to-[#181f2a]">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg">Komandamız</h1>
        <p className="text-lg text-blue-100 text-center mb-12 max-w-2xl mx-auto">
          Yaradıcı və peşəkar komandamızla tanış olun.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add your team member cards here */}
          <div className="bg-[#232b39]/90 rounded-2xl p-6 shadow-lg text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-blue-500 mb-4"></div>
            <h2 className="text-xl font-bold text-white mb-1">Üzv 1</h2>
            <p className="text-gray-300">Vəzifə</p>
          </div>
          <div className="bg-[#232b39]/90 rounded-2xl p-6 shadow-lg text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-green-500 mb-4"></div>
            <h2 className="text-xl font-bold text-white mb-1">Üzv 2</h2>
            <p className="text-gray-300">Vəzifə</p>
          </div>
          <div className="bg-[#232b39]/90 rounded-2xl p-6 shadow-lg text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-purple-500 mb-4"></div>
            <h2 className="text-xl font-bold text-white mb-1">Üzv 3</h2>
            <p className="text-gray-300">Vəzifə</p>
          </div>
        </div>
      </div>
    </div>
  );
} 