import {connect} from "react-redux"
import Button from "../components/Button"
import {filterFreeHeroes} from "../actions"

const mapStateToProps = (state, ownProps) => {
    let className = ownProps.className;
    if (ownProps.filter === state.heroFilter) {
        className += " act";
    }

    return {
        className: className
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(filterFreeHeroes(ownProps.filter))
        }
    }
}

const FilterButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default FilterButton
