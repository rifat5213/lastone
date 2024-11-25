
const FoodTechnology = () => {
  return (
    <section className="text-gray-600 body-font py-24">
      <div className="container mx-auto flex flex-col items-center justify-center px-6">

        {/* Hero Image */}
        <img 
          className="w-full max-w-3xl rounded-lg shadow-2xl mb-8 object-cover" 
          alt="Food Technology" 
          src="/src/assets/Imges/Department/Food-science-and-nutrition-vs-food-technology-990x500.jpg" 
        />

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 tracking-wide">
            Food Technology
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto px-6 py-8 bg-white shadow-xl rounded-lg text-justify">
            Food technology refers to food that has been modified through laboratory techniques to introduce genetic material that could not be obtained through conventional breeding or found in nature.<br /><br />

            Food engineers design and develop systems for the production, processing, distribution, and storage of food and agricultural materials. These systems are critical for ensuring food safety, quality, biorefining, and environmentally-friendly packaging.<br /><br />

            Graduates from food technology programs are employed by industry and consulting companies to develop innovative solutions that enhance food production and sustainability.<br /><br />

            One example of an advanced food preservation technique is freeze-drying, which involves removing water from fruits like blueberries while preserving their nutrients. This method helps prevent spoilage and extends the shelf life of the product.<br /><br />

            Technologies such as genome editing, cellular agriculture, and microbial-based food production are increasingly being applied to produce healthier, more sustainable food options with fewer resources and a lower carbon footprint. These innovations create an opportunity to reformulate food consumption patterns and encourage sustainable diets.<br /><br />

            The importance of food technology extends beyond simply keeping our bodies nourished; it also contributes to keeping us healthy by supporting immune functions, repairing injuries, and improving brain growth and function.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoodTechnology;
