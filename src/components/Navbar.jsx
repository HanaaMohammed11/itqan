import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // رقم الواتساب الخاص بك
  const whatsappNumber = "201159277946";

  return (
    <nav className="bg-islamic-blue text-white p-4 shadow-xl border-b border-islamic-gold/20 font-arabic sticky top-0 z-50" dir="rtl">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* الشعار */}
        <Link to="/" className="text-2xl md:text-3xl font-bold text-islamic-gold tracking-wide">
          إتقان
        </Link>

        {/* زر الموبايل (Hamburger Icon) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-islamic-gold focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* الروابط */}
        <ul className={`
          fixed md:static top-[70px] right-0 w-full md:w-auto 
          bg-islamic-blue md:bg-transparent 
          flex flex-col md:flex-row items-center gap-y-6 md:gap-x-8 p-8 md:p-0
          transition-all duration-300 ease-in-out z-40
          ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 md:translate-x-0 md:opacity-100'}
        `}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className="relative py-1 font-bold hover:text-islamic-gold transition-colors group text-xl md:text-base">
              الرئيسية
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-islamic-gold transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)} className="relative py-1 hover:text-islamic-gold font-bold transition-colors group text-xl md:text-base">
              من نحن
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-islamic-gold transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li className="w-full md:w-auto">
            {/* زر التواصل عبر الواتساب */}
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("السلام عليكم، أريد الاستفسار عن منصة إتقان والدورات المتاحة.")}`}
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-islamic-gold text-islamic-blue px-6 py-2 rounded-md font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 w-full md:w-auto shadow-lg"
            >
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.893-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.891-11.891 11.891-2.007 0-3.974-.508-5.713-1.472L0 24zm6.756-3.845c1.517.891 3.013 1.357 4.673 1.357 5.123 0 9.292-4.17 9.292-9.295 0-2.483-.967-4.814-2.723-6.57-1.756-1.758-4.084-2.725-6.566-2.725-5.126 0-9.295 4.17-9.295 9.297 0 1.761.493 3.32 1.42 4.698l-.995 3.633 3.843-1.034z" />
              </svg>
              تواصل معنا
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;