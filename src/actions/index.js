export const SEND_HERO_TO_BATTLE = "SEND_HERO_TO_BATTLE";
export const RETIRE_HERO = "RETIRE_HERO";
export const FILTER_HEROES = "FILTER_HEROES";
export const CHANGE_ACTIVE_SQUAD = "CHANGE_ACTIVE_SQUAD";
export const TOGGLE_BLOCK_MODE = "TOGGLE_BLOCK_MODE";
export const BLOCK_ALLY_SQUAD = "BLOCK_ALLY_SQUAD";
export const RESET_STATE = "RESET_STATE";

export function sendHeroToBattle(id, line, heroId) {
    return {type: SEND_HERO_TO_BATTLE, id: id, line: line, heroId: heroId}
}

export function retireHero(id, line, side) {
    return {type: RETIRE_HERO, id: id, line: line, side: side}
}

export function filterFreeHeroes(filter) {
    return {type: FILTER_HEROES, filter: filter}
}

export function changeActiveSquad(side) {
    return {type: CHANGE_ACTIVE_SQUAD, side: side}
}

export function toggleBlockMode() {
    return {type: TOGGLE_BLOCK_MODE}
}

export function blockAllySquad() {
    return {type: BLOCK_ALLY_SQUAD}
}

export const resetState = () => ({
    type: RESET_STATE
});
