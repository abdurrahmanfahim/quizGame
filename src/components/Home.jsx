import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to QuizMaster
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Test your knowledge across various categories
        </p>
        <Link
          to="/categories"
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-indigo-700 transition-colors"
        >
          Start Your Journey
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Multiple Categories</h3>
          <p className="text-gray-600">Choose from various topics that interest you</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Track Progress</h3>
          <p className="text-gray-600">Monitor your performance and improvement</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Interview Questions</h3>
          <p className="text-gray-600">Intermediate to advanced level interview questions</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
