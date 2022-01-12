import QuoteList from "../components/quotes/QuoteList";

const Quotes = () => {
  const dummyData = [
    { id: "q1", author: "Henry Salliss", text: "bruh" },
    { id: "q2", author: "Barack Obama", text: "my last name is..." },
  ];

  return <QuoteList quotes={dummyData} />;
};

export default Quotes;
