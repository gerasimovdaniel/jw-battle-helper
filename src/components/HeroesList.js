import React from "react"
import HeroIconContainer from "../containers/HeroIconContainer"

const getHeroIconClassName = (icon) => {
    let className = [];

    if (icon.disabled) {
        className.push("disabled");
    }

    if (icon.hidden) {
        className.push("hidden");
    }

    if (icon.blocked) {
        className.push("blocked");
    }

    return className.join(" ");
}

export default ({heroes, onClick, line, squad = ""}) => {
    const heroIcons = heroes.map((icon, i) => (
        <li
            key={icon.hero}
            className={getHeroIconClassName(icon)}
            onClick={() => {!icon.disabled && onClick(i, line, icon.hero)}}
        >
            <HeroIconContainer icon={icon} squad={squad}/>
        </li>
    ));

    return (
        <ul className="iconsList">
            {heroIcons}
        </ul>
    );
}
