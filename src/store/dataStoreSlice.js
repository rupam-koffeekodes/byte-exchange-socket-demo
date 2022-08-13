import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const dataStoreSlice = createSlice({
  name: "dataStore",
  initialState: {
    channels: {},
  },
  reducers: {
    setDataInChannel: (state, action) => {
      state.channels[action.payload?.channelName] = action.payload?.channelData;
    },
  },
});

export const setDataInChannelThunk = createAsyncThunk("DS", (_, thunkAPI) => {
  thunkAPI.getState();
});

export const { setDataInChannel } = dataStoreSlice.actions;

export const selectChannels = (state) => state.DS.channels;
export const selectMarket = (state) => state.DS.channels.Market;

export default dataStoreSlice.reducer;
