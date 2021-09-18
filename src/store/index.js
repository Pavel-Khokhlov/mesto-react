import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./userSlice";
import appReduser from "./appSlice";
import dataReduser from "./dataSlice";

export default configureStore({
  reducer: {
    app: appReduser,
    users: userReduser,
    data: dataReduser,
  },
});
