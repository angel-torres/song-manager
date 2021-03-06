import { makeStyles } from "@material-ui/core";
import colors from "../../../helpers/colorPalette";

const useStyles = makeStyles((theme) => ({
    editorContainer: {
        width: "100%",
        paddingTop: "15px",
        fontSize: ".9rem",
        height: "100%",
        backgroundColor: "#fffafc",
        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
            boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
            border: "0px",
        }
    },
    editor: {
        width: "100%",
        padding: "20px",
        fontSize: ".9rem",
        height: "100%",
        backgroundColor: "white",
        "&::placeholder": {
            color: "#B9BABC"
        },
        "&:focus": {
            outline: "none",
            backgroundColor: "white",
            border: "0px",
        }
    },
    titleInput: {
        width: "100%",
        marginTop: "5px",
        height: "45px",
        padding: "20px",
        display: "flex",
        border: "0",
        fontSize: ".9rem",
        backgroundColor: "white",
        "&::placeholder": {
            color: colors.primary
        },
        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
            border: "0px",
        }
    },
    poemTitle: {
        color: colors.primary
    }
}));

export default useStyles;