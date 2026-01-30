import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-islamic-blue text-white p-4 shadow-xl border-b border-islamic-gold/20 font-arabic" dir="rtl">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* الشعار (Logo) */}
        <Link to="/" className="text-3xl font-bold text-islamic-gold tracking-wide hover:opacity-80 transition-opacity">
          إتقان
        </Link>

        {/* الروابط (Links) */}
        <ul className="flex items-center gap-x-8">
          <li>
            <Link to="/" className="relative py-1 hover:text-islamic-gold transition-colors group">
              الرئيسية
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-islamic-gold transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="relative py-1 hover:text-islamic-gold transition-colors group">
              من نحن
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-islamic-gold transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            {/* زر إضافي كلمسة جمالية */}
            <Link to="/contact" className="bg-islamic-gold text-islamic-blue px-5 py-2 rounded-md font-bold hover:bg-white transition-colors">
              اتصل بنا
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;