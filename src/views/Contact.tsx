"use client";

export default function Contact() {
  return (
    <div className="py-16 min-h-screen bg-gradient-to-br from-[#1e2533] via-[#232b39] to-[#181f2a]">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg">Əlaqə</h1>
        <p className="text-lg text-blue-100 text-center mb-12 max-w-2xl mx-auto">
          Bizimlə əlaqə saxlayın və layihəniz barədə danışın.
        </p>
        <form className="bg-[#232b39]/90 rounded-2xl p-8 shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-200 mb-2">Adınız</label>
            <input type="text" id="name" className="w-full rounded-md border border-gray-600 bg-[#181f2a] text-white p-3" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-200 mb-2">Email</label>
            <input type="email" id="email" className="w-full rounded-md border border-gray-600 bg-[#181f2a] text-white p-3" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-200 mb-2">Mesajınız</label>
            <textarea id="message" rows={5} className="w-full rounded-md border border-gray-600 bg-[#181f2a] text-white p-3"></textarea>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-bold hover:scale-105 transition-transform">Göndər</button>
        </form>
      </div>
    </div>
  );
} 