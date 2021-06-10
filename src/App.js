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
import "./custom.scss";
import Members from "./pages/Members";
import Clubterms from "./pages/Clubterms";
import Licenses from "./pages/Licenses";
import Prices from "./pages/Prices";
import Board from "./pages/Board";
import Equality from "./pages/Equality";
import Competitions from "./pages/Competitions";
import Communications from "./pages/Communications";
import Beginners from "./pages/Beginners";
import Beginnercourses from "./pages/Beginnercourses";
import Beginnerinstructions from "./pages/Beginnerinstructions";
import Juniors from "./pages/Juniors";
import Seniors from "./pages/Seniors";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Jumbotron />
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/club" component={Club} />
              <Route exact path="/schedule" component={Schedule} />
              <Route exact path="/about" component={About} />
              <Route exact path="/instructors" component={Instructors} />
              <Route exact path="/members" component={Members} />
              <Route exact path="/clubterms" component={Clubterms} />
              <Route exact path="/licenses" component={Licenses} />
              <Route exact path="/board" component={Board} />
              <Route exact path="/prices" component={Prices} />
              <Route exact path="/beginners" component={Beginners} />
              <Route exact path="/juniors" component={Juniors} />
              <Route exact path="/seniors" component={Seniors} />
              <Route exact path="/beginnercourses" component={Beginnercourses} />
              <Route exact path="/beginnerinstructions" component={Beginnerinstructions} />
              <Route exact path="/equality" component={Equality} />
              <Route exact path="/communications" component={Communications} />
              <Route exact path="/competitions" component={Competitions} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/store" component={Store} />
              <Route exact path="/add" component={AddInstructor} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/preferences" component={Preferences} />
              <Route exact path="/login" component={Login} />
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
