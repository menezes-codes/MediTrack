import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage";
import RegisterMedicine from "../pages/registerMedicine";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterMedicine />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
