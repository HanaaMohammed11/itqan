import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import coursesData from '../data/courses.json';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    const foundCourse = coursesData.find(c => c.id === parseInt(id));
    setCourse(foundCourse);
  }, [id]);

  if (!course) {
    return <div className="text-center py-20 font-arabic text-2xl">جاري التحميل...</div>;
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen font-arabic" dir="rtl">
      <div className="container mx-auto max-w-5xl px-4">
        
        {/* Header Section: Image & Main Info */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="h-[300px] md:h-full">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-islamic-gold font-bold mb-4 block opacity-80">تفاصيل الدورة التدريبية</span>
              <h1 className="text-4xl font-extrabold mb-6 text-islamic-blue leading-tight">{course.title}</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{course.fullDescription}</p>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-islamic-blue">{course.price || 'مجانية'}</span>
                <button
                  onClick={() => setShowBookingForm(true)}
                  className="bg-islamic-blue text-white px-10 py-4 rounded-xl font-bold hover:bg-islamic-gold transition-all shadow-lg shadow-islamic-blue/20"
                >
                  حجز مقعد الآن
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Info Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Right Column: Schedule & Timing */}
          <div className="md:col-span-2 space-y-8">
            {/* المواعيد */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-islamic-blue border-r-4 border-islamic-gold pr-3">
                المواعيد والجدول الزمني
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">تاريخ البدء</p>
                  <p className="font-bold text-islamic-blue">{course.startDate || 'يحدد لاحقاً'}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">أيام الدراسة</p>
                  <p className="font-bold text-islamic-blue">{course.days || 'السبت والإثنين'}</p>
                </div>
              </div>
            </div>

            {/* شروط الحضور والجزاءات */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-islamic-blue border-r-4 border-islamic-gold pr-3">
                شروط الحضور والسياسات
              </h2>
              <ul className="space-y-4">
                {(course.requirements || ["الالتزام بالوقت", "توفير نسخة من المصحف"]).map((req, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-islamic-gold mt-1">✔</span>
                    {req}
                  </li>
                ))}
              </ul>
              
              {/* الشروط الجزائية */}
              <div className="mt-8 p-4 bg-red-50 border-r-4 border-red-500 rounded-lg">
                <h3 className="font-bold text-red-800 mb-2">الشروط الجزائية:</h3>
                <p className="text-sm text-red-700 leading-relaxed">
                  {course.penalty || "في حال الغياب أكثر من 3 محاضرات بدون عذر، يتم إلغاء القيد تلقائياً."}
                </p>
              </div>
            </div>
          </div>

          {/* Left Column: Side Info */}
       <div className="space-y-8">
  <div className="bg-islamic-blue text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
     <div className="relative z-10">
        <h3 className="text-islamic-gold font-bold mb-4">هل لديك استفسار؟</h3>
        <p className="text-sm opacity-80 mb-6">فريق إتقان متاح للرد على تساؤلاتكم حول هذه الدورة.</p>
        
        {/* رابط الواتساب المطور */}
        <a 
          href={`https://wa.me/201159277946?text=${encodeURIComponent(`السلام عليكم، أريد الاستفسار عن دورة: ${course.title}`)}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg transition-all flex items-center justify-center gap-2 font-bold shadow-lg"
        >
          {/* أيقونة واتساب بسيطة */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.893-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.891-11.891 11.891-2.007 0-3.974-.508-5.713-1.472L0 24zm6.756-3.845c1.517.891 3.013 1.357 4.673 1.357 5.123 0 9.292-4.17 9.292-9.295 0-2.483-.967-4.814-2.723-6.57-1.756-1.758-4.084-2.725-6.566-2.725-5.126 0-9.295 4.17-9.295 9.297 0 1.761.493 3.32 1.42 4.698l-.995 3.633 3.843-1.034z" />
          </svg>
          تواصل عبر واتساب
        </a>
     </div>
     {/* Decorative Circle */}
     <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-islamic-gold/10 rounded-full"></div>
  </div>
</div>

        </div>
      </div>

      {showBookingForm && (
        <BookingForm 
          courseTitle={course.title} 
          onClose={() => setShowBookingForm(false)} 
        />
      )}
    </div>
  );
};

export default CourseDetails;