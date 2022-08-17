function RoundButton({backgroundColor, textColor, text, fontFamily, image, link, onclick}) {
    let style = {
        background: {backgroundColor}.backgroundColor,
        borderRadius: '100px',
        height: '40px',
        width: '130px',

        display: 'flex',
        justifyContent: 'center'
    }
    return (
        <div style={style} onClick={onclick}>
            <a target='blank' href={link} style={{textDecoration: 'none', fontFamily: fontFamily}}>
                <img src={image} style={{verticalAlign: 'middle', marginTop: '5px', marginBottom: '6px', height: '30px'}}></img>
                <span style={{color: {textColor}.textColor, marginLeft: '3px'}}>{text}</span>
            </a>
        </div>
    )
}

export default RoundButton