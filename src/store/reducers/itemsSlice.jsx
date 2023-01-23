import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("http://localhost:3001/items");
      if (!response.ok) {
        throw new Error("Server error!");
      }
      console.log(response);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const itemSlice = createSlice({
  name: "items",
  initialState: {
    itemList: [],
    cartList: [],
    status: null,
    error: null,
  },
  reducers: {
    addedToCart(state, actions) {
      state.cartList.push(actions.payload);
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.itemList = action.payload;
    },
    [fetchItems.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default itemSlice.reducer;
export const { addedToCart } = itemSlice.actions;
