import { createSlice } from "@reduxjs/toolkit";
import { getPopularTVShows, getTopRatedTVShows, getTvShows } from "../thunk";

const tvShows = createSlice({
  name: "tvShows",
  initialState: {
    loading: false,
    error: false,
    trending: [],
    upcomingMoives: [],
    movieLogo: {},
    movieVideo: [],
    credits: {},
    popular: [],
    marvel: [],
    similarMoives: [],
    topRated: [],
    movieDetails: {},
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(getTvShows.pending, (state: any) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getTvShows.fulfilled, (state: any, action: any) => {
        (state.loading = false), (state.trending = action.payload);
      })
      .addCase(getPopularTVShows.pending, (state: any) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getPopularTVShows.fulfilled, (state: any, action: any) => {
        (state.loading = false), (state.popular = action.payload);
      })
      .addCase(getTopRatedTVShows.pending, (state: any) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getTopRatedTVShows.fulfilled, (state: any, action: any) => {
        (state.loading = false), (state.topRated = action.payload);
      });
  },
});
export default tvShows.reducer;
