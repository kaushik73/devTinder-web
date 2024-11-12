import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnection: (state, action) => action.payload,
    removeConnection: () => null,
  },
});

export default connectionSlice.reducer;
export const { addConnection, removeConnection } = connectionSlice.actions;
