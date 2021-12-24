import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ newsItem }) => {
  // const params = useParams();
  // console.log(params);
  <a href="/#" target="__blank">
  <span className="title">{newsItem.title}</span></a>
  return (
    <div className="post">
      <img
        className="postImg"
        alt={newsItem.title}
        src={
          newsItem.urlImage
            ? newsItem.urlImage
            : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
        }
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              {newsItem.category}
            </Link>
          </span>
          {/* <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span> */}
        </div>
        <span className="postTitle">
          <Link to={`/post/${newsItem.slug}`} className="link">
          {newsItem.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      {newsItem.content}
      </p>
    </div>
  );
}
export default Post;