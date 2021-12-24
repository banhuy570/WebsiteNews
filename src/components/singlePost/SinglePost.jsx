import { Link } from "react-router-dom";
import "./singlePost.css";

const SinglePost = ({ newsItem }) => {
  
  return (
    <>
    <div className="singlePost">
      <div className="singlePostWrapper">
      <div className="singlePostImage"></div>
        <img
          className="singlePostImg"
          alt={newsItem.title}
        src={
          newsItem.urlImage
            ? newsItem.urlImage
            : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"}
        />
        </div>
        <h1 className="singlePostTitle">
        {newsItem.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {newsItem.author}
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          {newsItem.content}
          <br />
          <br />
   
        </p>
      </div>
   
    </>
  );
}

export default SinglePost;