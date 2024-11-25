
const FaridpurCampus = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-6 py-24 flex flex-col items-center">
        
        {/* Image Section */}
        <img 
          className="lg:w-2/3 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg shadow-md"
          alt="Faridpur Campus"
          src="/src/assets/Imges/academic/Faridpur Campus.jpg" // Ensure this image is in the public folder
        />

        {/* Text Content Section */}
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">National Polytechnic Institute Faridpur</h1>
          <p className="text-lg text-gray-700 mb-6">
            National Polytechnic Institute, Faridpur campus is situated at Kamalapur, Faridpur, which is very convenient for communication from all corners of the city. It is located near the old campus of Rajendra University College and Faridpur Polytechnic Institute.
            <br /><br />
            The mailing address, telephone numbers, Fax, and e-mail are:
            <br />
            <strong>Address:</strong> 116, Eidgah Sarak, Kamalapur, Faridpur
            <br />
            <strong>Tel:</strong> 0631-65191
            <br />
            <strong>Mobile:</strong> 01712-074926, 01711-349947, 01711-855030
            <br />
            <strong>Principal:</strong> Paul Shyamal Halder
          </p>
          
          {/* Diploma-in-Engineering Program Section */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Diploma-in-Engineering Program</h2>
          <p className="text-lg text-gray-700 mb-6">
            The Diploma-in-Engineering program at NPI Faridpur offers various specializations. Below is the list of technologies and their enrollment capacities:
          </p>
          
          {/* Table for Technologies and Enrollment */}
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
                <td className="px-6 py-3 border border-gray-300">100</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors duration-300">
                <td className="px-6 py-3 border border-gray-300">3</td>
                <td className="px-6 py-3 border border-gray-300">Electrical Technology</td>
                <td className="px-6 py-3 border border-gray-300">50</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors duration-300">
                <td className="px-6 py-3 border border-gray-300">4</td>
                <td className="px-6 py-3 border border-gray-300">Electronics Technology</td>
                <td className="px-6 py-3 border border-gray-300">50</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors duration-300">
                <td className="px-6 py-3 border border-gray-300">5</td>
                <td className="px-6 py-3 border border-gray-300">Architecture Technology</td>
                <td className="px-6 py-3 border border-gray-300">50</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

export default FaridpurCampus;
