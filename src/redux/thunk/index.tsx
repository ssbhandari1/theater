import { fetchdataFromApi } from "@/utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTrendingMoives = createAsyncThunk(
  "movie/getMoviesData",
  async (url: string) => {
    try {
      const res = await fetchdataFromApi(url);
      console.log("getMoviesData", res);
      return res.results;
    } catch (error) {
      throw error;
    }
  }
);

export const getIMG_URL = async (url: any) => {
  try {
    const res = await fetchdataFromApi(url);
    const imgUrl = {
      backdrop: res?.images.secure_base_url + "original",
      poster: res?.images.secure_base_url + "original",
      profile: res?.images.secure_base_url + "original",
    };
    return imgUrl;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieVideo = createAsyncThunk(
  "movie/getMovieVideo",
  async (url: string) => {
    try {
      const res = await fetchdataFromApi(url);
      console.log("getMovieVideo", res);
      return res?.results;
    } catch (error) {
      throw error;
    }
  }
);

export const getUpcomingMovies = createAsyncThunk(
  "movie/getUpcomingMovies",
  async (url: string) => {
    try {
      const res = await fetchdataFromApi(url);
      console.log("getMovieVideo2222", res);
      return res.results;
    } catch (error) {
      throw error;
    }
  }
);
export const getMovieLogo = createAsyncThunk(
  "movie/getMovieLogo",
  async (url: string) => {
    try {
      const res = await fetchdataFromApi(url);
      console.log("getMovieLogo", res);
      return res;
    } catch (error) {
      throw error;
    }
  }
);

export const getPopularMovies = createAsyncThunk(
  "movies/getPopularMovies",
  async (url: string) => {
    try {
      const res = await fetchdataFromApi(url);
      console.log("getPopularMovies", res);
      return res.results;
    } catch (error) {
      throw error;
    }
  }
);

export const getTopRatedMovies = createAsyncThunk(
  "movies/getTopRatedMovies",
  async (url: string) => {
    try {
      const res = await fetchdataFromApi(url);
      console.log("getTopRatedMovies", res);
      return res.results;
    } catch (error) {
      throw error;
    }
  }
);

export const getMarvelMovies = createAsyncThunk(
  "movies/getMarvelMovies",
  async (url: string) => {
    try {
      const res = await fetchdataFromApi(url);
      console.log("getMarvelMovies", res);
      return res.results;
    } catch (error) {
      throw error;
    }
  }
);

export const getMoiveCast = createAsyncThunk(
  "movies/getMoiveCast",
  async (url: string) => {
    try {
      const res = await fetchdataFromApi(url);
      console.log("getMoiveCast", res);
      return res;
    } catch (error) {
      throw error;
    }
  }
);

export const getMovieDetails = createAsyncThunk(
  "movies/getMovieDetails",
  async (url: string) => {
    try {
      const res = await fetchdataFromApi(url);
      console.log("getMovieDetails", res);
      return res;
    } catch (error) {
      throw error;
    }
  }
);
export const getSimilarMovies = createAsyncThunk(
  "movies/getSimilarMovies",
  async (url: string) => {
    try {
      const res = await fetchdataFromApi(url);
      console.log("getSimilarMovies", res);
      return res?.results;
    } catch (error) {
      throw error;
    }
  }
);

export const getTvShows = createAsyncThunk(
  "tvShows/getTvShows",
  async (url: string) => {
    try {
      const res = await fetchdataFromApi(url);
      console.log("getTvShows", res);
      return res.results;
    } catch (error) {
      throw error;
    }
  }
);

export const getPopularTVShows = createAsyncThunk(
  "tvShows/getPopularTVShows",
  async (url: string) => {
    try {
      const res = await fetchdataFromApi(url);
      console.log("getPopularTVShows", res);
      return res.results;
    } catch (error) {
      throw error;
    }
  }
);

export const getTopRatedTVShows = createAsyncThunk(
  "tvShows/getTopRatedTVShows",
  async (url: string) => {
    try {
      const res = await fetchdataFromApi(url);
      console.log("getTopRatedTVShowss", res);
      return res.results;
    } catch (error) {
      throw error;
    }
  }
);

export const getSearchData = createAsyncThunk(
  "searchData/getSearchData",
  async (url: string) => {
    try {
      const res = await fetchdataFromApi(url);
      console.log("getSearchData", res);
      return res.results;
    } catch (error) {
      throw error;
    }
  }
);
