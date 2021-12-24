import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft"><a href="/">
<img alt="" src="https://dhtn.ttxvn.org.vn/Images/images/Boi%20Duong%20Nghiep%20Vu/Noi%20San%20Thong%20Tan/So%2011%20-%202017/viet_nam_news-logo_0.png" className="img-logo" ></img></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          {/* <li className="topListItem">CATEGORY</li> */}
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>

        </ul>
      </div>
      {/* <div className="topRight">     
        <i className="topSearchIcon fas fa-search"></i>
      </div> */}
    </div>
  );
}
