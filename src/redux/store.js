const { configureStore } = require("@reduxjs/toolkit");
import selectedItems from "./features/selectcomponent";

const store = configureStore({
  reducer: { selectedItems: selectedItems },
});

export default store;
