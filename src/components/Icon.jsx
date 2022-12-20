import React from 'react';

const Icon = ({ icon }) => {
  console.log("icon:", icon.icon)
  return (
    <div className="icon">
      {!["bxl-mongodb", "svelte"].includes(icon.icon) ? <i className={`bx ${icon.icon}`}></i> : <img src={`/static/assets/icons/${icon.icon}.svg`} className="svg-icon" />}
      <p>{icon.iconName}</p>
    </div>
  )
}

export default Icon;