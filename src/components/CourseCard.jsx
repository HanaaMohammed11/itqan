import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-islamic-blue">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.shortDescription}</p>
        <Link 
          to={`/courses/${course.id}`} 
          className="bg-islamic-gold text-white px-4 py-2 w-full text-center rounded hover:bg-blue-800 transition-colors inline-block"
        >
          تفاصيل
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;