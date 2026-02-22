import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import NewsSection from "./components/NewsSection";
import AcademicsProgram from "./components/AcademicsProgram/AcademicsProgram";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import Footer from "./components/Footer";

import StaffDepartments from "./pages/staff/StaffDepartments";
import DepartmentCommunity from "./pages/staff/DepartmentCommunity";

function Home() {
  return (
    <>
      <Header />
      <Section />
      <NewsSection />
      <AcademicsProgram />
      <UpcomingEvents />
    </>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<StaffDepartments />} />
        <Route path="/staff/:deptId" element={<DepartmentCommunity />} />
        <Route path="/our-staff" element={<Navigate to="/staff" replace />} />
        <Route path="/department-community" element={<Navigate to="/staff" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}
