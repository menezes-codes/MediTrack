import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
