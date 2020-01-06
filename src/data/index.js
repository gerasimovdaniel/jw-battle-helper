import {frontLine, backLine} from "./heroes-list.js"

export {frontLine, backLine}

export function findHeroByIndex(index, line) {
    let heroes = line === "front" ? frontLine() : backLine();

    return heroes[index];
}

export function findHeroIndexById(id, line) {
    let heroes = line === "front" ? frontLine() : backLine();

    return heroes.findIndex(function (h) {
        return h.hero === id;
    });
}

export function addHeroToSquad(state, id, line, side) {
    if (state.front.length + state.back.length >= 5) {
        return {
            heroListFor: side === "enemy" ? "ally" : "enemy"
        };
    }

    state[line].push(id);
    state[line].sort(function (a, b) {
        if (side === "enemy") {
            return b - a;
        }

        return a - b;
    });

    return {
        [side]: state
    };
}

export function flatenSquadToHeroIdsArray(squad) {
    const front = frontLine();
    const back = backLine();
    const frontHeroes = squad.front.map((pos) => {
        return front[pos].hero
    });
    const backHeroes = squad.back.map((pos) => {
        return back[pos].hero
    });

    return [].concat(frontHeroes, backHeroes);
}
