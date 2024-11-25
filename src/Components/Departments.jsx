import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; 

const Departments = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true); // Start animation
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef} 
      className={`flex justify-center items-center min-h-screen bg-gray-100 ${animate ? "animate-fade-in" : "opacity-0"}`}
    >
      <div className="w-full max-w-7xl bg-gray-100 p-8 rounded-xl">
        {/* Main Section Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Our Departments</h1>
          <p className="text-gray-600 mt-2">Explore the various departments we offer.</p>
        </div>

        {/* Department Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {[
            { id: 1, title: "Computer Science & Technology", image: "../../src/assets/Imges/Department/computer-science-310-current-trends-in-computer-science-it_1167935_large.jpeg", link: "/ComputerScience" },
            { id: 2, title: "Architecture Engineering", image: "../../src/assets/Imges/Department/arcblog.webp", link: "/ArchitectureEngineering" },
            { id: 3, title: "Mechanical Engineering", image: "../../src/assets/Imges/Department/mj_11408_3.jpg", link: "/DiplomaInMechanicalEngineering" },
            { id: 4, title: "Electrical Engineering", image: "../../src/assets/Imges/Department/1717559401php2MH8ZR.jpeg", link: "/ElectricalEngineering" },
            { id: 5, title: "Automobile Engineering", image: "../../src/assets/Imges/Department/Automobile Engineering.webp", link: "/AutomobileEngineering" },
            { id: 6, title: "Textil Engineering", image: "../../src/assets/Imges/Department/Textile-Engineering-2.webp", link: "/TextileEngineering" },
            { id: 7, title: "Civil Engineering", image: "../../src/assets/Imges/Department/Civil-Engineering-Hero-1600x900.jpg", link: "/CivilEngineering" },
            { id: 8, title: "Food-science", image: "../../src/assets/Imges/Department/Food-science-and-nutrition-vs-food-technology-990x500.jpg", link: "/FoodTechnology" },
          ].map((dept) => (
            <Link to={dept.link} key={dept.id} className="flex flex-col">
              <div
                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 ${
                  animate ? "animate-slide-up" : "opacity-0"
                }`}
              >
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-48 rounded-t-xl overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-lg font-semibold text-white bg-blue-600 p-2 text-center rounded-b-xl">
                  {dept.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
