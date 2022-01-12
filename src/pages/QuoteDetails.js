import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";

const QuoteDetails = () => {
  const params = useParams();
  console.log(params);

  return (
    <Fragment>
      <p>{params.quoteID}</p>
      <Route path={`/quotes/${params.quoteID}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
