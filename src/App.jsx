import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import NewsSection from "./components/NewsSection";
import EventsSection from "./components/EventsSection";
import Footer from "./components/Footer";

import OurStaff from "./pages/OurStaff/OurStaff";
import DepartmentCommunity from "./pages/OurStaff/DepartmentCommunity";

function Home() {
  return (
    <>
      <Header />
      <Section />
      <NewsSection />
      <EventsSection />
    </>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-staff" element={<OurStaff />} />
        <Route path="/department-community" element={<DepartmentCommunity />} />
      </Routes>

      <Footer />
    </div>
  );
}
