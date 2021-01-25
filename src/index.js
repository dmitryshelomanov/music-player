import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import { PlayerPage, DropzonePage } from "./pages";
import { GlobalStyles } from "./ui";

function App() {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <HashRouter>
        <Route path="/" component={DropzonePage} exact />
        <Route path="/player" component={PlayerPage} />
      </HashRouter>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
