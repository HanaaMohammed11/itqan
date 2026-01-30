import { useState } from 'react';

const BookingForm = ({ courseTitle, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: courseTitle
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `مرحباً، أريد حجز دورة ${formData.course}. اسمي: ${formData.name}، رقم هاتفي: ${formData.phone}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201159277946?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h3 className="text-2xl font-bold mb-6 text-islamic-blue">حجز الدورة</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">الاسم الكامل</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-islamic-blue"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">رقم الهاتف</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-islamic-blue"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="course" className="block text-gray-700 mb-2">الدورة</label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="bg-islamic-gold text-black px-6 py-2 rounded hover:bg-amber-900 transition-colors"
            >
              إرسال عبر واتساب
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;