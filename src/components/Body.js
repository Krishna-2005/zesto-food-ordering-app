import { Link } from "react-router-dom";

const Body = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-orange-600 overflow-hidden px-6">
      {/* Left Image */}
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
        alt="Food Left"
        className="hidden md:block absolute left-0 bottom-0 w-72 object-cover drop-shadow-2xl"
      />

      {/* Right Image */}
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
        alt="Food Right"
        className="hidden md:block absolute right-0 bottom-0 w-72 object-cover drop-shadow-2xl"
      />

      {/* Center Content */}
      <div className="text-center text-white z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Your favorite <span className="text-yellow-300">food</span>, <br /> delivered fast.
        </h1>
        <p className="text-lg opacity-90 mb-6">
          Explore meals from top restaurants near you and enjoy doorstep delivery.
        </p>
        
        {/* Correct Link */}
        <Link to="/restaurants">
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Order Now
          </button>
        </Link>
      </div>  
    </section>
  );
};

export default Body;
