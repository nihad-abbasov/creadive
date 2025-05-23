"use client";

const sections = [
  {
    title: "Biz kimik?",
    color: "from-blue-500 to-blue-400",
    content: `Salam! Biz Creadive Agency ailəsiyik. Bakının ürəyində yaranmış komandamızla kreativ həllərin arxasındakı gülər üzlərik. Bilirik ki, hər brendin öz hekayəsi var və biz bu hekayələri rəqəmsal dünyada ən gözəl şəkildə çatdırmağa can atırıq. Təcrübəli komandamızın hər bir üzvü işinə ürəkdən bağlıdır və yaradıcılığa aşiqdir. İstər ilk addımlarını atan gənc bir startup, istərsə də illərdir bazarda olan təcrübəli bir şirkət olun - qapımız və ürəyimiz sizə həmişə açıqdır. Biz sadəcə xidmət göstərmir, brendinizin inkişaf yolunda sizinlə çiyin-çiyinə addımlayırıq.`,
  },
  {
    title: "Missiyamız",
    color: "from-green-500 to-green-400",
    content: `Biz inanırıq ki, hər brendin öz unique səsi var - bizim işimiz bu səsi rəqəmsal dünyada eşitdirməkdir! Müştərilərimizlə əl-ələ verib, onların məqsədlərini öz məqsədimiz kimi qəbul edirik və bu yolda var gücümüzlə çalışırıq. Kreativ yanaşmamız və texnoloji gücümüzlə sizin uğur hekayənizin bir parçası olmağa can atırıq. Biz nəticələri sadəcə rəqəmlərlə deyil, yaratdığımız dəyər və qurduğumuz uzunmüddətli münasibətlərlə ölçürük.`,
  },
  {
    title: "Vizyonumuz",
    color: "from-purple-500 to-pink-400",
    content: `Böyük xəyallarımız var! Azərbaycan brendlərinin kreativlik və innovasiyada dünya səviyyəsində söz sahibi olduğu bir gələcək təsəvvür edirik. Amma bu sadəcə bir xəyal deyil - biz hər gün bu məqsədə doğru addımlayırıq. Trendləri izləmək bir yana, biz trendləri yaratmaq istəyirik! İnanırıq ki, yerli brendlərimizin dünya səviyyəsində tanınması üçün bütün potensialımız var, sadəcə doğru toxunuşlar lazımdır. Bu yolda biz öz kreativ toxunuşlarımızla fərq yaratmağa hazırıq!`,
  },
];

export default function About() {
  return (
    <div className="relative min-h-screen pb-24 bg-gradient-to-br from-[#1e2533] via-[#232b39] to-[#181f2a] overflow-hidden">
      {/* SVG/Pattern Background */}
      <svg
        className="absolute top-0 left-0 w-full h-64 opacity-30"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#60a5fa"
          fillOpacity="0.2"
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-24 pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 tracking-tight animate-fade-in">
          Haqqımızda
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-6 animate-fade-in delay-100">
          Kreativlik, texnologiya və insan mərkəzli yanaşma ilə brendinizi
          zirvəyə daşıyırıq.
        </p>
      </div>
      {/* Section Cards */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-10 px-4">
        {sections.map((section, idx) => (
          <div
            key={section.title}
            className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col gap-4 animate-slide-up animate-delay-${
              idx * 100
            }`}
            style={{
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <div
              className={`h-2 w-24 rounded-full mb-2 bg-gradient-to-r ${section.color}`}
            ></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
              {section.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
      {/* CTA Section */}
      <div className="relative z-10 max-w-2xl mx-auto mt-16 text-center animate-fade-in-up">
        <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-5 rounded-2xl shadow-xl hover:scale-105 transition-transform cursor-pointer">
          <span className="text-xl font-semibold">
            Bizimlə əməkdaşlıq etmək istəyirsiniz?
          </span>
          <br />
          <a href="/contact" className="underline text-lg font-bold">
            Əlaqə saxlayın
          </a>
        </div>
      </div>
      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .animate-fade-in-up {
          animation: fade-in 1.2s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .animate-delay-0 {
          animation-delay: 0ms;
        }
        .animate-delay-100 {
          animation-delay: 100ms;
        }
        .animate-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
}
