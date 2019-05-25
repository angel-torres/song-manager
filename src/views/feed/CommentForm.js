import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../store/actions/poemActions';

function CommentForm(props) {

    const [commentText, setCommentText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(props)

        const comment = {
            comment: commentText,
            username: props.user.username,
            user_id: props.user.id,
            poem_id: props.poemId,
        }
        props.addComment(comment);
    }


    return (
        <div className="comment-form-container">
            <img className="avatar" className="avatar" src={props.avatar} alt="user picture" />
            <form onSubmit={handleSubmit} className="comment-form">
                <input onChange={(e) => setCommentText(e.target.value)} value={commentText} className="comment-input" type="text" placeholder="comment" />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.authReducer.user)
    return {
        user: state.authReducer.user
    }
}

export default connect(mapStateToProps, {addComment})(CommentForm);