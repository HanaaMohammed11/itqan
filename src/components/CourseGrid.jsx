import { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import coursesData from '../data/courses.json';

const CourseGrid = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setCourses(coursesData);
    setFilteredCourses(coursesData);
  }, []);

  const filterCourses = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter(course => course.category === category));
    }
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-gray-50/50 font-cairo" dir="rtl">
      <div className="container mx-auto">
        
        {/* العنوان متجاوب */}
        <h2 className="text-2xl md:text-4xl font-black text-center mb-10 text-islamic-blue">
          دوراتنا التعليمية
        </h2>
        
        {/* فلاتر متجاوبة: تحسين التوزيع في الموبايل */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 max-w-2xl mx-auto">
          {[
            { id: 'all', label: 'الكل' },
            { id: 'quran', label: 'دورات القرآن' },
            { id: 'sharia', label: 'علوم شرعية' }
          ].map((cat) => (
            <button 
              key={cat.id}
              onClick={() => filterCourses(cat.id)} 
              className={`
                flex-1 md:flex-none min-w-[100px] text-center
                px-4 md:px-8 py-2 md:py-2.5 rounded-full text-sm md:text-base font-bold transition-all duration-300 border-2
                ${activeCategory === cat.id 
                  ? 'bg-islamic-gold border-islamic-gold text-white shadow-md scale-105' 
                  : 'bg-white border-gray-200 text-gray-500 hover:border-islamic-gold/30 hover:text-islamic-blue'}
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid متجاوب بذكاء */}
        {/* تم استخدام grid-cols-1 للموبايل، 2 للتابلت، 3 للشاشات الكبيرة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-400">
              لا توجد دورات متاحة في هذا القسم حالياً.
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default CourseGrid;