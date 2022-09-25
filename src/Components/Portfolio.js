import React from "react"
import ProjectItem from "./ProjectItem"

function Portfolio() {
    let style = {
        justifyContent: 'center',
        alignItem: 'center'
    }
    return (
        <div style={style}> 
            <h2>연도별 대표 프로젝트</h2>
            <ProjectItem title='사칙연산' description='빠른 계산으로 점수를 올리세요! (2018)' link='https://github.com/csnewcs/-' icon='https://raw.githubusercontent.com/csnewcs/-/master/%ED%95%99%EA%B5%90%20%EA%B0%9C%EC%9D%B8%EC%9E%91%ED%92%88/%ED%95%99%EA%B5%90%20%EA%B0%9C%EC%9D%B8%EC%9E%91%ED%92%88/Untitled-1.ico'/>
            <ProjectItem title='School Computer Security' description='교실 컴퓨터를 감시 아니 관리! (2019)' link="https://github.com/SoftWareAndGuider/SchoolComputerSecurity" fontAwesomeIcon='computer'/>
            <ProjectItem title='Covid Check Client' description='발열체크 기록 앱 (2020)' link='https://github.com/SoftWareAndGuider/Covid-Check-Client' fontAwesomeIcon='circle-user'></ProjectItem>
            <ProjectItem title='TranslateMirrorBot' description='실시간 채팅 번역 봇 (2021)' link="https://github.com/csnewcs/TranslateMirrorBot" icon='https://github.com/csnewcs/TranslateMirrorBot/blob/main/Logo/logo.png?raw=true'></ProjectItem>
            <ProjectItem title='Piano' description='Arduino를 이용한 절대음감 테스트 게임 (2022)' link="https://github.com/kthbjh/piano" fontAwesomeIcon="music"></ProjectItem>
        </div>
    )
}
export default Portfolio