import React from "react"
import ProjectItem from "./ProjectItem"

function Portfolio() {
    let style = {
        display: 'flex',
        top: '40%',
        transform: 'translateY(-50%)',
        position: 'absolute',
        right: 0,
        width: '50%',
        justifyContent: 'center',
        borderLeft: '1px solid gray'
    }
    return (
        <div style={style}>
            <ProjectItem title='test' description='test' />
        </div>
    )
}
export default Portfolio