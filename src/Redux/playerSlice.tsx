import { createSlice } from '@reduxjs/toolkit';
import { ITrack } from '../components/Tracklist/Tracklist';

interface IPlayerState {
  selectedTrack: ITrack | null;
  tracks: ITrack[] | null;
  isPlaying: boolean;
}

const initialState: IPlayerState = {
  selectedTrack: null,
  tracks: null,
  isPlaying: false,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    selectTrack: (state, action) => {
      state.selectedTrack = action.payload;
    },
  },
});

export const { selectTrack } = playerSlice.actions;
export default playerSlice.reducer;