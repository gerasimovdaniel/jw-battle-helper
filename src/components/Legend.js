import React from "react";

function Legend() {
    return (
        <ul className="legend shadow">
            <li>
                <span className="s">S</span>
                &nbsp;&gt;&nbsp;
                <span className="r">R</span>
            </li>
            <li>
                <span className="m">M</span>
                &nbsp;&gt;&nbsp;
                <span className="d">D</span>
            </li>
            <li>
                <span className="d">D</span>
                &nbsp;&gt;&nbsp;
                <span className="s">S</span>
            </li>
            <li>
                <span className="r">R</span>
                &nbsp;&gt;&nbsp;
                <span className="m">M</span>
            </li>
        </ul>
    )
}

export default Legend
