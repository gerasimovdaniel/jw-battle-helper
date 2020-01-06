import React from "react"
import FilterButton from "../containers/FilterButton"

export default () => (
    <div className="heroesFilter">
        <FilterButton text="All" filter="*" className="all shadow"/>
        <FilterButton text="S" filter="S" className="s shadow"/>
        <FilterButton text="M" filter="M" className="m shadow"/>
        <FilterButton text="U" filter="U" className="u shadow"/>
        <FilterButton text="D" filter="D" className="d shadow"/>
        <FilterButton text="R" filter="R" className="r shadow"/>
    </div>
);
