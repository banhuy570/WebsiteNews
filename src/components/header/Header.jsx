import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Read the worlds fastest newspaper.</span>
        <span className="headerTitleLg">NEWS</span>
      </div>
      <img
        className="headerImg"
        src="https://www.vuelio.com/uk/wp-content/uploads/2019/02/Breaking-News.jpg"
        alt=""
      />
    </div>
  );
}
