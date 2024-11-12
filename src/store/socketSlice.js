import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socket: null,
  onlineUsers: [],
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
    resetSocket: (state) => {
      if (state.socket) {
        state.socket.close();
      }
      state.socket = null;
      state.onlineUsers = [];
    },
  },
});

export const { setSocket, setOnlineUsers, resetSocket } = socketSlice.actions;
export default socketSlice.reducer;

// const socket = useSelector((state) => state.socket.socket);
// const onlineUsers = useSelector((state) => state.socket.onlineUsers);
