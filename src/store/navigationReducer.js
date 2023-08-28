import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: [
    { name: 'Home', to: '/', current: true },
    { name: 'Web Dev', to: '/webdev', current: false },
    { name: 'Mentoring', to: '/mentor', current: false },
    { name: 'Music', to: '/music', current: false },
  ],
  reducers: {
    setCurrentPage: (state, action) => {
      console.log(action.payload);
      const newState = [...state];

      return newState.map((nav) => {
        return {
          ...nav,
          current: action.payload === nav.name
        }
      })
    },
  }
})

export const { setCurrentPage } = navigationSlice.actions
