import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img, title,desc}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            {title}
          </Link>
        </span>
      </div>
      <p className="postDesc">
      {desc}
      </p>
    </div>
  );
}