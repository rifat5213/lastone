import { useState, useEffect, useRef } from "react";

const VideoSection = () => {
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

  return (
    <div ref={sectionRef} className="bg-gray-50 py-10">
      <h2
        className={`text-2xl font-bold text-center text-gray-800 mb-8 transition-opacity duration-700 ${
          isVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"
        }`}
      >
        Video Documentary
      </h2>
      <div
        id="yt"
        className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        {/* Video 1 */}
        <div
          className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 ${
            isVisible ? "animate-fade-in-left" : "opacity-0"
          }`}
        >
          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/P3A_MLkJ2Ik?si=Yylrq-irsa6-IzEk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 2 */}
        <div
          className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-700 ${
            isVisible ? "animate-fade-in-right" : "opacity-0"
          }`}
        >
          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/wBtg0MZpDr8?si=Qnq3lNXEF-786sYM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
