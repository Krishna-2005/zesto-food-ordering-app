import { Link } from "react-router-dom";

const Body = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-orange-600 overflow-hidden px-4 sm:px-6">
      {/* Left Image */}
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
        alt="Food Left"
        className="hidden lg:block absolute left-0 bottom-0 w-40 sm:w-56 md:w-72 object-cover drop-shadow-2xl"
      />

      {/* Right Image */}
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
        alt="Food Right"
        className="hidden lg:block absolute right-0 bottom-0 w-40 sm:w-56 md:w-72 object-cover drop-shadow-2xl"
      />

      {/* Center Content */}
      <div className="relative text-center text-white z-10 max-w-md sm:max-w-xl md:max-w-2xl px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug sm:leading-tight">
          Your favorite <span className="text-yellow-300">food</span>, <br className="hidden sm:block" /> delivered fast.
        </h1>
        <p className="text-base sm:text-lg opacity-90 mb-6 px-2 sm:px-0">
          Explore meals from top restaurants near you and enjoy doorstep delivery.
        </p>

        {/* Correct Link */}
        <Link to="/restaurants">
          <button className="bg-white text-orange-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition text-sm sm:text-base">
            Order Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Body;
