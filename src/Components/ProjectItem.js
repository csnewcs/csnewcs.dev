import React from "react"

function ProjectItem({title, description, icon, iconAlt='icon', color='black', link=''}) {
    let style = {
        borderLeft: '5px solid ' + color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        cursor: 'pointer'
    }
    return (
        <div style={style} onClick={() => window.open(link)}>
            <img height={100} src={icon} alt={iconAlt}/>
            <div>
                <p style={{fontSize: '2em'}}>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default ProjectItem