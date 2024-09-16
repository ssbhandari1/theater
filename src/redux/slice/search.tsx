import { createSlice } from "@reduxjs/toolkit";
import { getSearchData } from "../thunk";

const searchSlice = createSlice({
  name: "searchData",
  initialState: {
    loading: false,
    error: false,
    searchData: [],
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(getSearchData.pending, (state: any) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getSearchData.fulfilled, (state: any, action: any) => {
        (state.loading = false), (state.searchData = action.payload);
      });
  },
});
export default searchSlice.reducer;
