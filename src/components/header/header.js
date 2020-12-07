import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="ui inverted top fixed menu">
      <div className="ui container">
        <Link to={'/'} className="item">
          Home
        </Link>
        <div className="right item">
          <Link to={'/new-user'} className="ui inverted button" role="button">
            Post new user
          </Link>
        </div>
      </div>
    </div>
  );
}
