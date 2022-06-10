import "./App.css";
//Import routes and our components

import { Route } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav";

function App() {
  //we will use the Route component to specifdy each route.
  return (
    <div className="App">
      <Nav />
      <Route path="/">
        <Main />
      </Route>
      <Route path="/currencies">
        <Currencies />
      </Route>
      <Route
        path="/price/:symbol"
        render={(routerProps) => <Price {...routerProps} />}
      />
    </div>
  );
}

export default App;
