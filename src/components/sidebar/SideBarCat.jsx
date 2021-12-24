/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import "./sidebar.css"
const SidebarCat = ({ newsItem }) => {
 
    return (
    <li className="sidebarListItem">
      <a href={`/category/${newsItem.name}`}
        className="link"
        onClick={() => (console.log(newsItem.name)) }
      >
        {newsItem.name}
      </a>
    </li>
  );
};
export default SidebarCat;
