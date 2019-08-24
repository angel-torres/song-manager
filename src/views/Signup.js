import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import {
    Card,
    Container,
    Divider,
    Button,
    makeStyles
} from "@material-ui/core";

import SignupModal from "../components/modals/SignupModal";

import { authWithGoogle } from "../store/actions";
import Firebase from "../firebase";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    dense: {
        marginTop: theme.spacing(2)
    },
    menu: {
        width: "100%"
    },
    button: {
        width: "100%",
        height: "40px",
        margin: "10px",
        fontSize: "1.2rem",
        backgroundColor: "#DA6991",
        "&:hover": {
            backgroundColor: "#DA6991"
        }
    },
    card: {
        marginTop: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "160px 80px"
    }
}));

function Signup(props) {
    const classes = useStyles();

    const handleAuth = () => {
        const user = Firebase.checkUser();
        localStorage.getItem("token") ? props.history.push("/home") : props.history.push("/signup");
    };

    useEffect(() => {
        console.log("props from signup", props);
        handleAuth();
    }, [props.started]);

    return (
        <Container maxWidth="sm">
            <Card className={classes.card}>
                {props.started ? (
                    <Loader
                        type="Oval"
                        color="#22223B"
                        height={80}
                        width={80}
                    />
                ) : (
                        <>
                            <strong>{props.error}</strong>
                            <p>Signup with the following</p>
                            <Divider variant="middle" />
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={props.authWithGoogle}
                            >
                                Signup with Google
                        </Button>
                            <SignupModal />
                        </>
                    )}
            </Card>
        </Container>
    );
}

const mapStateToProps = state => {
    const { started, finished, error } = state.authReducer;
    return {
        started: started,
        finished: finished,
        error: error
    };
};

export default connect(
    mapStateToProps,
    { authWithGoogle }
)(Signup);
