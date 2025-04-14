import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { resetQuiz } from '../slices/quizSlice/quizSlice';

const Results = () => {
  const correctAnswerPercent = useSelector((state)=> state.quiz.correctAnswerPercent)
  const score = useSelector((state)=> state.quiz.score)
  const questionsCount = useSelector((state)=> state.quiz.questionsCount)
  const dispatch = useDispatch()
  return ( 
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Quiz Complete!</h2>
        
        <div className="mb-8">
          <div className="text-6xl font-bold text-indigo-600 mb-2">{correctAnswerPercent}%</div>
          <p className="text-xl text-gray-600">Your Score</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Correct Answers</p>
              <p className="text-2xl font-bold text-green-600">{score}</p>
            </div>
            <div>
              <p className="text-gray-600">Wrong Answers</p>
              <p className="text-2xl font-bold text-red-600">{questionsCount - score}</p>
            </div>
          </div>
        </div>

        <div className="space-x-4">
          <Link
            to="/categories"
            onClick={()=> dispatch(resetQuiz())}
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Try Another Quiz
          </Link>
          <Link
            to="/"
            onClick={()=> dispatch(resetQuiz())}
            className="inline-block px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Results;
