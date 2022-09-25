import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function ProjectItem({ title, description, icon, iconAlt = 'icon', fontAwesomeIcon, color = 'black', link = '' }) {
    let style = {
        borderLeft: '5px solid ' + color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        cursor: 'pointer',
        marginTop: '1em'
    }
    let innerStyle = {
        justifyContetent: 'start',
        // border: '1px solid gray'
    }
    if (icon === undefined || icon === null) {
        return (
            <div style={style} onClick={() => window.open(link)}>
                <FontAwesomeIcon icon={fontAwesomeIcon} size='4x' style={{marginLeft: '10px'}}/>
                <div style={innerStyle}>
                    <p style={{ fontSize: '2em' }}>{title}</p>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div style={style} onClick={() => window.open(link)}>
                <img style={{width: '4em'}} src={icon} alt={iconAlt} />
                <div style={innerStyle}>
                    <p style={{ fontSize: '2em' }}>{title}</p>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}
export default ProjectItem