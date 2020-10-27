import AvatarDropdownTypes from './avatar-dropdown.types'

const INITIAL_STATE = {
  hidden: true
}

const avatarDropdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AvatarDropdownTypes.TOGGLE_AVATAR_DROPDOWN_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case AvatarDropdownTypes.SET_AVATAR_DROPDOWN_HIDDEN:
      return {
        ...state,
        hidden: true,
      };

    default: return state;
  }
}

export default avatarDropdownReducer;