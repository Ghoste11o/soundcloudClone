import { createSlice } from '@reduxjs/toolkit';

export interface ITrack {
  url: string,
  title: string,
  author: string,
  thumbnail: string,
  id: number,
}

const initialState: ITrack = {
  url: "",
  title: "",
  author: "TMS",
  thumbnail: "",
  id: 0,
}

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setUrl: (state, payload) => {
      console.log(payload);
      
      state.url = "ololosh"
    }
  },
})

export const { setUrl } = counterSlice.actions

export default counterSlice.reducer