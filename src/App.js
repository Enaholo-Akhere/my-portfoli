import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/projects/project";
import Contacts from "./pages/contacts/contact";
import Home from "./pages/landingPage/landingpage";
import Signup from "./pages/signup/signup";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
