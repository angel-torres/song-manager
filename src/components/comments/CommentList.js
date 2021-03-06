import React from "react";
import Comment from "./Comment";

function CommentsList(props) {

    return (
        <>
            {props.comments.length < 1 ? null : (
                <div className="comments-container">
                    {props.comments.map(comment => {
                        return <Comment comment={comment} key={comment.id} />;
                    })}
                </div>
            )}
        </>
    );
}

export default CommentsList;
