import { configureStore } from '@reduxjs/toolkit'

import notificationsReducer from '../features/notifications/notificationsSlice'
import { apiSlice } from '../features/api/apiSlice'

export default configureStore({
  reducer: {
    notifications: notificationsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer  //  reducerPath is 'api'
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})
