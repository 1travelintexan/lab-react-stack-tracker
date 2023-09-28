import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="logo-container">
        {companies.map((company) => {
          return (
            <Link key={company.name} to={`/company/${company.slug}`}>
              <div className="link">
                <h3>{company.name}</h3>
                <img
                  src={company.logo}
                  alt={company.name}
                  style={{ height: "200px" }}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
