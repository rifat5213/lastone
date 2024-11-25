import authorityImage from "../../assets/Imges/AboutNpi/Controlling Authority.jpg"; // Update the path as per your project structure

const ControllingAuthority = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="container mx-auto px-6 py-12">

        {/* Image Section */}
        <div className="mb-12">
          <img
            className="w-full rounded-lg shadow-lg"
            src={authorityImage}
            alt="National Polytechnic Institutes"
          />
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 space-y-6">
          {/* Heading Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Controlling Authority
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              The National Polytechnic Institutes (NPIs) are operated under the
              administrative and financial management support of NPI Engineers Ltd.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              NPI is fully accredited and affiliated by the Bangladesh Technical
              Education Board (BTEB), the only national accreditation and affiliation
              authority in Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControllingAuthority;
