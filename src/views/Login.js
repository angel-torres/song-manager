// React
import React, { useState } from "react";

import { connect } from "react-redux";
import { authWithGoogle } from "../store/actions";
import Loader from "react-loader-spinner";
import useStyles from "./styles/_publicRoutes";
import { Link } from "react-router-dom";
import { loginWithEmail } from "../store/actions";
import colors from "../helpers/colorPalette";

import TextInput from "../components/inputs/TextInput"

import {
    Card,
    Divider,
} from "@material-ui/core";

function Login(props) {
    const classes = useStyles();
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        signingUp: false,
    });

    const onChange = (event, name) => {
        setInputs({ ...inputs, [name]: event.target.value })
    };

    const onSubmit = () => {
        const { email, password } = inputs;
        props.loginWithEmail(email, password);
    };

    return (
        <div className={classes.container}>
            <Card className={classes.card}>
                {props.started ? (
                    <Loader type="Oval" color={colors.primary} height={80} width={80} />
                ) : (
                        <>
                            <h1 className={classes.logo}>Calliope</h1>
                            <p>Login with the following</p>
                            <Divider variant="middle" />
                            <button
                                className={classes.button}
                                onClick={props.authWithGoogle}
                            >
                                Login with Google
                            </button>
                            OR
                            <form className={classes.loginForm} onSubmit={onSubmit}>
                                <TextInput
                                    variant="outlined"
                                    label="Email"
                                    placeholder="Email"
                                    className={classes.formInput}
                                    type="email"
                                    name="email"
                                    value={inputs.email}
                                    onChange={e => onChange(e, "email")} />
                                <TextInput
                                    variant="outlined"
                                    className={classes.formInput}
                                    type="password"
                                    name="password"
                                    label="Password"
                                    placeholder="Password"
                                    value={inputs.password}
                                    onChange={onChange} />
                                <button className={classes.button}>Login</button>
                            </form>
                            <p className={classes.error}>{props.error}</p>
                            <p>Don't have an account? <Link to="/">Signup</Link></p>
                        </>

                    )}
            </Card>
        </div>
    );
}

const mapStateToProps = state => {
    const { user, started, finished, error } = state.authReducer;
    return {
        started: started,
        finished: finished,
        error: error,
        user: user
    };
};

export default connect(
    mapStateToProps,
    { authWithGoogle, loginWithEmail }
)(Login);
