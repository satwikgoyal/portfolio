import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/portfolio/" component={Home} />
      <Route path="/portfolio/resume/" component={Resume} />
      <Route path="/portfolio/portfolio/" component={Portfolio} />
      <Route path="/portfolio/contact/" component={Contact} />
    </>
  );
}

export default App;
