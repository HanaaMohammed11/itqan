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
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-islamic-blue">دوراتنا التعليمية</h2>
        
     <div className="flex flex-wrap justify-center gap-4 mb-12" dir="rtl">
  <button 
    onClick={() => filterCourses('all')} 
    className={`px-8 py-2 rounded-full font-bold transition-all duration-300 border-2
      ${activeCategory === 'all' 
        ? 'bg-islamic-gold border-islamic-gold text-white shadow-lg' 
        : 'bg-white border-gray-200 text-gray-500 hover:border-islamic-gold/50'}`}
  >
    الكل
  </button>
  <button 
    onClick={() => filterCourses('quran')} 
    className={`px-8 py-2 rounded-full font-bold transition-all duration-300 border-2
      ${activeCategory === 'quran' 
        ? 'bg-islamic-gold border-islamic-gold text-white shadow-lg' 
        : 'bg-white border-gray-200 text-gray-500 hover:border-islamic-gold/50'}`}
  >
    دورات القرآن
  </button>
  <button 
    onClick={() => filterCourses('sharia')} 
    className={`px-8 py-2 rounded-full font-bold transition-all duration-300 border-2
      ${activeCategory === 'sharia' 
        ? 'bg-islamic-gold border-islamic-gold text-white shadow-lg' 
        : 'bg-white border-gray-200 text-gray-500 hover:border-islamic-gold/50'}`}
  >
    دورات علوم شرعية
  </button>
</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;