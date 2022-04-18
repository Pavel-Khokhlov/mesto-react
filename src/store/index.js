import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./userSlice";
import appReduser from "./appSlice";
import dataReduser from "./dataSlice";
import formReduser from "./formSlice";

export default configureStore({
  reducer: {
    app: appReduser,
    users: userReduser,
    data: dataReduser,
    form: formReduser,
  },
});
