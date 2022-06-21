import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ContactPage,
  DemosPage,
  ErrorPage,
  FeaturesPage,
  HomePage,
  PricingPage,
} from "./allPages";

const Navigation: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/demos" element={<DemosPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
