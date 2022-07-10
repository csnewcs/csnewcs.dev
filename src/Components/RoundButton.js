function RoundButton({backgroundColor, textColor, text, fontFamily, image, link}) {
    let style = {
        background: {backgroundColor}.backgroundColor,
        borderRadius: '100px',
        height: '40px',
        width: '100px',

        display: 'flex',
        justifyContent: 'center'
    }
    return (
        <div style={style}>
            <a target='blank' href={link} style={{textDecoration: 'none'}}>
                <img src={image} style={{verticalAlign: 'middle', marginTop: '5px', marginBottom: '6px'}}></img>
                <span style={{color: {textColor}.textColor, marginLeft: '3px'}}>{text}</span>
            </a>
        </div>
    )
}

export default RoundButton