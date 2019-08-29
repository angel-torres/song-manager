import React, { useEffect } from "react";
import { connect } from "react-redux";
import Firebase from "../firebase"
import CommentSection from "./comments/CommentSection";
import { Card } from "@material-ui/core";
import useStyles from "./styles/_poemCard";
import UserStamp from "./UserStamp";
import PoemStatusBar from "./PoemStatusBar";

function PoemCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.poemCard} key={props.poem.id}>
            <div className={classes.poemHeader}>
                <UserStamp username={props.poem.username} />
                <img className={classes.menu} src="https://img.icons8.com/windows/96/000000/menu-2.png" />
            </div>
            <h3 className={classes.poemTitle}>{props.poem.title}</h3>
            <div className={classes.poem}>{props.poem.poem}</div>
            <PoemStatusBar docId={props.poem.docId} commentsLength={props.poem.comments.length} likes={props.poem.likes} />
            <CommentSection comments={props.poem.comments} />
        </Card>
    );
}

const mapStateToProps = state => {
    return {
        // user: state.authReducer.user
    };
};

export default connect()(PoemCard);
// mapStateToProps,
// { like, dislike, postComment }
