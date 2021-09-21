import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <a href="/"><h1>TicketFASTER</h1></a>
      <Link to="/bucketlist">Bucket List</Link>
    </header>
  );
};

export default Header;
