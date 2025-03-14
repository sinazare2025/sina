import React, { useState, useEffect } from 'react';
import { Mail, Palette, Code, User, FileCode, BookOpen, Send, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800",
      title: "طراحی لوگو",
      description: "طراحی لوگو برای برندهای مختلف"
    },
    {
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800",
      title: "توسعه وب‌سایت",
      description: "توسعه وب‌سایت‌های واکنش‌گرا"
    },
    {
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800",
      title: "طراحی رابط کاربری",
      description: "طراحی UI/UX برای اپلیکیشن‌ها"
    },
    {
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800",
      title: "طراحی پوستر",
      description: "طراحی پوستر برای رویدادها"
    },
    {
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800",
      title: "برندینگ",
      description: "طراحی هویت بصری برند"
    },
    {
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800",
      title: "طراحی اپلیکیشن",
      description: "توسعه اپلیکیشن‌های موبایل"
    },
    {
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800",
      title: "عکاسی محصول",
      description: "عکاسی حرفه‌ای از محصولات"
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800",
      title: "مشاوره دیجیتال",
      description: "مشاوره در زمینه حضور آنلاین"
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800",
      title: "آموزش طراحی",
      description: "دوره‌های آموزشی طراحی گرافیک"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(portfolioItems.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getCurrentSlideItems = () => {
    const start = currentSlide * itemsPerSlide;
    return portfolioItems.slice(start, start + itemsPerSlide);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">سینا زارع | گرافیست و برنامه‌نویس</h1>
          <nav className="mt-4">
            <ul className="flex justify-center space-x-8 space-x-reverse">
              <li><a href="#about" className="hover:text-blue-200 transition-colors flex items-center gap-2"><User size={18} />درباره من</a></li>
              <li><a href="#portfolio" className="hover:text-blue-200 transition-colors flex items-center gap-2"><Palette size={18} />نمونه‌کارها</a></li>
              <li><a href="#blog" className="hover:text-blue-200 transition-colors flex items-center gap-2"><BookOpen size={18} />وبلاگ</a></li>
              <li><a href="#contact" className="hover:text-blue-200 transition-colors flex items-center gap-2"><Mail size={18} />تماس با من</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
            <User className="inline" size={24} />
            درباره من
          </h2>
          <p className="text-gray-700 leading-relaxed">
            سلام! من سینا زارع هستم، یک گرافیست و برنامه‌نویس با علاقه به طراحی و توسعه وب. در این وب‌سایت می‌توانید نمونه‌کارهای من و مطالب مرتبط با طراحی و برنامه‌نویسی را مشاهده کنید.
          </p>
        </section>

        <section id="portfolio" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
            <Palette className="inline" size={24} />
            نمونه‌کارها
          </h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getCurrentSlideItems().map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
            <BookOpen className="inline" size={24} />
            وبلاگ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">مقاله اول: اهمیت طراحی واکنش‌گرا</h3>
              <p className="text-gray-600">در دنیای امروز، طراحی واکنش‌گرا یک ضرورت است. این مقاله به بررسی اهمیت آن می‌پردازد.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">مقاله دوم: ابزارهای مفید برای گرافیست‌ها</h3>
              <p className="text-gray-600">معرفی ابزارهای کاربردی برای طراحی گرافیکی و بهبود کارایی.</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
            <Mail className="inline" size={24} />
            تماس با من
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6 flex items-center gap-2 text-gray-700">
              <Phone size={18} />
              <span>شماره تماس: ۰۹۹۶۴۵۰۸۲۶۵</span>
            </div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="نام شما"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="پیام شما"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                ارسال پیام
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>تمامی حقوق محفوظ است. © 2024 | طراحی شده توسط سینا زارع</p>
        </div>
      </footer>
    </div>
  );
}

export default App;