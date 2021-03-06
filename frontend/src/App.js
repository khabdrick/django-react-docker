import React from "react";
import "./App.css";
import { ContactPage } from "./components/ContactList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <ContactPage />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
