"use client";

export default function Portfolio() {
  return (
    <div className="py-16 min-h-screen bg-gradient-to-br from-[#1e2533] via-[#232b39] to-[#181f2a]">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg">Portfolio</h1>
        <p className="text-lg text-blue-100 text-center mb-12 max-w-2xl mx-auto">
          Layihələrimiz və uğurlu işlərimiz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Add your portfolio items here */}
          <div className="bg-[#232b39]/90 rounded-2xl p-6 shadow-lg text-center">
            <h2 className="text-xl font-bold text-white mb-2">Layihə 1</h2>
            <p className="text-gray-300">Layihə haqqında qısa təsvir.</p>
          </div>
          <div className="bg-[#232b39]/90 rounded-2xl p-6 shadow-lg text-center">
            <h2 className="text-xl font-bold text-white mb-2">Layihə 2</h2>
            <p className="text-gray-300">Layihə haqqında qısa təsvir.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 