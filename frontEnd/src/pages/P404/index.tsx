import './style.scss'

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
  return (
    <div className="page404">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>Oops! Nothing was found</h2>
          <p>
            The page you are looking for might have been removed had its name changed or
            is temporarily unavailable.
            <a href="/">Return to homepage</a>
          </p>
        </div>
      </div>
  
  );
}
