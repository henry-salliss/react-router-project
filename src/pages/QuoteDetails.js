import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetails = () => {
  const params = useParams();
  const match = useRouteMatch();

  const dummyData = [
    { id: "q1", author: "Henry Salliss", text: "bruh" },
    { id: "q2", author: "Barack Obama", text: "my last name is..." },
  ];

  const quote = dummyData.find((quote) => quote.id === params.quoteID);

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.url}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteID}/comments`}>
            Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
