import concessionImage from "../../assets/Imges/AboutNpi/aa.jpg"; // Update the path based on your project structure

const ConcessionForStudent = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="container mx-auto px-6 py-12">

        {/* Image Section */}
        <div className="mb-12">
          <img
            className="w-full rounded-lg shadow-lg"
            src={concessionImage}
            alt="National Polytechnic Institutes"
          />
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 space-y-6">
          {/* Heading Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Concession for Students
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              NPI is introducing new technologies, and as a result, the number of students is increasing accordingly.
              The current campus is not sufficient to accommodate our growing requirements. To cope with the increasing
              demand, an independent campus is needed. A new, large campus on one acre of land at Modhumoti Model Town,
              Amin Bazar, Greater Dhaka City, is going to be established very soon.
              <br />
              <br />
              Our vision is to be a recognized institution in both the national and international arenas for contributing
              to the development of highly skilled, employable graduates. We aim to be known as a valuable resource for
              industry and society, providing human resources with the required skills to meet today's challenges.
              <br />
              <br />
              We are committed to empowering our students to fulfill their academic and professional passions in a
              university that is diverse, welcoming, and inclusive for all students, faculty, and staff. By creating
              innovative connections with engineers, we hope to drive progress and technological advancement in our
              community and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcessionForStudent;
