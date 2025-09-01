import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../dummyData";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    selectedDate: null,
    events: [],
    data: dummyData,
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
      state.events = state.data[action.payload] || [];
    },
  },
});

export const { setSelectedDate } = calendarSlice.actions;
export default calendarSlice.reducer;
