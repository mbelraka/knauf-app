import { configureStore } from "@reduxjs/toolkit";

import blogsReducer from "./blogs/blogsState";

export default configureStore({
  reducer: { blogs: blogsReducer },
});
