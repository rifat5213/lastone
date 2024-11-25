
const ManikganjCampus = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-6 py-24 flex flex-col items-center">
        
        {/* Image Section */}
        <img 
          className="w-full h-96 mb-10 object-cover object-center rounded-lg shadow-md sm:w-4/6 md:w-3/4 lg:w-2/3"
          alt="Manikganj Campus"
          src="/src/assets/Imges/academic/Manikganj Campus.jpg" // Ensure the image is in the public folder
        />

        {/* Text Content Section */}
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 sm:text-5xl md:text-6xl">National Polytechnic Institute, Manikganj</h1>
          <p className="text-lg text-gray-700 mb-6 sm:text-xl md:text-2xl">
            National Polytechnic Institute, Manikganj campus is situated on the Dhaka-Aricha Highway, near the Cornell Malek Tower and Anser BDP Camp in Manikganj.
            <br /><br />
            The mailing address, telephone numbers, fax, and e-mail are:
            <br />
            <strong>Address:</strong> 173/3 Narangi, East of the Bus Stand, Kachabazar, Manikganj, Dhaka, Bangladesh
            <br />
            <strong>Mobile:</strong> 01735-782829, 01711-349947, 01711-855030
            <br />
            <strong>Email:</strong> <a href="mailto:npi.manikganj@gmail.com" className="text-blue-500">npi.manikganj@gmail.com</a>
          </p>
          
          {/* Diploma-in-Engineering Program Section */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 sm:text-4xl md:text-5xl">Diploma-in-Engineering Program</h2>
          <p className="text-lg text-gray-700 mb-6 sm:text-xl md:text-2xl">
            The Diploma-in-Engineering program at NPI Manikganj offers the following specializations and their respective enrollment capacities:
          </p>
          
          {/* Table for Technologies and Enrollment */}
          <div className="overflow-x-auto w-full">
            <table className="min-w-full table-auto border-collapse border border-gray-300 mb-8">
              <thead className="bg-blue-200">
                <tr>
                  <th className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold">SI No.</th>
                  <th className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold">Technology</th>
                  <th className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold">Enrollment Capacity</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="hover:bg-gray-100 transition-colors duration-300">
                  <td className="px-6 py-3 border border-gray-300">1</td>
                  <td className="px-6 py-3 border border-gray-300">Computer Technology</td>
                  <td className="px-6 py-3 border border-gray-300">50</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors duration-300">
                  <td className="px-6 py-3 border border-gray-300">2</td>
                  <td className="px-6 py-3 border border-gray-300">Civil Technology</td>
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
}

export default ManikganjCampus;
