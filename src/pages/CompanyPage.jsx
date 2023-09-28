import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function CompanyPage({ companies, techs }) {
  const { companySlug } = useParams();
  return (
    <div>
      <h1>Company Profile</h1>
      {companies
        .filter((company) => company.slug === companySlug)
        .map((oneCompany) => {
          return (
            <div
              style={{ display: "flex", justifyContent: "space-around" }}
              key={oneCompany.id}
            >
              <img
                src={oneCompany.logo}
                alt={oneCompany.name}
                style={{
                  height: "200px",
                  boxShadow: "5px 5px 8px gray",
                  padding: "20px",
                }}
              />
              <div style={{ width: "30%", marginBottom: "50px" }}>
                <h2>{oneCompany.name}</h2>
                <h3>About</h3>
                <p>{oneCompany.description}</p>
              </div>
            </div>
          );
        })}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* Loop over array of technologies associated with this company */}
        {techs.map((oneTech) => {
          return (
            <Link
              to={`/tech/${oneTech.slug}?company=${companySlug}`}
              style={{ textAlign: "center" }}
            >
              <div
                key={oneTech.id}
                style={{
                  boxShadow: "5px 5px 8px gray",
                  padding: "10px",
                  width: "10rem",
                  height: "10rem",
                  margin: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={oneTech.image}
                  alt={oneTech.name}
                  style={{ width: "80%" }}
                />
              </div>
              <h5 style={{ margin: "0 0 20px 0" }}>{oneTech.name}</h5>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyPage;
