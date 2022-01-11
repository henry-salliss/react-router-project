import { Route, Switch } from "react-router-dom";

import QuoteDetails from "./pages/QuoteDetails";
import Quotes from "./pages/Quotes";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
    <Switch>
      <Route path={"/quotes"} exact>
        <Quotes />
      </Route>
      <Route path={"/newquote"}>
        <NewQuote />
      </Route>
      <Route path={"/quotes/:quoteID"}>
        <QuoteDetails />
      </Route>
    </Switch>
  );
}

export default App;
