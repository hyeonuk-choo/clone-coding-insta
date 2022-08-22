import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie, setCookie } from "../../shared/cookies.js";

const initialState = {
  articles: [],
  isLoading: false,
  error: null,
};

const BASE_URL = '';

export const __getMyFeed = createAsyncThunk(
  "GET_MY_FEED",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/api/articles`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("mycookie")}`,
        },
      })
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const MyPageSlice = createSlice({
  name: "MyPageSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMyFeed.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyFeed.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.articles = payload;
    },
    [__getMyFeed.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  }
})