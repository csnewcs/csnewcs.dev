import RoundButton from './RoundButton'

function Profile() {
    const githubLink = 'https://github.com/csnewcs'
    let style = {
        display: 'flex',
        justifyContent: 'center',
    }
    return (
        <div className="profile" style={style}>
            <h1 style={{paddingRight: '30px', paddingTop: '15px'}}>csnewcs</h1>
            <div>
                <RoundButton backgroundColor='gray' textColor='white' text='Github' image='https://github.githubassets.com/favicons/favicon.png' link={githubLink} fontFamily={'Gothic A1'} fontSize='18pt'/>
                <hr />
                <RoundButton backgroundColor='#5865F2' image='https://assets-global.website-files.com/6257adef93867e50d84d30e2/62595384f934b806f37f4956_145dc557845548a36a82337912ca3ac5.svg' text='Discord' textColor='white' fontFamily={'Dela Gothic One'} fontSize='15pt' onclick={() => {navigator.clipboard.writeText('csnewcs#8817'); alert('복사 완료')}}/>
            </div>
        </div>

    )
}
export default Profile