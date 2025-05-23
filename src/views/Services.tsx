"use client";

export default function Services() {
  return (
    <div className="py-16 min-h-screen bg-gradient-to-br from-[#1e2533] via-[#232b39] to-[#181f2a]">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg">Xidmətlərimiz</h1>
        <p className="text-lg text-blue-100 text-center mb-12 max-w-2xl mx-auto">
          Brendinizi inkişaf etdirmək üçün təqdim etdiyimiz əsas xidmətlər.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add your service cards here */}
          <div className="bg-[#232b39]/90 rounded-2xl p-6 shadow-lg text-center">
            <h2 className="text-xl font-bold text-white mb-2">Web Development</h2>
            <p className="text-gray-300">Modern və funksional veb saytlar və tətbiqlər.</p>
          </div>
          <div className="bg-[#232b39]/90 rounded-2xl p-6 shadow-lg text-center">
            <h2 className="text-xl font-bold text-white mb-2">UI/UX Design</h2>
            <p className="text-gray-300">İstifadəçi təcrübəsini artıran kreativ dizayn həlləri.</p>
          </div>
          <div className="bg-[#232b39]/90 rounded-2xl p-6 shadow-lg text-center">
            <h2 className="text-xl font-bold text-white mb-2">Digital Marketing</h2>
            <p className="text-gray-300">Brendinizi rəqəmsal dünyada tanıdın və böyüdün.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 