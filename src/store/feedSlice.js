import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,
    removeUserFromFeed: (state, action) => {
      const updatedFeedList = state.filter((req) => req._id !== action.payload);

      return updatedFeedList;
    },
    emptyFeedList: () => {
      return null;
    },
  },
});

export default feedSlice.reducer;
export const { addFeed, removeUserFromFeed, emptyFeedList } = feedSlice.actions;
