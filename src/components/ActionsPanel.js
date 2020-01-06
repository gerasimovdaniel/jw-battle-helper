import React from "react"
import ToggleBlockModeButton from "../containers/ToggleBlockModeButton"
import ResetButton from "../containers/ResetButton"

export default () => (
    <div className="stripe actionsPanel">
        <ResetButton text="Reset" className="resetButton shadow"/>
        <ToggleBlockModeButton text="Block" className="toggleBlockMode shadow"/>
    </div>
);
