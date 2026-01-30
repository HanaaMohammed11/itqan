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
    return <div className="text-center py-20">جاري التحميل...</div>;
  }

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <img src={course.image} alt={course.title} className="rounded-lg shadow-lg" />
          <div>
            <h1 className="text-4xl font-bold mb-6 text-islamic-blue">{course.title}</h1>
            <p className="text-lg leading-relaxed mb-8">{course.fullDescription}</p>
            <button
              onClick={() => setShowBookingForm(true)}
              className="bg-islamic-gold text-islamic-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              احجز الدورة
            </button>
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