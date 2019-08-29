import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Firebase from "../firebase"
import CommentSection from "./comments/CommentSection";
import { Card } from "@material-ui/core";
import useStyles from "./styles/_poemCard";
import UserStamp from "./UserStamp";
import PoemStatusBar from "./PoemStatusBar";

function PoemCard(props) {
    const classes = useStyles();
    const poemDoc = Firebase.Poems.doc(props.poem.docId);
    const [poem, setPoem] = useState(props.poem);

    const fetchPoem = () => {
        poemDoc.get().then((querySnapshot) => {
            console.log("fetching poems")
            setPoem(querySnapshot.data());
        })
    }

    useEffect(() => {
        fetchPoem();
    }, []);

    return (
        <Card className={classes.poemCard} key={poem.id}>
            <div className={classes.poemHeader}>
                <UserStamp username={poem.username} />
                <img className={classes.menu} src="https://img.icons8.com/windows/96/000000/menu-2.png" />
            </div>
            <h3 className={classes.poemTitle}>{poem.title}</h3>
            <div className={classes.poem}>{poem.poem}</div>
            <PoemStatusBar fetchPoem={fetchPoem} poemDoc={poemDoc} docId={poem.docId} commentsLength={poem.comments.length} likes={poem.likes} />
            <CommentSection comments={poem.comments} />
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
