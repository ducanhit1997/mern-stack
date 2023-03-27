import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const saveInfoUserLogin = createAsyncThunk(
  "user/SAVE_INFO",
  async (data, { rejectWithValue }) => {
    try {
      return data;
    } catch (error: any) {
      return rejectWithValue(error.data);
    }
  }
);

type UserState = {
  data: Array<any>;
  loading: boolean;
}

const initialState : UserState = {
  data: [],
  loading: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveInfoUserLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveInfoUserLogin.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(saveInfoUserLogin.fulfilled, (state, action: any) => {
      state.data = action.payload ? [action.payload] : [];
      state.loading = false;
    });
  }
});

const { reducer: userReducer } = userSlice;
export default userReducer;