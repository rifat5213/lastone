
const TextileEngineering = () => {
  return (
    <section className="text-gray-600 body-font py-24">
      <div className="container mx-auto flex flex-col items-center justify-center px-6">
        
        {/* Image with improved margins and rounded corners */}
        <img 
          className="w-full max-w-2xl rounded-lg shadow-2xl mb-8 object-cover" 
          alt="Textile Engineering" 
          src="/src/assets/Imges/Department/Textile-Engineering-2.webp" 
        />

        {/* Single Box for everything */}
        <div className="bg-white shadow-xl rounded-lg p-6 max-w-4xl mx-auto mb-8">
          
          {/* Heading with responsive typography */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            Diploma in Textile Engineering
          </h1>

          {/* Paragraph with responsive font size and text alignment */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8 text-justify">
            A textile engineer is a professional who deals with various aspects of textile production, from research and development of fibers and yarns to designing and manufacturing fabric structures, garments, and other textile products. The textile industry includes a wide variety of jobs, including roles related to design, production, manufacturing, and retail. If you are interested in working in the textile industry, you may want to learn more about potential jobs and salaries.<br /><br />
            
            <strong>Textile Knowledge:</strong> Fabric manufacturing engineers must possess a deep understanding of textiles and their properties. From fibers and yarns to fabrics and finishes, engineers should be well-versed in the characteristics, performance attributes, and quality considerations of various textile materials.<br /><br />
            
            Textile engineering plays an important role in the fashion, clothing, and home furnishings industries, as well as in the development of high-tech textiles for use in a variety of applications, such as medical textiles, industrial textiles, and protective textiles.<br /><br />
          </p>

          {/* Best Fields list inside the same box */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            Best fields for a Textile Engineer:
          </h2>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Stylist</li>
            <li>Furniture Designer</li>
            <li>Fashion Designer</li>
            <li>Clothing/Textile Technologist</li>
            <li>Product Designer</li>
            <li>Interior and Spatial Designer</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TextileEngineering;
