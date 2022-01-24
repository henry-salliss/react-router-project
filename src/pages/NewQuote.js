import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") history.push("/quotes");
  }, [status, history]);

  const quoteSubmitHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={quoteSubmitHandler}
    />
  );
};

export default NewQuote;
