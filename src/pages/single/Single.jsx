import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import Footer from "../../components/footer/Footer";

import "./single.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Single() {
  const params = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const newsApi = async () => {
      try {
        const baseURL = `https://blogapiv1dnt.herokuapp.com/api/v1/posts/${params.id}`;
        const news = await axios.get(baseURL);
        setPost(news.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    newsApi();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="single">
        <SinglePost newsItem={post} />
        <Sidebar />
      </div>
      <Footer></Footer>
    </>
  );
}
