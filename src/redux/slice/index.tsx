import { createSlice } from "@reduxjs/toolkit";
import {
  getIMG_URL,
  getMarvelMovies,
  getMoiveCast,
  getMovieDetails,
  getMovieLogo,
  getMovieVideo,
  getPopularMovies,
  getSimilarMovies,
  getTopRatedMovies,
  getTrendingMoives,
  getUpcomingMovies,
} from "../thunk";

const moiveSlice = createSlice({
  name: "movie",
  initialState: {
    url: {},
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
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(getTrendingMoives.pending, (state: any) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getTrendingMoives.fulfilled, (state: any, action: any) => {
        (state.loading = false), (state.trending = action.payload);
      })
      .addCase(getUpcomingMovies.pending, (state: any, action: any) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getUpcomingMovies.fulfilled, (state: any, action: any) => {
        (state.loading = false), (state.upcomingMoives = action.payload);
      })
      .addCase(getMovieLogo.pending, (state: any, action: any) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getMovieLogo.fulfilled, (state: any, action: any) => {
        (state.loading = false), (state.movieLogo = action.payload);
      })
      .addCase(getPopularMovies.pending, (state: any, action: any) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getPopularMovies.fulfilled, (state: any, action: any) => {
        (state.loading = false), (state.popular = action.payload);
      })
      .addCase(getMarvelMovies.pending, (state: any, action: any) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getMarvelMovies.fulfilled, (state: any, action: any) => {
        (state.loading = false), (state.marvel = action.payload);
      })
      .addCase(getMovieVideo.pending, (state: any, action: any) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getMovieVideo.fulfilled, (state: any, action: any) => {
        (state.loading = false), (state.movieVideo = action.payload);
      })
      .addCase(getMoiveCast.pending, (state: any, action: any) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getMoiveCast.fulfilled, (state: any, action: any) => {
        (state.loading = false), (state.credits = action.payload);
      })
      .addCase(getMovieDetails.pending, (state: any, action: any) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getMovieDetails.fulfilled, (state: any, action: any) => {
        (state.loading = false), (state.movieDetails = action.payload);
      })
      .addCase(getSimilarMovies.pending, (state: any, action: any) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getSimilarMovies.fulfilled, (state: any, action: any) => {
        (state.loading = false), (state.similarMoives = action.payload);
      })
      .addCase(getTopRatedMovies.pending, (state: any, action: any) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getTopRatedMovies.fulfilled, (state: any, action: any) => {
        (state.loading = false), (state.topRated = action.payload);
      });
  },
});
export default moiveSlice.reducer;
