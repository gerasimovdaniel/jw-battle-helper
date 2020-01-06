import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import {createStore} from "redux"
import App from "./components/App"
import {
    SEND_HERO_TO_BATTLE,
    RETIRE_HERO,
    FILTER_HEROES,
    CHANGE_ACTIVE_SQUAD,
    TOGGLE_BLOCK_MODE,
    BLOCK_ALLY_SQUAD,
    RESET_STATE
} from "./actions"
import {addHeroToSquad, flatenSquadToHeroIdsArray} from "./data"
import {loadState, saveState} from "./cookie"
import "./index.css";
import "./style.css";

const defaultState = {
    enemy: {
        front: [],
        back: []
    },
    ally: {
        front: [],
        back: []
    },
    blockedHeroes: [],
    mode: "battle",
    heroListFor: "enemy",
    heroFilter: "*"
};

const store = createStore((state = {}, action) => {
    switch (action.type) {
        case SEND_HERO_TO_BATTLE:
            if (state.mode === "block") {
                if (state.blockedHeroes.indexOf(action.heroId) === -1) {
                    state.blockedHeroes.push(action.heroId);
                    return Object.assign({}, state, {
                        blockedHeroes: state.blockedHeroes
                    });
                } else {
                    return Object.assign({}, state, {
                        blockedHeroes: state.blockedHeroes.filter((hero) => {
                            return hero !== action.heroId;
                        })
                    });
                }
            }

            if (state.heroListFor === "ally" && state.blockedHeroes.indexOf(action.heroId) !== -1) {
                return state;
            }

            let obj = addHeroToSquad(state[state.heroListFor], action.id, action.line, state.heroListFor);
            return Object.assign({}, state, obj);
        case RETIRE_HERO:
            let side = state[action.side];
            side[action.line] = side[action.line].filter(function (e, i) {
                return i !== action.id;
            });

            return Object.assign({}, state, {
                [action.side]: side,
                heroListFor: action.side
            });
        case FILTER_HEROES:
            return Object.assign({}, state, {
                heroFilter: action.filter
            });
        case CHANGE_ACTIVE_SQUAD:
            return Object.assign({}, state, {
                heroListFor: state.mode === "block" ? "ally" : action.side
            });
        case TOGGLE_BLOCK_MODE:
            let heroListFor = "ally";

            if (state.mode === "block" && [].concat(state.enemy.front, state.enemy.back).length < 5) {
                heroListFor = "enemy";
            }

            return Object.assign({}, state, {
                mode: state.mode === "battle" ? "block" : "battle",
                heroListFor: heroListFor
            });
        case BLOCK_ALLY_SQUAD:
            return Object.assign({}, state, {
                enemy: {
                    front: [],
                    back: []
                },
                ally: {
                    front: [],
                    back: []
                },
                heroListFor: "enemy",
                blockedHeroes: state.blockedHeroes.concat(flatenSquadToHeroIdsArray(state.ally))
            });
        case RESET_STATE:
            if (!window.confirm("Do you really want to reset app state?")) {
                return state;
            }

            return Object.assign({}, state, {
                enemy: {
                    front: [],
                    back: []
                },
                ally: {
                    front: [],
                    back: []
                },
                blockedHeroes: []
            });
        default:
            return state;
    }
}, Object.assign({}, defaultState, loadState()));

store.subscribe(() => {
    const state = store.getState();

    saveState({
        enemy: state.enemy,
        ally: state.ally,
        blockedHeroes: state.blockedHeroes
    });
});

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
