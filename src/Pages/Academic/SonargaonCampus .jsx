
const SonargaonCampus = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-6 py-24 flex flex-col items-center">
        
        {/* Image Section */}
        <img 
          className="w-full h-auto mb-10 object-cover object-center rounded-lg shadow-md sm:w-4/6 md:w-4/6 lg:w-2/3" 
          alt="BNIST Sonargaon Campus" 
          src="/src/assets/Imges/academic/BNIST, Sonargaon Campus.jpg" // Image should be placed in the public folder
        />

        {/* Text Content Section */}
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4 sm:text-4xl md:text-5xl lg:text-6xl">BNIST, Sonargaon Campus</h1>
          <p className="text-lg text-gray-700 mb-6 sm:text-xl md:text-2xl">
            Bahaul Haq NPI Institute of Science and Technology campus is located at Goaldi, Sonargaon, Narayanganj, providing easy communication access from all corners of the city. It is near Bahaul Haq Technical Institute.
            <br /><br />
            The contact information for the campus is as follows:
            <br />
            <strong>Cell:</strong> 01912-914924, 01305-275557, 01711-855030, 01629-669763
            <br />
            <strong>Email:</strong> <a href="mailto:bnist2019@gmail.com" className="text-blue-500">bnist2019@gmail.com</a>
            <br />
            <strong>Website:</strong> <a href="http://www.npi.edu.bd" target="_blank" rel="noopener noreferrer" className="text-blue-500">www.npi.edu.bd</a>
            <br />
            <strong>Principal:</strong> Md. Idris Ali
            <br />
            <strong>Mobile:</strong> 01711855030
          </p>
          
          {/* Diploma-in-Engineering Program Section */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 sm:text-4xl md:text-5xl lg:text-6xl">Diploma-in-Engineering Program</h2>
          <p className="text-lg text-gray-700 mb-6 sm:text-xl md:text-2xl">
            The Diploma-in-Engineering program at BNIST Sonargaon campus offers the following technologies and their respective seating capacities:
          </p>
          
          {/* Table for Technologies and Seating Capacity */}
          <div className="overflow-x-auto w-full">
            <table className="min-w-full table-auto border-collapse border border-gray-300 mb-8">
              <thead className="bg-blue-200">
                <tr>
                  <th className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold">SI No.</th>
                  <th className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold">Name of Technology</th>
                  <th className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold">Seating Capacity</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="hover:bg-gray-100 transition-colors duration-300">
                  <td className="px-6 py-3 border border-gray-300">1</td>
                  <td className="px-6 py-3 border border-gray-300">Civil Technology</td>
                  <td className="px-6 py-3 border border-gray-300">50</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors duration-300">
                  <td className="px-6 py-3 border border-gray-300">2</td>
                  <td className="px-6 py-3 border border-gray-300">Computer Technology</td>
                  <td className="px-6 py-3 border border-gray-300">50</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors duration-300">
                  <td className="px-6 py-3 border border-gray-300">3</td>
                  <td className="px-6 py-3 border border-gray-300">Electrical Technology</td>
                  <td className="px-6 py-3 border border-gray-300">50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SonargaonCampus;
