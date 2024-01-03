import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
};

const store = createStore();
// ReturnType은 TS가 제공하는 유틸리티 타입
// 이것은 함수의 반환 타입을 추출

export type RootState = ReturnType<typeof store.getState>;

export default store;
