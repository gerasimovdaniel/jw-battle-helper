import React from "react";

export default ({icon, statusClass = "", className = ""}) => {
    className = [
        className,
        icon.hero,
        "heroIcon",
        "shadow",
        [].concat(icon.offence, icon.defence).shift().toLowerCase()
    ].join(" ");

    var statusWrap = "";
    if (statusClass) {
        statusWrap = (<span className={statusClass}></span>);
    }

    return (
        <span className={className}>
      <span className="heroIconOverlay">{statusWrap}</span>
      <img
          title={icon.name}
          src={require("../images/heroes/" + icon.img)}
          alt={icon.name}
      />
      <div className="pic">
        {icon.offence.join("")}{icon.defence.join("")}
      </div>
    </span>
    );
}
