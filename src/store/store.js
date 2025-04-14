import { configureStore } from '@reduxjs/toolkit'
import quizSlice from '../slices/quizSlice/quizSlice.js'

export const store = configureStore({
  reducer: {
    quiz: quizSlice,
  },
})