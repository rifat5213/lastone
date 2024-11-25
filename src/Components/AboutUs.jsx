import { useState, useEffect, useRef } from "react";

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);
  const noticeBoardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the Notice Board is visible
    );

    if (noticeBoardRef.current) {
      observer.observe(noticeBoardRef.current);
    }

    return () => {
      if (noticeBoardRef.current) {
        observer.unobserve(noticeBoardRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gray-70 py-20">
      {/* About Us Header */}
      <div className={`text-center mb-12 ${animate ? "animate-fade-in-down" : "opacity-0"}`}>
        <h1 className="text-5xl font-extrabold text-gray-800">About Us</h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20">
        {/* Left Content */}
        <div className={`lg:w-1/2 mb-10 lg:mb-0 lg:pr-12 text-center lg:text-left ${animate ? "animate-fade-in-left" : "opacity-0"}`}>
          <h2 className="text-4xl font-semibold text-gray-900 mb-8">
            National Polytechnic Institute
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The vision of National Polytechnic Institute (NPI) is to become a leading private polytechnic and a top center of excellence in technical education and training. It attracts brilliant students, teachers, and technicians from all over the country.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Its mission is to produce highly skilled technical professionals by imparting high-quality education and training. NPI is committed to fostering intellectual growth, creativity, and the dissemination of technical knowledge, while promoting humanism and peace through education.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            As a social institution, NPI strives to bring positive changes to society through public services, ethical behavior, and social justice.
          </p>
        </div>

        {/* Right Content (Image) */}
        <div className={`lg:w-1/2 flex justify-center ${animate ? "animate-fade-in-right" : "opacity-0"}`}>
          <img
            className="w-full h-auto max-w-lg lg:max-w-2xl object-cover object-center rounded-lg shadow-lg"
            alt="National Polytechnic Institute"
            src="/src/assets/Imges/Cr & Pr/download.jfif"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-white py-10">
        <div
          ref={noticeBoardRef} // Reference to trigger animations
          className="grid grid-cols-1 xl:grid-cols-2 gap-12 px-5"
        >
          {/* Principal Card */}
          <div className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 w-[320px] mx-auto ${animate ? "animate-fade-in-up" : "opacity-0"}`}>
            <p className="text-center bg-blue-600 text-white py-2 font-semibold">
              Principal
            </p>
            <div className="p-5 flex flex-col items-center">
              <img
                src="/src/assets/Imges/Cr & Pr/2.jpg"
                alt="Principal"
                className="w-32 h-32 rounded-full border-4 border-gray-200 mb-4"
              />
              <p className="text-center text-gray-800 font-medium text-lg">
                Engr. Nirmal Chandra Sikder
              </p>
            </div>
          </div>

          {/* Chairman Card */}
          <div className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 w-[320px] mx-auto ${animate ? "animate-fade-in-up" : "opacity-0"}`}>
            <p className="text-center bg-blue-600 text-white py-2 font-semibold">
              Chairman
            </p>
            <div className="p-5 flex flex-col items-center">
              <img
                src="/src/assets/Imges/Cr & Pr/chairman_npi (1).jpg"
                alt="Chairman"
                className="w-32 h-32 rounded-full border-4 border-gray-200 mb-4"
              />
              <p className="text-center text-gray-800 font-medium text-lg">
                Md. Shamsur Rahman
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
