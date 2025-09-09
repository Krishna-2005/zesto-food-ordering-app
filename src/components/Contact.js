const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F4] flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full">
        {/* Heading with orange color */}
        <h1
          className="text-3xl font-bold mb-4 text-center"
          style={{ color: "#fd9139" }}
        >
          Contact Us
        </h1>
        {/* Dark text for body */}
        <p className="text-gray-900 mb-6 text-center">
          Have questions or feedback? We'd love to hear from you!
        </p>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Your Name"
            className="mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fd9139] text-gray-900 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fd9139] text-gray-900 transition"
          />
          <textarea
            placeholder="Your Message"
            className="mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fd9139] text-gray-900 transition resize-none h-32"
          />
          <button
            type="submit"
            className="bg-[#fd9139] text-white font-semibold py-3 rounded-lg hover:bg-[#e57f2d] transition shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
