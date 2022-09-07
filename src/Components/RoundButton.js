function RoundButton({backgroundColor, textColor, text, fontFamily, fontSize,image, link, onclick}) {
    let style = {
        background: {backgroundColor}.backgroundColor,
        borderRadius: '100px',
        height: '60px',
        width: '200px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center'
    }
    return (
        <div style={style} onClick={onclick}>
            <a target='blank' href={link} style={{textDecoration: 'none', fontFamily: fontFamily, fontSize: fontSize}}>
                <img src={image} alt="아이콘" style={{verticalAlign: 'middle', marginTop: '8px', marginBottom: '9px', height: '45px'}}></img>
                <span style={{color: {textColor}.textColor, marginLeft: '9px'}}>{text}</span>
            </a>
        </div>
    )
}

export default RoundButton