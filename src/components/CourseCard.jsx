import { Link } from 'react-router-dom';
const CourseCard = ({ course }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full" dir="rtl">
      {/* Container الصورة */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* المحتوى */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-islamic-blue group-hover:text-islamic-gold transition-colors font-arabic">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {course.shortDescription}
        </p>
        
        {/* الزر */}
        <Link 
          to={`/courses/${course.id}`} 
          className="bg-islamic-gold text-islamic-blue font-bold py-3 w-full text-center rounded-xl hover:bg-islamic-blue hover:text-white transition-all duration-300"
        >
          عرض تفاصيل الدورة
        </Link>
      </div>
    </div>
  );
};
export default CourseCard;