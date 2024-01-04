const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  selectedItems: [],
};

const selectComponentSlice = createSlice({
  name: "selectComponent",
  initialState,
  reducers: {},
});

export default selectComponentSlice.reducer;
