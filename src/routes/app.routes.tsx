import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home/>}/>
    </Routes>
);

export default AppRoutes;
