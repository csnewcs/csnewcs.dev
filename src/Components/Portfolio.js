import React from "react"
import ProjectItem from "./ProjectItem"

function Portfolio() {
    let style = {
        justifyContent: 'center',
        alignItem: 'center',

    }
    return (
        <div style={style}> 
            <ProjectItem title='Covid Check Client' description='발열체크 기록 앱'></ProjectItem>
            <ProjectItem color='#B38F6F' title='한국어물음표' description='채팅 중 단어 뜻을 모르거나 맞춤법이 헷갈릴 때 쓸 수 있는 디스코드 봇' link="https://github.com/csnewcs/KoreanQuestionMark" icon={'https://camo.githubusercontent.com/0f574453de7e62c3889ff79c48d1da631e1a2364be25f89bd60d75041452661a/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3932333733393830313531363133343436312f3932343135313938333138313532393130382f623835663538613961656230323730642e706e67'}/>
            <ProjectItem title='Piano' description='Arduino를 이용한 절대음감 테스트 게임' link="https://github.com/kthbjh/piano"></ProjectItem>
        </div>
    )
}
export default Portfolio