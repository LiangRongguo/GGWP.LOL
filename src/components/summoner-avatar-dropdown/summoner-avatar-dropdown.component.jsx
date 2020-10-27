import React from "react";
import { connect } from "react-redux";

import { setAvatarDropdownHidden } from "../../redux/avatar-dropdown/avatar-dropdown.actions";

import "./summoner-avatar-dropdown.styles.scss";

import { auth } from "../../firebase/firebase.utils";

const AvatarDropdown = ({ currentUser, setAvatarDropdownHidden }) => {
  return (
    <div className="avatar-dropdown">
      <div
        className="option"
        onClick={() => {
          setAvatarDropdownHidden();
          auth.signOut();
        }}
      >
        SIGN OUT
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setAvatarDropdownHidden: () => dispatch(setAvatarDropdownHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AvatarDropdown);
