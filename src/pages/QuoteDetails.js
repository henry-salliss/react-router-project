import { useParams } from "react-router-dom";

const QuoteDetails = () => {
  const params = useParams();
  console.log(params);

  return <p>{params.quoteID}</p>;
};

export default QuoteDetails;
