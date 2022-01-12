import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const quoteSubmitHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={quoteSubmitHandler} />;
};

export default NewQuote;
