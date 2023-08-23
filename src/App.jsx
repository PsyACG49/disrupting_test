import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import CarPage from "./pages/CarPage";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="details/:product" element={<DetailsPage />} />
          <Route path="car" element={<CarPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
