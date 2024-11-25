
const Footer = () => {
  return (
    <footer className="bg-blue-600 dark:bg-blue-800 text-white border-t-4 border-blue-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Logo Section */}
          <div className="flex flex-col items-start ms-6">
            <a href="#" className="flex items-center">
              <img
                src="/src/assets/Imges/Logo/images.jfif"
                className="h-20 transition-transform transform hover:scale-110"
                alt="NPI Logo"
              />
            </a>
            <p className="mt-4 text-sm text-gray-200">
              Dedicated to empowering students through quality education and skill development.
            </p>
          </div>

          {/* Keep in Touch Section */}
          <div className="mt-8 md:mt-0 ms-6">
            <h2 className="mb-4 text-lg font-semibold text-white uppercase">Keep in Touch</h2>
            <ul className="text-gray-200">
              <li className="mb-4 flex items-start gap-2">
                <i className="fa-solid fa-location-dot text-lg"></i>
                <span>
                  182/1 East Tejturi Bazar (In front of Govt.Biggan College), Farmgate, Dhaka-1215
                </span>
              </li>
              <li className="mb-4 flex items-start gap-2">
                <i className="fa-solid fa-envelope text-lg"></i>
                <a href="mailto:info@npi.edu.bd" className="hover:underline">
                  info@npi.edu.bd
                </a>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-phone text-lg"></i>
                <span>01799-445774, 01711-855030, 01711-349947</span>
              </li>
            </ul>
          </div>

          {/* Main Menu Section */}
          <div className="ms-6">
            <h2 className="mb-4 text-lg font-semibold text-white uppercase">Main Menu</h2>
            <ul className="text-gray-200">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Teachers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Staff
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Students
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-white" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <span className="text-sm text-gray-200 ms-6">
            © 2024 National Polytechnic Institute (NPI). All rights reserved.
          </span>
          <div className="flex items-center mt-4 sm:mt-0 space-x-4">
            <a
              href="https://www.facebook.com/npi.engineers"
              className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="fab fa-facebook-f text-xl"></i>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-200 hover:text-gray-900 dark:hover:text-white">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-200 hover:text-gray-900 dark:hover:text-white">
              <i className="fab fa-twitter text-xl"></i>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-200 hover:text-gray-900 dark:hover:text-white">
              <i className="fab fa-instagram text-xl"></i>
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
