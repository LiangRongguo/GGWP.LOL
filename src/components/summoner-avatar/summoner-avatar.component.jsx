import React from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";

import { toggleAvatarDropdownHidden } from "../../redux/avatar-dropdown/avatar-dropdown.actions";

import { getSummonerAvatar } from "../../firebase/firebase.utils";

import "./summoner-avatar.styles.scss";

function SummonerAvatar({ currentUser, toggleAvatarDropdownHidden }) {
  const [avatarUrl, setAvatarUrl] = React.useState(null);

  React.useEffect(() => {
    const fetchAvatarUrl = async () => {
      setAvatarUrl(await getSummonerAvatar(currentUser));
    };
    fetchAvatarUrl();
  }, [currentUser]);

  return (
    <div onClick={toggleAvatarDropdownHidden}>
      <Avatar
        className="SummonerAvatar"
        alt="Summoner Avatar"
        src={avatarUrl}
      />
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  toggleAvatarDropdownHidden: () => dispatch(toggleAvatarDropdownHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SummonerAvatar);
