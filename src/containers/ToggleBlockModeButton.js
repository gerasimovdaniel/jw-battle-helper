import {connect} from "react-redux"
import Button from "../components/Button"
import {toggleBlockMode} from "../actions"

const mapStateToProps = (state, ownProps) => {
    return {
        className: ownProps.className + (state.mode === "battle" ? "" : " act")
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(toggleBlockMode())
        }
    }
}

const ToggleBlockModeButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default ToggleBlockModeButton
