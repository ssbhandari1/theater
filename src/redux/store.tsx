import { configureStore } from "@reduxjs/toolkit";
import moiveReducer from "@/redux/slice/index";
import { setupListeners } from "@reduxjs/toolkit/query";
import tvShowsReducer from "@/redux/slice/TVShow";
import searchReducer from "@/redux/slice/search";

export const store = configureStore({
  reducer: {
    moviesData: moiveReducer,
    TVData: tvShowsReducer,
    searchData: searchReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
