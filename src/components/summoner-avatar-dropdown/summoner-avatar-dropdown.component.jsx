import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { setAvatarDropdownHidden } from "../../redux/avatar-dropdown/avatar-dropdown.actions";
import { getSummonerAvatar } from "../../firebase/firebase.utils";

import "./summoner-avatar-dropdown.styles.scss";

import { auth } from "../../firebase/firebase.utils";

const AvatarDropdown = ({ currentUser, setAvatarDropdownHidden }) => {
  const [avatarUrl, setAvatarUrl] = React.useState(null);

  React.useEffect(() => {
    const fetchAvatarUrl = async () => {
      setAvatarUrl(await getSummonerAvatar(currentUser));
    };
    fetchAvatarUrl();
  }, [currentUser]);

  return (
    <div className="avatar-dropdown">
      <Link
        className="Profile"
        to="/summoner"
        onClick={() => {
          setAvatarDropdownHidden();
        }}
      >
        <Avatar
          className="SummonerAvatar"
          alt="Summoner Avatar"
          src={avatarUrl}
        />
        <div className="SummonerName">
          {currentUser.summoner_name == null || currentUser.summoner_name === ""
            ? "Summoner"
            : currentUser.summoner_name}
        </div>
      </Link>

      <div className="divider">————————————</div>

      <div className="Username">
        <span className="row1">Signed in as</span>
        <br></br>
        <span className="row2">{currentUser.displayName}</span>
      </div>

      <div className="option-row">
        <AccountCircleIcon className="icon" color="action" />
        <Link
          className="long-option"
          onClick={() => {
            setAvatarDropdownHidden();
          }}
          to={`/summoner${
            currentUser.summoner_name == null ||
            currentUser.summoner_name === ""
              ? ""
              : "/" + currentUser.summoner_name
          }`}
        >
          Manage Summoner
        </Link>
      </div>

      <div className="option-row">
        <ExitToAppIcon className="icon" color="action" />
        <div
          className="option"
          onClick={() => {
            setAvatarDropdownHidden();
            auth.signOut();
          }}
        >
          Sign Out
        </div>
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
