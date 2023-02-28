import { configureStore } from '@reduxjs/toolkit'
import { api } from './services'
import { createWrapper } from 'next-redux-wrapper'

export const makeStore = () =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    middleware: (gDM) => gDM().concat(api.middleware),
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true })
