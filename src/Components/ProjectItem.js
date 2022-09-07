import React from "react"

function ProjectItem({title, description, icon, iconAlt='icon', color='black'}) {
    let style = {
        // border: '1px solid gray',
        borderLeft: '5px solid ' + color
    }
    return (
        <div style={style}>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}
export default ProjectItem