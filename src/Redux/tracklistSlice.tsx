import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITrack, ITracklistState } from '../components/Tracklist/Tracklist';

const initialState: ITracklistState = {
  list: [],
  currentTrack: null,
};

const tracklistSlice = createSlice({
  name: 'tracklist',
  initialState,
  reducers: {
    setTracks: (state, action: PayloadAction<ITrack[]>) => {
      state.list = action.payload;
    },
    setCurrentTrack: (state, action: PayloadAction<ITrack | null>) => {
      state.currentTrack = action.payload;
    },
  },
});

export const { setTracks, setCurrentTrack } = tracklistSlice.actions;
export default tracklistSlice.reducer;
