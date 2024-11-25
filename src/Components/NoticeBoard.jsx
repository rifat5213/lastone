import { useEffect, useState, useRef } from "react";

const NoticeBoard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
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

  const notices = [
    { id: 1, file: "IMG20240301120928.jpg", label: "Download Image" },
    { id: 2, file: "IMG20240301120928.jpg", label: "Download Image" },
    { id: 3, file: "IMG20240301120928.jpg", label: "Download Image" },
    { id: 4, file: "IMG20240301120928.jpg", label: "Download Image" },
    { id: 5, file: "IMG20240301120928.jpg", label: "Download Image" },
  ];

  return (
    <div className="bg-gray-100 py-10" ref={sectionRef}>
      {/* Notice Board Section */}
      <div
        className={`mt-10 mb-14 relative overflow-hidden shadow-lg rounded-xl mx-auto max-w-[90%] lg:max-w-[1300px] ${
          isVisible ? "animate-fade-in-down" : "opacity-0"
        }`}
      >
        <table className="table-fixed w-full text-left border-collapse overflow-hidden">
          <thead className="uppercase bg-gradient-to-r from-blue-600 to-blue-800 text-gray-100">
            <tr>
              <th className="py-4 text-center font-bold w-[10%] border border-blue-700">
                Sr No.
              </th>
              <th className="py-4 text-center font-bold border border-blue-700">
                Notice Board
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-700 divide-y divide-gray-300">
            {notices.map((notice, index) => (
              <tr
                key={notice.id}
                className={`hover:bg-gray-100 transition duration-300 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                <td className="py-4 text-center font-medium border border-gray-200">
                  {notice.id}
                </td>
                <td className="py-4 text-center border border-gray-200">
                  <a
                    href={notice.file}
                    download={notice.file}
                    className="text-blue-600 underline hover:text-blue-800 transition duration-300"
                  >
                    {notice.label}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NoticeBoard;
