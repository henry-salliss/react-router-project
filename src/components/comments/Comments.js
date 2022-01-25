import { useCallback, useState } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { getAllComments } from "../../lib/api";
import { useEffect } from "react/cjs/react.development";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "../comments/CommentsList";
import useHttp from "../../hooks/use-http";

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const { quoteID } = props;

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  const addCommentHandler = useCallback(() => {
    sendRequest(quoteID);
  }, [sendRequest, quoteID]);
  useEffect(() => {
    sendRequest(quoteID);
  }, [sendRequest, quoteID]);

  let comments;

  if (status === "pending") {
    comments = <LoadingSpinner />;
  }

  if (status === "completed" && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    (status === "completed" && loadedComments.length === 0) ||
    !loadedComments
  ) {
    comments = <p className="centered">No comments have been made...</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={quoteID} onAddComment={addCommentHandler} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
