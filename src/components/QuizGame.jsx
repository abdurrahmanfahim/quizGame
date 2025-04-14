import { useSelector, useDispatch } from "react-redux";
import {
  submitAnswer,
  selectAnswer,
  showResult,
} from "../slices/quizSlice/quizSlice";
import { Link } from "react-router-dom";

const QuizGame = () => {
  const currentQuestionObj = useSelector(
    (state) => state.quiz.currentQuestionObj
  );
  const questionsCount = useSelector((state) => state.quiz.questionsCount);
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  const quizIsOver = useSelector((state) => state.quiz.quizIsOver);

  const dispatch = useDispatch();
  // console.log(currentQuestionObj.question);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold capitalize">{} Quiz</h2>
          <div className="text-lg font-semibold">
            Question:
            <span className="text-indigo-600">
              {currentQuestionIndex + 1}/{questionsCount}
            </span>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-xl mb-6">{currentQuestionObj.question}</p>

          <div className="space-y-4">
            {currentQuestionObj.options.map((answer, index) => (
              <button
                key={index}
                onClick={() => dispatch(selectAnswer(answer))}
                className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-indigo-600 focus:border-indigo-600 transition-colors cursor-pointer"
              >
                {answer}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end items-center">
          {quizIsOver ? (
            <Link
              to={"../results"}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              onClick={() => dispatch(showResult())}
            >
              Show Result
            </Link>
          ) : (
            <button
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              onClick={() => dispatch(submitAnswer())}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
