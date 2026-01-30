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
        
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => filterCourses('all')} 
            className={`px-4 py-2 mx-2 rounded ${activeCategory === 'all' ? 'bg-islamic-gold text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            الكل
          </button>
          <button 
            onClick={() => filterCourses('quran')} 
            className={`px-4 py-2 mx-2 rounded ${activeCategory === 'quran' ? 'bg-islamic-gold text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            دورات القرآن
          </button>
          <button 
            onClick={() => filterCourses('sharia')} 
            className={`px-4 py-2 mx-2 rounded ${activeCategory === 'sharia' ? 'bg-islamic-gold text-white' : 'bg-gray-200 text-gray-700'}`}
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