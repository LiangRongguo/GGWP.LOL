import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import avatarDropdownReducer from "./avatar-dropdown/avatar-dropdown.reducer";

export default combineReducers({
  user: userReducer,
  avatar_dropdown: avatarDropdownReducer,
});
