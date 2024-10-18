import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-pink-500 to-red-500 text-white min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center h-[80vh]">
        <h1 className="text-6xl font-extrabold mb-4">Find Your Match</h1>
        <p className="text-lg max-w-md">
          Join millions of people who have connected through Tinder. Start
          swiping and find your perfect match today!
        </p>
        <Link
          to="/feed"
          className="mt-8 px-6 py-3 bg-white text-pink-500 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </Link>
      </div>

      {/* Feature Section */}
      <div className="bg-white text-gray-900 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose Tinder?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          <div className="bg-pink-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Easy to Use</h3>
            <p className="text-gray-700">
              Swipe left or right to match with people nearby.
            </p>
          </div>
          <div className="bg-pink-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Millions of Users</h3>
            <p className="text-gray-700">
              Join a global community of people looking for connections.
            </p>
          </div>
          <div className="bg-pink-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Instant Messaging</h3>
            <p className="text-gray-700">
              Chat instantly with your matches and start meaningful
              conversations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
