
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import JobsList from "./components/JobsList"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<JobsList />} />
      <Route path="/:elementID" element={<companyPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
