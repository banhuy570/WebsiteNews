import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";

import "./homepage.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Homepage() {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(10);
  const [searchTitle, setSearchTitle] = useState("");

  const newsApi = async () => {
    try {
      const baseURL = `https://blogapiv1dnt.herokuapp.com/api/v1/posts`;
      const news = await axios.get(baseURL);
      setNewsArray(news.data.data);
      setNewsResults(news.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, loadMore]);
  function search(news) {
    return news.filter(
      (newsItem) => newsItem.title.toLowerCase().indexOf(searchTitle) > -1
    );
  }

  return (
    <>
      <Header></Header>
      <div className="searchNews">
        <input
          className="search"
          type="text"
          value={searchTitle}
          placeholder="Search News..."
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
      <div className="home">
        <Posts
          newsArray={search(newsArray)}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
        <Sidebar />
      </div>{" "}
      <Footer></Footer>
    </>
  );
}
