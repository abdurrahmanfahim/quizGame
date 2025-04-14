import { useSelector, useDispatch } from "react-redux";

import { Link } from 'react-router-dom';
import { resetQuiz } from "../slices/quizSlice/quizSlice";

const History = () => {
  const dispatch = useDispatch()
  // Get history from Redux store
  const { history } = useSelector((state) => state.quiz);

  const getGradeColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-blue-600';
    if (percentage >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGradeEmoji = (percentage) => {
    if (percentage >= 80) return '🏆';
    if (percentage >= 60) return '🌟';
    if (percentage >= 40) return '📚';
    return '💪';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Your Quiz History
        </h2>

        {history.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-xl mb-6">
              You haven't taken any quizzes yet!
            </p>
            <Link
              to="/categories"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Take Your First Quiz
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-700">Best Score</h3>
                <p className="text-2xl font-bold text-green-600">
                  {Math.max(...history)}%
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-700">Average Score</h3>
                <p className="text-2xl font-bold text-blue-600">
                  {(history.reduce((a, b) => a + b, 0) / history.length).toFixed(1)}%
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-700">Quizzes Taken</h3>
                <p className="text-2xl font-bold text-purple-600">{history.length}</p>
              </div>
            </div>

            {/* Results List */}
            <div className="divide-y divide-gray-200">
              {history.map((result, index) => (
                <div
                  key={index}
                  className="py-4 flex items-center justify-between hover:bg-gray-50 rounded-lg px-4"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{getGradeEmoji(result)}</span>
                    <div>
                      <p className="text-gray-600">Attempt #{history.length - index}</p>
                      <p className={`text-xl font-bold ${getGradeColor(result)}`}>
                        {result}%
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        result >= 80
                          ? 'bg-green-500'
                          : result >= 60
                          ? 'bg-blue-500'
                          : result >= 40
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${result}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Performance Insights */}
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Performance Insights</h3>
              <div className="space-y-2">
                {history.length >= 3 && (
                  <p className="text-gray-700">
                    Last 3 attempts average:{' '}
                    <span className="font-semibold">
                      {(
                        history.slice(0, 3).reduce((a, b) => a + b, 0) / 3
                      ).toFixed(1)}%
                    </span>
                  </p>
                )}
                <p className="text-gray-700">
                  Times scored above 80%:{' '}
                  <span className="font-semibold">
                    {history.filter(score => score >= 80).length}
                  </span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <Link
                to="/categories"
                onClick={()=> dispatch(resetQuiz())}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Take Another Quiz
              </Link>
              <Link
                to="/"
                onClick={()=> dispatch(resetQuiz())}
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
