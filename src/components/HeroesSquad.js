import React from "react"
import {connect} from "react-redux"
import HeroesList from "./HeroesList"
import {retireHero, changeActiveSquad} from "../actions"
import {findHeroByIndex} from "../data"

function HeroesSquad(props) {
    const topLineHeroes = props.topLine.heroes.map(function (i) {
        return findHeroByIndex(i, props.topLine.name);
    });

    const bottomLineHeroes = props.bottomLine.heroes.map(function (i) {
        return findHeroByIndex(i, props.bottomLine.name);
    });

    let className = ["heroesSquad", "shadow", props.side];
    if (props.isActive) {
        className.push("act");
    }
    if (props.isBlocked) {
        className.push("blocked");
    }

    return (
        <div className={className.join(" ")} onClick={() => {props.onClick()}}>
            <HeroesList heroes={topLineHeroes} line={props.topLine.name} onClick={(i, line) => {props.heroOnClick(i, line)}} squad={props.side}/>
            <HeroesList heroes={bottomLineHeroes} line={props.bottomLine.name} onClick={(i, line) => {props.heroOnClick(i, line)}} squad={props.side}/>
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    let ret = {};

    if (ownProps.side === "enemy") {
        ret = {
            topLine: {
                heroes: state.enemy.back,
                name: "back"
            },
            bottomLine: {
                heroes: state.enemy.front,
                name: "front"
            }
        }
    } else {
        ret = {
            topLine: {
                heroes: state.ally.front,
                name: "front"
            },
            bottomLine: {
                heroes: state.ally.back,
                name: "back"
            }
        }
    }

    if (state.mode === "block" && ownProps.side === "ally") {
        ret.isBlocked = true;
    }

    ret.isActive = state.heroListFor === ownProps.side;

    return ret;
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    heroOnClick: (index, line) => {
        dispatch(retireHero(index, line, ownProps.side));
    },
    onClick: () => {
        dispatch(changeActiveSquad(ownProps.side));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroesSquad)
