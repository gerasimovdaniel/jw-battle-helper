import {connect} from "react-redux"
import HeroIcon from "../components/HeroIcon"
import {findHeroIndexById} from "../data"

function isMagickDisabledByGorbach(state, icon, squad) {
    let side = state.heroListFor === "enemy" ? "ally" : "enemy";
    let gorbachIndex = findHeroIndexById(58, "back");
    let affectedHeroes = ["3", "38", "25", "26", "8", "57", "23", "43", "17", "52", "14", "11", "7", "12", "13", "10"];

    if (squad) {
        side = squad === "enemy" ? "ally" : "enemy";
    }

    return state[side].back.indexOf(gorbachIndex) !== -1 && affectedHeroes.indexOf(icon.hero) !== -1;
}

const mapStateToProps = (state, ownProps) => {
    let newProps = {className: "", statusClass: ""}

    if (isMagickDisabledByGorbach(state, ownProps.icon, ownProps.squad)) {
        newProps.className = "withOverlay";
        newProps.statusClass = "jh-iconlink";
    }

    return Object.assign({}, newProps, ownProps);
}

export default connect(mapStateToProps, null)(HeroIcon);
