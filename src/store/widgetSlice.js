import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  widgets: []
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      category.widgets.push(widget);
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      category.widgets = category.widgets.filter(w => w.id !== widgetId);
    }
  }
});

export const { setCategories, addWidget, removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;
