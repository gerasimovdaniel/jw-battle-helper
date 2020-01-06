import React from "react"
import FreeHeroesList from "../containers/FreeHeroesList"
import BlockSquadButton from "../containers/BlockSquadButton"
import HeroesFilter from "./HeroesFilter"
import ActionsPanel from "./ActionsPanel"
import HeroesSquad from "./HeroesSquad"
import Legend from "./Legend"

export default () => (
    <div className="app">
        <ActionsPanel/>
        <div className="stripe enemyHeroes">
            <div className="enemyWrap">
                <Legend/>
                <HeroesSquad side="enemy"/>
            </div>
        </div>
        <div className="stripe allyHeroes">
            <div className="allyWrap">
                <HeroesSquad side="ally"/>
                <BlockSquadButton className="blockSquadButton shadow" text=" ✓"/>
            </div>
        </div>
        <HeroesFilter/>
        <div className="stripe heroesList">
            <FreeHeroesList line="front"/>
            <FreeHeroesList line="back"/>
        </div>
        <div className="footer">
            Images from <a rel="nofollow" href="http://jw.my.com/">jw.my.com</a>
        </div>
    </div>
);
