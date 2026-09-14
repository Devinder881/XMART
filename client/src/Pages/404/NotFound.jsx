import { Link } from "react-router-dom";
import "./style.css"



export default function NotFound() {
  return (
    <div className="notfound-root">
      <h1 className="notfound-code">404</h1>
      <h2 className="notfound-title">Page Not Found</h2>
      <p className="notfound-text">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link to="/" className="notfound-home-btn">
        Back to Home
      </Link>
    </div>
  );
}
