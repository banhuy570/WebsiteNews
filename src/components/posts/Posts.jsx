import Post from "../post/Post";
import "./posts.css";

const Posts = ({ newsArray, loadMore, setLoadMore, newsResults }) => {
  return (
      <div className="posts">
        {/* First this */}
        {newsArray.map((newsItem) => (
          <Post newsItem={newsItem} key={newsItem.title} />
        ))}

        {/* Then this */}
        {loadMore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
          </>
        )}
      </div>
  );
};
export default Posts;
