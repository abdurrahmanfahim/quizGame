import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { categoryChoose } from '../slices/quizSlice/quizSlice';


const QuizCategories = () => {
  const dispatch = useDispatch()
  const categories = [
    { id: 1, name: 'Basics', icon: '📘', color: 'bg-blue-100', identifier: 'jsBasicsQuiz' },
    { id: 2, name: 'Variables & Scope', icon: '🔑', color: 'bg-yellow-100', identifier: 'jsVariablesScopeQuiz' },
    { id: 3, name: 'Functions & Arrow Functions', icon: '➡️', color: 'bg-green-100', identifier: 'jsFunctionsQuiz' },
    { id: 4, name: 'ES6 Features', icon: '✨', color: 'bg-red-100', identifier: 'jsES6Quiz' },
    { id: 5, name: 'Asynchronous JavaScript', icon: '⏳', color: 'bg-purple-100', identifier: 'jsAsyncQuiz' },
    { id: 6, name: 'DOM & Events', icon: '🖱️', color: 'bg-pink-100', identifier: 'jsDomEventsQuiz' },
    { id: 7, name: 'Operators & Comparisons', icon: '➕', color: 'bg-orange-100', identifier: 'jsOperatorsQuiz' },
    { id: 8, name: 'Objects & Arrays', icon: '📂', color: 'bg-teal-100', identifier: 'jsObjectsArraysQuiz' },
    { id: 9, name: 'Advanced Concepts', icon: '🚀', color: 'bg-indigo-100', identifier: 'jsAdvancedQuiz' },
    { id: 10, name: 'Interview Questions', icon: '💼', color: 'bg-gray-100', identifier: 'jsInterviewQuiz' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Choose Your Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={'/quiz'}
            onClick={()=> dispatch(categoryChoose(category.identifier))}
            className={`${category.color} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow`}
          >
            <div className="text-center">
              <span className="text-4xl mb-4 block">{category.icon}</span>
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <p className="text-gray-600 mt-2">10 Questions</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuizCategories;
