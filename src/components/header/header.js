import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="ui inverted top fixed menu">
      <div className="ui container">
        <Link to={'/'} className="item">
          Home
        </Link>
        <div className="right item">
          <a className="ui inverted button" role="button">
            Post new user
          </a>
        </div>
      </div>
    </div>
  );
}
