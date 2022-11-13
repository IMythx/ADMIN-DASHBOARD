import { Fragment } from "react";
import classes from "./SideBar.module.css";
import myImg from "../../../assets/user.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../../Theme";
const Profile = ({ isCollapsed }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <Fragment>
      {!isCollapsed && (
        <div className={`${classes.profile} ${darkTheme && classes.dark}`}>
          <div>
            <img src={myImg} alt="" />
          </div>
          <h2>Myth</h2>
          <h4>VP Fancy Admin</h4>
        </div>
      )}
    </Fragment>
  );
};

export default Profile;
