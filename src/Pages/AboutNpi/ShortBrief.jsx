import React from "react";
import instituteImage from "../../assets/Imges/AboutNpi/all.jpg"; // Update the path to the image as per your project structure

const ShortBrief = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="container mx-auto px-6 py-12">

        {/* Image Section */}
        <div className="mb-12">
          <img
            className="w-full rounded-lg shadow-lg"
            src={instituteImage}
            alt="National Polytechnic Institutes"
          />
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 space-y-6">
          {/* Heading Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Short Brief of the Institute
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              The National Polytechnic Institutes are institutions under the enterprise NPI Engineers Ltd., established in 2001 to enhance national technical vocational education and training activities in the private sector. These institutes are part of a group of outstanding private polytechnics in Bangladesh, accredited by the Bangladesh Technical Education Board (BTEB).
              <br />
              <br />
              The institutes are located at Farmgate, Dhaka; Kamalapur, Faridpur; and Narangai, Manikganj Bus Stand, Manikganj. The Dhaka campus is known as NPI, Dhaka; the Faridpur campus as NPI, Faridpur; and the Manikganj campus as NPI, Manikganj. Additionally, BNIST in Goaldi, Sonargaon, Narayanganj is also part of the institute network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortBrief;
