import { useEffect, useRef } from 'react';
import img from "../assets/image 3.png";

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 px-6 bg-white overflow-hidden transition-all duration-1000 transform opacity-0 translate-y-10"
      dir="rtl"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* الجانب الأيمن: الصورة مع خلفية ديكورية */}
          <div className="relative group">
            {/* إطار ديكوري خلف الصورة */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-islamic-gold rounded-2xl z-0 hidden md:block group-hover:bottom-0 group-hover:right-0 transition-all duration-500"></div>
            
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={img} 
                alt="عن منصة إتقان" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Overlay خفيف */}
              <div className="absolute inset-0 bg-islamic-blue/10 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* بطاقة صغيرة عائمة للإحصائيات أو التميز */}
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border-t-4 border-islamic-gold animate-bounce-slow">
              <p className="text-islamic-blue font-bold text-xl">+١٠٠٠ طالب</p>
              <p className="text-gray-500 text-sm">أتموا حفظ القرآن</p>
            </div>
          </div>

          {/* الجانب الأيسر: المحتوى النصي */}
          <div className="font-arabic text-right">
            <h2 className="text-islamic-gold font-bold text-lg mb-4 tracking-widest">من نحن</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-islamic-blue mb-8 leading-tight">
              رؤيتنا في <span className="text-islamic-gold">إتقان</span> لجيل قرآني معاصر
            </h3>
            
            <div className="space-y-6 text-gray-600">
              <p className="text-xl leading-relaxed relative pr-6 border-r-2 border-islamic-gold/30">
                إتقان هي منصة تعليمية إسلامية تهدف إلى نشر المعرفة الصحيحة للقرآن الكريم وعلوم الشريعة، لدمج الأصالة مع أساليب العصر الحديث.
              </p>
              
              <p className="text-lg leading-relaxed pr-6">
                نحن لا نقدم مجرد دروس، بل نبني رحلة إيمانية متكاملة تحت إشراف نخبة من المعلمين المعتمدين والمجازين، لضمان تجربة تعلم تجمع بين الإتقان والمتعة.
              </p>
            </div>

            {/* مميزات سريعة */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-islamic-gold/10 flex items-center justify-center text-islamic-gold font-bold">✓</span>
                <span className="font-bold text-islamic-blue">معلمون مجازون</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-islamic-gold/10 flex items-center justify-center text-islamic-gold font-bold">✓</span>
                <span className="font-bold text-islamic-blue">مناهج معتمدة</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;