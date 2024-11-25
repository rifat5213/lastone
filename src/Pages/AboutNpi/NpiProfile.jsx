const NpiProfile = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6 py-12">
        {/* Image Section */}
        <div className="mb-12">
          <img
            className="w-full rounded-lg shadow-lg"
            src="/src/assets/Imges/AboutNpi/all.jpg"
            alt="National Polytechnic Institutes"
          />
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 space-y-6">
          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Introduction</h2>
            <p className="text-base leading-relaxed text-gray-700">
              The National Polytechnic Institutes are the institutions of the enterprise, NPI Engineers Ltd. established in 2001 to enhance national technical vocational education and training activities at the private sector, and accordingly join the group of outstanding private polytechnics in the country accredited by the Bangladesh Technical Education Board (BTEB). The institutes are organized and managed at locations Farmgate, Dhaka, at Kamalapur, Faridpur and at Narangai, Manikganj Bus Stand, Manikganj. The campus at Dhaka is known as NPI, Dhaka, one at Faridpur as NPI, Faridpur and another at 173/3 Narangai, Manikganj Bus Stand, Manikganj as NPI, Manikganj.
              <br />
              <br />
              All the National Polytechnic Institutes are tastefully and adequately furnished and equipped to suit appropriate teaching-learning. Efficient higher educated experienced and dedicated teachers staff the institutes. Suitable residential accommodations for students under NPI management are available in the vicinity of the campuses.
              <br />
              <br />
              NPI, Dhaka has become an internationally reputed largest Government approved private polytechnic institute in the country. The National Polytechnic Institutes (NPIs) operate the 4-year Diploma-in-Engineering in the fields of Civil Technology, Computer Technology, Electrical Technology, Telecommunication Technology, Electronics Technology, Architecture Technology, Construction Technology, Architecture & Interior Design Technology and Instrumentation & Process Control Technology and Diploma-in-Textile Engineering programs to produce skilled manpower. About 4,000 students are currently enrolled in the three campuses.
              <br />
              <br />
              National Polytechnic Institutes currently have around 75 full-time and 150 part-time faculty members; all of them are highly qualified, well-trained and experienced.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Mission & Vision</h2>
            <p className="text-base leading-relaxed text-gray-700">
              The mission of NPI is to produce highly skilled technical manpower. This mission is achieved by imparting high-quality technical education and training so that individuals can achieve their intellectual, social, and personal potentials. NPI is committed to developing human capital by sharpening creative thinking. In addition to creation and dissemination of technical knowledge, its mission includes promotion of humanism and peace through education. As a social institution, NPI endeavors to induce changes for betterment of society as a whole through public services, and through promotion of ethical behavior and social justice.
              <br />
              <br />
              The vision of National Polytechnic Institutes (NPI) is to become a leading private polytechnic and remain as a top center of excellence in technical education and training. It aims at attracting brilliant students, teachers, and technicians from all over the country.
            </p>
          </div>

          {/* Strategy Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Strategy</h2>
            <p className="text-base leading-relaxed text-gray-700">
              To fulfill its mission, NPI applies six basic strategies:
            </p>
            <ul className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>It offers academic programs to produce technical manpower to meet the demand of industries;</li>
              <li>
                It offers socially relevant academic programs which meet the changing needs of the students coming from
                different backgrounds and seeking different career goals in technical fields;
              </li>
              <li>It hires highly skilled, qualified, trained, and experienced academics to teach the courses it offers;</li>
              <li>
                It selects students through a rigorous selection process and admits only those students who demonstrate
                the potential to pursue and complete the programs of study they select;
              </li>
              <li>
                It provides appropriate physical and digital infrastructure facilities, logistic supports, and an
                environment conducive to teaching and learning;
              </li>
              <li>
                It practices the principles of good governance that ensure best management practices and encourage
                academic freedom and faculty-governance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NpiProfile;
