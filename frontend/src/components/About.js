import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-[#F4F4F4] min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
          About Us
        </h1>
        <p className="text-gray-700 max-w-2xl text-center">
          At Zesto, we are passionate about connecting food lovers with the
          best restaurants through a seamless and enjoyable platform. Learn more
          about our mission, story, and values below.
        </p>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto mb-8 items-center hover:shadow-2xl transition">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.eatthis.com%2Fwp-content%2Fuploads%2Fsites%2F4%2F2023%2F01%2Ffunny-food-delivery-man.jpg&f=1&nofb=1&ipt=f6c79bfbc9a6ebd8929720d7a7fbec2dff75bbbd88d75877fd94fda32870f5c8"
          alt="Mission"
          className="rounded-xl mb-6 md:mb-0 w-full md:w-1/2"
        />
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To bring delicious food from your favorite restaurants directly to
            your doorstep, making food ordering fast, simple, and enjoyable for
            everyone.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row-reverse bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto mb-8 items-center hover:shadow-2xl transition">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F001%2F840%2Foriginal%2Ffood-delivery-service-design-vector.jpg&f=1&nofb=1&ipt=5e13b5680e9dfe38949035856ab7fd65fe5b100f36a02dcbd1c4d220b797b5d6"
          alt="Our Story"
          className="rounded-xl mb-6 md:mb-0 w-full md:w-1/2"
        />
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2025, Zesto started with the idea of connecting food
            lovers with restaurants through an easy-to-use platform. We focus on
            creating a seamless experience that saves time and delivers
            happiness.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#F4F4F4] p-8 max-w-5xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
            <div className="bg-[#00809D] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
              🚀
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-700">Get your food delivered hot and fresh in record time.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
            <div className="bg-[#00809D] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
              🍽️
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Restaurants</h3>
            <p className="text-gray-700">We partner only with the best restaurants in your city.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
            <div className="bg-[#00809D] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
              ✅
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Ordering</h3>
            <p className="text-gray-700">Our platform is user-friendly and simple to navigate.</p>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto mb-8 text-center hover:shadow-2xl transition">
        <h2 className="text-2xl font-semibold mb-6">
          Meet Our Founder
        </h2>
        <img src="https://via.placeholder.com/150" alt="Krishna S" className="rounded-full mx-auto mb-3" />
        <h3 className="font-semibold text-gray-900">Krishna S</h3>
        <p className="text-gray-600 text-sm">Founder</p>
      </div>

      {/* Modern Footer */}
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10" style={{ backgroundColor: "#1F1F1F", color: "#F4F4F4" }}>
  <nav className="grid grid-flow-col gap-4">
    <Link to="/about" className="link link-hover">About us</Link>
    <Link to="/contact" className="link link-hover">Contact us</Link>
    <Link to="/" className="link link-hover">Home</Link>
    <Link to="/restaurants" className="link link-hover">Restaurants</Link>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Zesto</p>
  </aside>
</footer>
    </div>
  );
};

export default About;
