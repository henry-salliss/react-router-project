import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react/cjs/react.development";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetails = () => {
  const params = useParams();
  const match = useRouteMatch();
  console.log(match.url);
  console.log(params);

  const { quoteID } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteID);
  }, [sendRequest, quoteID]);

  if (status === "loading") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "error") {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote) {
    return <p className="centered">No quote found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`${match.url}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteID}/comments`}>
            Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.url}/comments`}>
        <Comments quoteId={quoteID} />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
