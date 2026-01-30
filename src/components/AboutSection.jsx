import { useEffect, useRef } from 'react';
import img from "../assets/image 3.png"
const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-islamic-blue">رؤيتنا في إتقان</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
            <img src={img} alt="Quran" className="rounded-lg shadow-lg mx-auto" />
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-6">
              إتقان هو منصة تعليمية إسلامية تهدف إلى نشر المعرفة الصحيحة للقرآن الكريم وعلوم الشريعة الإسلامية.
              نسعى لتقديم دورات عالية الجودة تساعد الطلاب على فهم الإسلام بشكل أعمق وتطبيقه في حياتهم اليومية.
            </p>
            <p className="text-lg leading-relaxed">
              معلمونا هم من أهل الاختصاص والخبرة في مجالاتهم، ونستخدم أحدث الطرق التعليمية لضمان تجربة تعلم ممتعة وفعالة.
            </p>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default AboutSection;