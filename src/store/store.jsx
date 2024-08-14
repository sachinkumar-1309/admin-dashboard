import { configureStore } from "@reduxjs/toolkit";
// Import your reducers here
import widgetSlice from "./widgetSlice";

const store = configureStore({
	reducer: {
		// Add your reducers here
		widgetSlice: widgetSlice,
	},
});

export default store;
