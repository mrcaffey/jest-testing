import React from 'react'
import configMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'

const mockStore = configMockStore()

export const reduxHelper = (Component, initialState = {}) => {
  const store = mockStore(initialState)
  return {
    component: 
    <Provider store={store}>
      <Component />
    </Provider>,
    store
  }
}