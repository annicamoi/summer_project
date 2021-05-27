import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Instructors from "./pages/Instructors";
import { Contact } from "./pages/Contact";
import { NoMatch } from "./pages/NoMatch";
import { Layout } from "./components/Layout";
import { Jumbotron } from "./components/Jumbotron";
import Footer from "./components/Footer";
import { NavigationBar } from "./components/NavigationBar";
import Club from "./pages/Club";
import Schedule from "./pages/Schedule";
import Store from "./pages/Store";
import AddInstructor from "./pages/Add";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/club" component={Club} />
              <Route exact path="/schedule" component={Schedule} />
              <Route exact path="/about" component={About} />
              <Route exact path="/instructors" component={Instructors} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/store" component={Store} />
              <Route exact path="/add" component={AddInstructor} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
