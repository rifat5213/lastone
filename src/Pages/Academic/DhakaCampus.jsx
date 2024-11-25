
const DhakaCampus= () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-6 py-24 flex flex-col items-center">
        {/* Image Section */}
        <img 
          src="/src/assets/Imges/academic/Dhaka Campus.jpg" 
          alt="Dhaka Campus" 
          className="rounded-lg shadow-lg mb-8 w-full max-w-4xl object-cover"
        />

        {/* Text Section */}
        <div className="text-center lg:w-2/3 w-full space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">National Polytechnic Institute Dhaka</h1>
          <p className="text-lg text-gray-700 mb-6">
            National Polytechnic Institute, Dhaka campus is situated at Farmgate, Dhaka, which is very convenient for communication from all corners of the capital. It is located just opposite to Govt. Biggan College. The map given below will help you find the campus easily.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The mailing address, telephone numbers, fax, and e-mail are:
            <br />
            182/1 East Tejturi Bazar (In front of Govt. Biggan College), Farmgate, Dhaka-1215
          </p>

          {/* Program Sections */}
          <div className="space-y-6">
            {/* Diploma-in-Engineering Program */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Diploma-in-Engineering Program</h2>
              <p className="text-gray-700 mb-4">
                The duration of this program is four years. In each year, there are two semesters. The name of the courses along with enrollment capacity in the first semester is as follows:
              </p>
              <table className="min-w-full text-left table-auto border-collapse border border-gray-300">
                <thead className="bg-blue-200">
                  <tr>
                    <th className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold">SI No.</th>
                    <th className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold">Name of Technology</th>
                    <th className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold">Enrollment Capacity</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="hover:bg-gray-100 transition-colors duration-300">
                    <td className="px-6 py-3 border border-gray-300">1</td>
                    <td className="px-6 py-3 border border-gray-300">Computer Technology</td>
                    <td className="px-6 py-3 border border-gray-300">150</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors duration-300">
                    <td className="px-6 py-3 border border-gray-300">2</td>
                    <td className="px-6 py-3 border border-gray-300">Civil Technology</td>
                    <td className="px-6 py-3 border border-gray-300">150</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors duration-300">
                    <td className="px-6 py-3 border border-gray-300">3</td>
                    <td className="px-6 py-3 border border-gray-300">Electrical Technology</td>
                    <td className="px-6 py-3 border border-gray-300">150</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors duration-300">
                    <td className="px-6 py-3 border border-gray-300">4</td>
                    <td className="px-6 py-3 border border-gray-300">Electronics Technology</td>
                    <td className="px-6 py-3 border border-gray-300">100</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors duration-300">
                    <td className="px-6 py-3 border border-gray-300">5</td>
                    <td className="px-6 py-3 border border-gray-300">Architecture Technology</td>
                    <td className="px-6 py-3 border border-gray-300">50</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors duration-300">
                    <td className="px-6 py-3 border border-gray-300">6</td>
                    <td className="px-6 py-3 border border-gray-300">Telecommunication Technology</td>
                    <td className="px-6 py-3 border border-gray-300">50</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors duration-300">
                    <td className="px-6 py-3 border border-gray-300">7</td>
                    <td className="px-6 py-3 border border-gray-300">Mechanical Technology</td>
                    <td className="px-6 py-3 border border-gray-300">100</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors duration-300">
                    <td className="px-6 py-3 border border-gray-300">8</td>
                    <td className="px-6 py-3 border border-gray-300">Automobile Engineering</td>
                    <td className="px-6 py-3 border border-gray-300">50</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors duration-300">
                    <td className="px-6 py-3 border border-gray-300">9</td>
                    <td className="px-6 py-3 border border-gray-300">Food Engineering</td>
                    <td className="px-6 py-3 border border-gray-300">50</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors duration-300">
                    <td className="px-6 py-3 border border-gray-300">10</td>
                    <td className="px-6 py-3 border border-gray-300">Tourism and Hospitality Management</td>
                    <td className="px-6 py-3 border border-gray-300">50</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Diploma-in-Textile Engineering Program */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Diploma-in-Textile Engineering Program</h2>
              <p className="text-gray-700 mb-4">
                To meet the rapidly growing demand in the textile market, NPI has introduced this program. The course will contribute greatly to meet the mid-level textile engineering manpower needs in the industry.
              </p>
              <p className="text-gray-700 mb-4">
                The duration of this program is four years, with two semesters in each year. The name of the course and the enrollment capacity in the first semester are as follows:
              </p>
              <table className="min-w-full text-left table-auto border-collapse border border-gray-300">
                <thead className="bg-blue-200">
                  <tr>
                    <th className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold">SI No.</th>
                    <th className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold">Name of Course</th>
                    <th className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold">Enrollment Capacity</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="hover:bg-gray-100 transition-colors duration-300">
                    <td className="px-6 py-3 border border-gray-300">1</td>
                    <td className="px-6 py-3 border border-gray-300">Textile Engineering</td>
                    <td className="px-6 py-3 border border-gray-300">100</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors duration-300">
                    <td className="px-6 py-3 border border-gray-300">2</td>
                    <td className="px-6 py-3 border border-gray-300">Garments Design & Pattern Making Technology</td>
                    <td className="px-6 py-3 border border-gray-300">50</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors duration-300">
                    <td className="px-6 py-3 border border-gray-300">3</td>
                    <td className="px-6 py-3 border border-gray-300">Fashion Design Technology</td>
                    <td className="px-6 py-3 border border-gray-300">50</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Speciality in Textile Engineering */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Speciality in Textile Engineering</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Laboratories and Workshops are well-equipped with modern digital machinery of the latest model.</li>
                <li>Teachers are highly qualified, experienced, and well-trained.</li>
                <li>Uninterrupted electric supply from own generation.</li>
                <li>Experienced technical staff from textile industries.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DhakaCampus;
