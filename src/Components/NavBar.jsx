import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    {
      label: "About NPI",
      link: "/",
      dropdownItems: [
        { label: "NPI Profile", link: "/NpiProfile" },
        { label: "Concession for Students", link: "/ConcessionForStudent" },
        { label: "Our Dream", link: "/OurDream" },
        { label: "Controlling Authority", link: "/ControllingAuthority" },
        { label: "Short Brief of Institute", link: "/ShortBrief" },
      ],
    },
    {
      label: "Departments",
      link: "/",
      dropdownItems: [
        { label: "Computer Science", link: "/ComputerScience" },
        { label: "Electrical Engineering", link: "/ElectricalEngineering" },
        { label: "Mechanical Engineering", link: "/DiplomaInMechanicalEngineering" },
        { label: "Civil Engineering", link: "/CivilEngineering" },
        { label: "Automobile Engineering", link: "/AutomobileEngineering" },
        { label: "Food Technology", link: "/FoodTechnology" },
        { label: "Textile Engineering", link: "/TextileEngineering" },
        { label: "Architecture Engineering", link: "/ArchitectureEngineering" },
      ],
    },
    {
      label: "Academic",
      link: "/",
      dropdownItems: [
        { label: "Admission Info", link: "/AdmissionInfo" },
        { label: "Dhaka Campus", link: "/DhakaCampus" },
        { label: "Faridpur Campus", link: "/FaridpurCampus" },
        { label: "Manikganj Campus", link: "/ManikganjCampus" },
        { label: "Sonargaon Campus", link: "/SonargaonCampus" },
      ],
    },
    {
      label: "Teacher & Staff",
      link: "/",
      dropdownItems: [
        { label: "Faculty Directory", link: "#" },
        { label: "Administrative Staff", link: "#" },
      ],
    },
    {
      label: "Gallery",
      link: "/",
      dropdownItems: [
        { label: "Photo Gallery", link: "#" },
        { label: "Video Gallery", link: "#" },
      ],
    },
    { label: "Contacts", link: "/Contacts" },
  ];

  const renderDropdown = (dropdownItems) => (
    <div className="absolute hidden group-hover:block z-50 font-normal bg-blue-700 divide-y divide-gray-100 shadow w-44">
      <ul className="py-2 text-sm text-white">
        {dropdownItems.map((item, index) => (
          <li
            key={index}
            className="hover:bg-blue-800 hover:text-white rounded-none transition-all duration-300"
          >
            <Link
              to={item.link || "#"}
              className="block px-4 py-2"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/src/assets/Imges/Logo/images.jfif"
            className="h-12 w-auto"
            alt="Company Logo"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          id="menuToggleButton"
          type="button"
          aria-expanded={isMenuOpen}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div
          id="navbar-dropdown"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 bg-blue-600 md:bg-transparent border md:border-0 border-gray-200 rounded-lg md:rounded-none md:space-x-8 ml-auto">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className={`relative group hover:bg-blue-700 rounded-none transition-all duration-300 ${
                  item.dropdownItems ? "cursor-pointer" : ""
                }`}
              >
                <Link
                  to={item.link || "#"}
                  className="flex items-center justify-between w-full py-2 px-3 text-white"
                >
                  {item.label}
                  {item.dropdownItems && (
                    <svg
                      className="w-2.5 h-2.5 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  )}
                </Link>
                {item.dropdownItems && renderDropdown(item.dropdownItems)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
