import  { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false }); // Reset errors on change
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: formData.name.trim() === "",
      email: !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
        formData.email
      ),
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);
    isValid = !Object.values(newErrors).includes(true);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
      // Add your form submission logic here
    }
  };

  return (
    <section className="text-gray-600 body-font relative bg-white">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Map Section */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=182/1%2C%20East%20Tejturi%20Bazar%2C%20Farmgate.%2C%20Dhaka%2C%20Bangladesh&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{
              filter: "grayscale(1) contrast(1.2) opacity(0.4)",
            }}
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                182/1, East Tejturi Bazar, Farmgate, Dhaka, Bangladesh
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">info@npi.edu.bd</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">
                01799-445774, <br />
                01711-855030, <br />
                01711-349947
              </p>
            </div>
          </div>
        </div>
        {/* Form Section */}
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg shadow-lg p-8">
          <h2 className="text-gray-900 text-xl mb-4 font-bold title-font">
            Get in Touch
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            We value your feedback and would love to hear from you. Please share
            your thoughts or inquiries below.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-gray-600 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">Name is required.</p>
              )}
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  Please enter a valid email.
                </p>
              )}
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Write your message"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  Message is required.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg shadow-md transition duration-200"
            >
              Submit
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            We appreciate your time and effort in providing us valuable
            insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
