import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, action) => action.payload,
    removeRequest: (state, action) => {
      const updatedRequestsList = state.filter(
        (req) => req.fromUserId._id !== action.payload
      );

      console.log("updatedRequestsList", updatedRequestsList);
      console.log("action.payload", action.payload);

      return updatedRequestsList;
    },
    emptyRequestList: () => {
      return null;
    },
  },
});

export default requestSlice.reducer;
export const { addRequests, removeRequest, emptyRequestList } =
  requestSlice.actions;
