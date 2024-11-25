
const CivilEngineering = () => {
  return (
    <section className="text-gray-600 body-font py-24">
      <div className="container mx-auto flex flex-col items-center justify-center px-6">
        {/* Reduced Image Size */}
        <img
          className="w-full max-w-2xl rounded-lg shadow-xl mb-8 object-cover"
          alt="hero"
          src="/src/assets/Imges//Department/Civil-Engineering-Hero-1600x900.jpg"
        />

        {/* Heading with responsive typography */}
        <div className="text-center">
          {/* Corrected Heading outside the paragraph */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Civil Engineering
          </h1>

          {/* Paragraph with responsive font size and text alignment */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8 px-6 py-8 bg-white shadow-xl rounded-lg text-justify">
            The Certification in Architecture prepares you for a new career as a
            professional interior decorator, interior designer, or interior
            architect. This course is also offered in evening classes for
            employees who do not have time to study by day. You can gain your new
            qualification in a way that suits your lifestyle.
            <br />
            <br />
            It is an in-depth course that covers the fundamentals of interior
            design and decoration, preparing you for a career in the interior
            design industry. Any interior design consultant working with interior
            spaces must have the skill and ability to select appropriate colour
            and style details, as this is the only way to create interior schemes
            that are visually attractive and coherent.
            <br />
            <br />
            To do this effectively, you need to have a thorough understanding of
            the elements of style and design, so that you can successfully
            deconstruct and reconstruct any style effectively, making changes and
            adaptations to reflect the individual preferences of your client.
            <br />
            <br />
            Developing these skills plays a significant part in this interior
            design and decoration course, however, the program goes beyond mere
            interior decoration; teaching you the fundamentals of professional
            interior design by planning interior layouts, designing
            soft-furnishings and lighting schemes, and learning how to communicate
            your ideas professionally to both clients and contractors.
            <br />
            <br />
            While architects focus more on the design, the primary responsibility
            of the engineer is to ensure the design meets all of the building
            codes and is structurally sound. Both architecture and engineering
            work requires in-depth consultation with urban planners, surveyors,
            and others who may be involved in the design and implementation of
            various elements of the project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CivilEngineering;
