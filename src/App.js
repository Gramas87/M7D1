
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import JobsList from "./components/JobsList"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CompanyPage from "./components/CompanyPage"
import Favorites from "./components/Favorites"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<JobsList />} />
      <Route path="/:companyID" element={<CompanyPage />} />
      <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
