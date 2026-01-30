const About = () => {
  return (
    <div className="py-20 bg-gray-50/50 font-arabic" dir="rtl">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section 1: البروفايل الشخصي */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          {/* الصورة الشخصية مع إطار ديكوري */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 border-2 border-islamic-gold rounded-3xl z-0 transform translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-white p-3">
              <img 
                src="/images/teacher-israa.jpg" // تأكدي من مسار الصورة
                alt="المعلمة إسراء عبد الرازق" 
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>

          {/* النص التعريفي */}
          <div className="lg:col-span-7">
            <h2 className="text-islamic-gold font-bold text-xl mb-2">مؤسسة منصة إتقان</h2>
            <h1 className="text-5xl font-extrabold text-islamic-blue mb-6 leading-tight">
              الأستاذة/ إسراء عبد الرازق
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 border-r-4 border-islamic-gold pr-6">
              متخصصة في علوم القرآن الكريم والقراءات، وهبت وقتها لنشر رسالة الإتقان في تلاوة كتاب الله وفهم أحكامه بأسلوب يجمع بين التيسير والضبط العلمي.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm text-islamic-blue font-bold">
                 # معلمة_تجويد
               </div>
               <div className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm text-islamic-blue font-bold">
                 # علوم_شرعية
               </div>
            </div>
          </div>
        </div>

        {/* Section 2: الإجازات والدورات */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* صندوق الإجازات القرآنية */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-islamic-gold/10 rounded-2xl flex items-center justify-center mb-6 text-islamic-gold text-2xl">
              📜
            </div>
            <h3 className="text-2xl font-bold text-islamic-blue mb-6">الإجازات العلمية</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-islamic-gold">✦</span>
                <span className="text-gray-700 font-semibold text-lg">إجازة في القرآن الكريم برواية حفص عن عاصم.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-islamic-gold">✦</span>
                <span className="text-gray-700 font-semibold text-lg">إجازة في متني الجزرية والتحفة.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-islamic-gold">✦</span>
                <span className="text-gray-700 font-semibold text-lg">إجازة متصلة السند لرسول الله ﷺ.</span>
              </li>
            </ul>
          </div>

          {/* صندوق الدورات والخبرات */}
          <div className="bg-islamic-blue p-8 rounded-3xl shadow-sm text-white relative overflow-hidden">
             <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-islamic-gold text-2xl">
                  🎓
                </div>
                <h3 className="text-2xl font-bold mb-6">الدورات والخبرات</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 opacity-90">
                    <span className="text-islamic-gold">●</span>
                    <span>دورة إعداد معلمات القرآن الكريم وتأهيلهن تربوياً.</span>
                  </li>
                  <li className="flex items-start gap-3 opacity-90">
                    <span className="text-islamic-gold">●</span>
                    <span>خبرة أكثر من 5 سنوات في التدريس الأونلاين لمختلف الأعمار.</span>
                  </li>
                  <li className="flex items-start gap-3 opacity-90">
                    <span className="text-islamic-gold">●</span>
                    <span>دورة متخصصة في طرق تدريس لغير الناطقين بالعربية.</span>
                  </li>
                </ul>
             </div>
             {/* زخرفة خفيفة */}
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full"></div>
          </div>

        </div>

        {/* رسالة المنصة */}
        <div className="mt-20 text-center bg-islamic-gold/5 p-12 rounded-[40px] border border-islamic-gold/20">
          <h3 className="text-2xl font-bold text-islamic-blue mb-4">رسالتنا في إتقان</h3>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            نؤمن في منصة إتقان تحت إشراف الأستاذة إسراء أن التعليم الإسلامي أمانة، لذلك نسعى لجعله متاحاً بجودة عالمية وأسعار مناسبة، مع الالتزام التام بالمنهج الصحيح والضبط العلمي.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;