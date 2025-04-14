import { createSlice } from "@reduxjs/toolkit";
import allQuizzes from "../../data/javascript-quiz.js";

const initialState = {
  questions: allQuizzes,
  currentQuestionIndex: 0,
  currentQuestionObj: {},
  score: 0,
  quizIsOver: false,
  chosenCategory: "",
  questionsCount: 0,
  pendingAnswer: "",
  correctAnswerPercent: 0,
  history: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    categoryChoose: (state, action) => {
      state.chosenCategory = action.payload;
      state.currentQuestionObj =
        state.questions[state.chosenCategory][state.currentQuestionIndex];
      state.questionsCount = state.questions[state.chosenCategory].length;
      // console.log(action.payload);
      // console.log(
      //   state.questions[state.chosenCategory][state.currentQuestionIndex]
      //     .question
      // );
    },
    selectAnswer: (state, action) => {
      // console.log(action.payload);
      state.pendingAnswer = action.payload;
    },
    submitAnswer: (state) => {
      if (state.currentQuestionObj.answer === state.pendingAnswer) {
        state.score++;
      } else {
        console.log("fail");
      }

      if (state.currentQuestionIndex == state.questionsCount - 1) {
        state.quizIsOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
      state.currentQuestionObj =
        state.questions[state.chosenCategory][state.currentQuestionIndex];
    },
    showResult: (state) => {
      state.correctAnswerPercent = (state.score / state.questionsCount) * 100;
      // console.log(state.correctAnswerPercent, "%");
      state.history.push(state.correctAnswerPercent)
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0
      state.currentQuestionObj = {}
      state.score = 0
      state.quizIsOver = false
      state.chosenCategory = ""
      state.questionsCount = 0
      state.pendingAnswer = ""
      state.correctAnswerPercent = 0
    },
  },
});

// Action creators are generated for each case reducer function
export const { submitAnswer, categoryChoose, selectAnswer, showResult, resetQuiz } =
  quizSlice.actions;

export default quizSlice.reducer;
