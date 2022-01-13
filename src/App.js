import { Route, Switch, Redirect } from "react-router-dom";

import QuoteDetails from "./pages/QuoteDetails";
import Quotes from "./pages/Quotes";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} exact>
          <Redirect to={"/quotes"} />
        </Route>
        <Route path={"/quotes"} exact>
          <Quotes />
        </Route>
        <Route path={"/new-quote"}>
          <NewQuote />
        </Route>
        <Route path={"/quotes/:quoteID"}>
          <QuoteDetails />
        </Route>
        <Route path={"*"}>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
