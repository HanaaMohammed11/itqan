import hero from '../assets/hero.png'
const Hero = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center text-white bg-cover"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >

      <div className="absolute inset-0 bg-gradient-to-b from-islamic-blue/80 via-islamic-blue/70 to-blue/80 center"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          إتقان.. رحلتك نحو فهم القرآن والعمل به
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200">
          دورات متخصصة في القرآن الكريم وعلوم الشريعة الإسلامية
        </p>

   
      </div>
    </section>
  );
};

export default Hero;
