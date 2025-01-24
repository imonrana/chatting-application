import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../Slices/userSlice'
import msgChatSlice  from '../Slices/MsgChatSlice'

export default configureStore({
  reducer: {
    userDetails : userSlice,
    chatDetails: msgChatSlice,
  }
})