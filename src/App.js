import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { InitialSelection } from "./app/components/screens/InitialSelection.jsx";
import Shell from "./app/components/screens/main-shell/Shell.jsx";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <InitialSelection />
          </Route>
          <Route path="/shell/:form/:design">
            <Shell />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
