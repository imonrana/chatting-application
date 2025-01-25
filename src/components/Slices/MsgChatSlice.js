import { createSlice } from "@reduxjs/toolkit";

export const msgChatSlice = createSlice({
    name: "msgChatSlice",
    initialState:{
        activeData: localStorage.getItem("msgChatInfo") ? JSON.parse(localStorage.getItem("msgChatInfo")) : null,
    },

    reducers:{
        msgChatInfo: (state, action)=>{
           state.activeData = action.payload;
        }
    }
});

export const {msgChatInfo} = msgChatSlice.actions;

export default msgChatSlice.reducer;