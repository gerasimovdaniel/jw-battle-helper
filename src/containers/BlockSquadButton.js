import {connect} from "react-redux"
import Button from "../components/Button"
import {blockAllySquad} from "../actions"

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(blockAllySquad())
        }
    }
}

const BlockSquadButton = connect(null, mapDispatchToProps)(Button);

export default BlockSquadButton
