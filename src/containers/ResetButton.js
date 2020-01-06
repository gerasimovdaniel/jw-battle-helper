import {connect} from "react-redux"
import Button from "../components/Button"
import {resetState} from "../actions"

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick() {
        dispatch(resetState());
    }
});

const ResetButton = connect(null, mapDispatchToProps)(Button);

export default ResetButton;
