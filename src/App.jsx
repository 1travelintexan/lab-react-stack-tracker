import "./App.css";
import companiesJSON from "./companies.json";
import Navbar from "./components/Navbar";
import technologiesJSON from "./technologies.json";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechPage from "./pages/TechnologyPage";

function App() {
  const [companies, setCompanies] = useState(companiesJSON);
  const [technologies, setTechnologies] = useState(technologiesJSON);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companies={companies} techs={technologies} />}
        />
        <Route
          path="/tech/:techSlug"
          element={<TechPage techs={technologies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
