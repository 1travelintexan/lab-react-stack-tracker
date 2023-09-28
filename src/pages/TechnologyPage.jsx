import { Link, useParams, useSearchParams } from "react-router-dom";

function TechnologyPage({ techs }) {
  const { techSlug } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const companyName = searchParams.get("company");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Technology Details</h1>
      <Link to={`/company/${companyName}`}>
        <h1>🔙</h1>
      </Link>
      {techs
        .filter((tech) => tech.slug === techSlug)
        .map((tech) => {
          return (
            <div
              key={tech.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "60vw",
                marginTop: "50px",
              }}
            >
              <img
                src={tech.image}
                alt={tech.name}
                style={{ height: "30vh", boxShadow: "5px 5px 8px gray" }}
              />
              <div style={{ width: "30%" }}>
                <h1>{tech.name}</h1>
                <h3>About</h3>
                <p>{tech.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default TechnologyPage;
