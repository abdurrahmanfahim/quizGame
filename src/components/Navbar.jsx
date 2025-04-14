import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetQuiz } from "../slices/quizSlice/quizSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              onClick={() => dispatch(resetQuiz())}
              className="flex items-center"
            >
              <span className="text-2xl font-bold text-indigo-600">
                QuizMaster
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/categories"
              onClick={() => dispatch(resetQuiz())}
              className="text-gray-700 hover:text-indigo-600"
            >
              Categories
            </Link>
            <Link
              to="/history"
              onClick={() => dispatch(resetQuiz())}
              className="text-gray-700 hover:text-indigo-600"
            >
              History
            </Link>
            <Link
              to={'/categories'}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              onClick={() => dispatch(resetQuiz())}
            >
              Start Quiz
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
