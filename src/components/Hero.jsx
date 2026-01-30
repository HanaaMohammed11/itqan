import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <section
      className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${hero})` }}
    >
  
      <div className="absolute inset-0 bg-gradient-to-b from-islamic-blue-hero/90 via-islamic-blue-hero/20 to-islamic-blue-hero/80"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
          إتقان.. رحلتك نحو <br className="hidden md:block" /> فهم القرآن والعمل به
        </h1>

        <p className="text-lg md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          دورات متخصصة في القرآن الكريم وعلوم الشريعة الإسلامية تحت إشراف نخبة من المتخصصين.
        </p>
{/* 
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="bg-islamic-gold text-islamic-blue px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                ابدأ رحلتك الآن
             </button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;