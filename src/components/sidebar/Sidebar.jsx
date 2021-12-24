/* eslint-disable no-template-curly-in-string */
import "./sidebar.css";
import axios from "axios"
import { useEffect, useState } from "react";
import SideBarCat from "./SideBarCat";
const Sidebar = () => {

  const [category, setCategory] = useState([]);

  const newsApi = async () => {
    try {
      const baseURL = `https://blogapiv1dnt.herokuapp.com/api/v1/categories`;
      const news = await axios.get(baseURL);
      setCategory(news.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();  
    // eslint-disable-next-line
  }, [category]);
  return (
    <>


    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://vietnamnews.vn//Images/demo-img55.jpg"
          alt=""
        />
        <p>
          Seven days a week, our online edition features six major topics:
          politics, the economy, society and culture, comment and miscellany.
          Special pages and columns appear on the website as follows
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul>
        {category.map((newsItem) => (
          <SideBarCat newsItem={newsItem} key={newsItem.id} />
        ))}

       </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
    </>
  );
}
export default Sidebar;