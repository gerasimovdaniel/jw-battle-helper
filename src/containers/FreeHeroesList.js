import {connect} from "react-redux"
import HeroesList from "../components/HeroesList"
import {sendHeroToBattle} from "../actions"
import {frontLine, backLine} from "../data"

function filterHeroes(heroes, filter, busyHeroes, blockedHeroes) {
    var incompatibleHeroesIds = [];

    busyHeroes.forEach(function (e) {
        heroes[e].disabled = true;

        if (typeof heroes[e].incompatibleWith !== "undefined") {
            incompatibleHeroesIds = incompatibleHeroesIds.concat(heroes[e].incompatibleWith);
        }
    });

    heroes.map((h) => {
        if (filter !== "*") {
            h.hidden = [].concat(h.offence, h.defence).indexOf(filter) === -1;
        }

        h.blocked = blockedHeroes.indexOf(h.hero) !== -1;

        if (incompatibleHeroesIds.indexOf(h.hero) !== -1) {
            h.disabled = true;
        }

        return h;
    });

    return heroes;
}

const mapStateToProps = (state, ownProps) => {
    const heroes = ownProps.line === "front" ? frontLine() : backLine();
    const busyHeroes = state[state.heroListFor][ownProps.line];
    let blockedHeroes = [];
    if (state.mode === "block" || state.heroListFor === "ally") {
        blockedHeroes = state.blockedHeroes;
    }
    const visibleHeroes = filterHeroes(heroes, state.heroFilter, busyHeroes, blockedHeroes);

    return {
        heroes: visibleHeroes
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (index, line, heroId) => {
        dispatch(sendHeroToBattle(index, line, heroId))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);
