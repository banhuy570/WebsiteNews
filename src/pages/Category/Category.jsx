// import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./category.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Homepage() {
  const params1 = useParams();
  
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(10);
 
  

  useEffect(() => {
      const newsApi = async () => {
    try {
      const baseURL = `http://blogapiv1dnt.herokuapp.com/api/v1/posts`;
      const news = await axios.get(baseURL);
      setNewsArray(news.data.data);
      setNewsResults(news.data.data);
    } catch (error) {
      console.log(error);
    }
  };
    newsApi();
    // eslint-disable-next-line
  }, []);

  function searchCategory(news) {
    return news.filter(
      (newsItem) => newsItem.category.indexOf(params1.id) > -1
    );
  }
  return (
    <>
      <Header></Header> 
      {/* <div className="searchNews">
       <input
          className="search"
          type="text"
          value={searchTitle}
          placeholder="Search News..."
          onChange={(e) => setSearchTitle(e.target.value)}         
        />        
        <i className="topSearchIcon fas fa-search" ></i>
        </div> */}
      <div className="home">

        <Posts
          newsArray={searchCategory(newsArray)}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
        <Sidebar />
      </div>
    </>
  );
}
