import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="footer-left-pane">
            <div className="right">
              <img alt="" src="https://dhtn.ttxvn.org.vn/Images/images/Boi%20Duong%20Nghiep%20Vu/Noi%20San%20Thong%20Tan/So%2011%20-%202017/viet_nam_news-logo_0.png" />
            </div>
          </div>      
            <div className="copy-text">
              &copy;<span className="span-3">COPYRIGHT 2021</span>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
