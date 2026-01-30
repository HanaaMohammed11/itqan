import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-islamic-blue text-white p-4 shadow-xl border-b border-islamic-gold/20 font-arabic sticky top-0 z-50" dir="rtl">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* الشعار */}
        <Link to="/" className="text-2xl md:text-3xl font-bold text-islamic-gold tracking-wide">
          إتقان
        </Link>

        {/* زر الموبايل (Hamburger Icon) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-islamic-gold">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* الروابط - تختفي في الموبايل وتظهر كقائمة منسدلة */}
        <ul className={`
          fixed md:static top-[73px] right-0 w-full md:w-auto 
          bg-islamic-blue md:bg-transparent 
          flex flex-col md:flex-row items-center gap-y-6 md:gap-x-8 p-8 md:p-0
          transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 md:translate-x-0 md:opacity-100'}
        `}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className="relative py-1 hover:text-islamic-gold transition-colors group text-xl md:text-base">
              الرئيسية
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-islamic-gold transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)} className="relative py-1 hover:text-islamic-gold transition-colors group text-xl md:text-base">
              من نحن
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-islamic-gold transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-islamic-gold text-islamic-blue px-6 py-2 rounded-md font-bold hover:bg-white transition-colors w-full text-center">
              اتصل بنا
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;