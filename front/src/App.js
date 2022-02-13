import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./afterlogin";
import Home from "./Home";
import Footer from "./components/Navbar/Footer";
import Navbar from "./components/Navbar/Navbar";
import shoe1 from "./background1.jpg";
import Demo from "./Openings";
import { Tabs, Tab, Table, Row, Col, Form, Button } from "react-bootstrap";
import Maintenance from "./maintenance";
import piece from "./Pieces";
import Game from "./Game";
import NewGame from "./newgame";
import Home2 from "./User";
import Map from "./Map";
function text() {
  return (
    <div
      className="flex"
      style={{
        textAlign: "center",
        alignItems: "center",
        textAlignVertical: "center",
      }}
    >
      <br />
      <div
        className="p-1 rounded "
        style={{ backgroundColor: "rgba(32, 41, 69, 0.4)" }}
      >
        <br />
        <h3 style={{ color: "white" }}> Disclaimer:</h3>
        <br />
        <form>
          <h4 style={{ color: "white" }}>
            This website is student lab work and does not necessarily reflect
            Jacobs University Bremen opinions. Jacobs University Bremen does not
            endorse this site, nor is it checked by Jacobs University Bremen
            regularly, nor is it part of the official Jacobs University Bremen
            web presence.
          </h4>
          <br />
          <br />
          <h4 style={{ color: "white" }}>
            For each external link existing on this website, we initially have
            checked that the target page does not contain contents which is
            illegal wrt. German jurisdiction. However, as we have no influence
            on such contents, this may change without our notice. Therefore we
            deny any responsibility for the websites referenced through our
            external links from here.
          </h4>
          <br />
          <br />
          <h4 style={{ color: "white" }}>
            No information conflicting with GDPR is stored in the server.
          </h4>
          <br />
          <br />
        </form>
      </div>
      <br />
      <br />
      <br />
      <div
        className="p-1 rounded "
        style={{
          backgroundColor: "rgba(32, 41, 69, 0.4)",
        }}
      >
        <form>
          <h4 style={{ color: "white" }}>Contact Information:</h4>
          <h5 style={{ color: "white" }}>H.bouhelalatjacobs-university.de</h5>
          <h5 style={{ color: "white" }}>B.essefianyatjacobs-university.de</h5>
          <h5 style={{ color: "white" }}>m.arsalaneatjacobs-university.de</h5>
          <h5 style={{ color: "white" }}>s.jadouriesatjacobs-university.de</h5>
        </form>
      </div>
      <br />
    </div>
  );
}
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${shoe1})`,
      }}
    >
      <Router>
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Dashboard" component={About} />
          <Route path="/Openings" component={Demo} />
          <Route path="/Imprint" component={text} />
          <Route path="/Maintenance" component={Maintenance} />
          <Route path="/Pieces" component={piece} />
          <Route path="/Game" component={Game} />
          <Route path="/ingame" component={NewGame} />
          <Route path="/inuser" component={Home2} />
          <Route path="/map" component={Map} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
