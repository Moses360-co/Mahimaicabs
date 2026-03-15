import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Tariff from "./Components/Tariff";
import Services from "./Components/Services";

import MoreDetails from "./Components/MoreDetails";
import SelectVehicle from "./Components/SelectVehicle";
import SelectDays from "./Components/SelectDays";
import FinalPackage from "./Components/FinalPackage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tariff" element={<Tariff />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/package/:id" element={<MoreDetails />} />
        <Route path="/select-vehicle/:id" element={<SelectVehicle />} />
        <Route path="/select-days/:id/:vehicleId" element={<SelectDays />} />
        <Route path="/final-package" element={<FinalPackage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
