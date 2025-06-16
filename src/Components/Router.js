import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import SingleProjectpage from "../Pages/About";
import PageNotFound from "../Pages/PageNotFound";
import { AnimatePresence } from "framer-motion";
import Projectpage from "../Pages/Projectpage";
import Contact from "../Pages/Contact";
import Work from "../Pages/Work";

function Router() {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/project/:id" element={<SingleProjectpage />} />
        <Route path="/about-me" element={<Projectpage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Router;
