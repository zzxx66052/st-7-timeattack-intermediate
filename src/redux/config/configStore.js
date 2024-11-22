// TODO: store 에 slice에서 import한 reducer를 할당하세요.
import { configureStore } from "@reduxjs/toolkit";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../slices/calculatorSlice";

export default configureStore({
  reducer: { increment, decrement, incrementByAmount },
});
