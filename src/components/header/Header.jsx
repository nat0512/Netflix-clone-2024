import React from "react";
import "./header.css"
import Netflixlogo from "../../assets/images/Netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountsBoxIcon from "@mui/icons-material/AccountBox";
const Header = () => {
  return (
    <div className="outer-container">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li>
              <img src={Netflixlogo} alt="Netflix logo" width="100" />
            </li>
            <li>Home</li>
            <li>TV SHOWS</li>
            <li>MOVIES</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountsBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
