import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const AdmissionInfo = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center min-h-screen">
      <div className="text-center bg-white p-10 rounded-2xl shadow-2xl w-full max-w-6xl flex flex-col items-center">
        <div className="mb-8">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Admission Info</h1>
          <p className="text-gray-600 text-lg mb-4">
            Better If You Contact with Us
          </p>

          <Link to="/Contacts" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
            Contact Us
          </Link>
        </div>

        <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg shadow-inner w-full">
          <img 
            src="/src/assets/Imges/academic/ad-1.jpg" 
            alt="Beautiful Image" 
            className="rounded-lg w-full h-auto max-w-[1600px] max-h-[2000px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default AdmissionInfo;
