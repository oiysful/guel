import './App.css'

import AudioComponent from "./AudioComponent.jsx";
import TopMessage from "./TopMessage.jsx";
import MainPhoto from "./MainPhoto.jsx";
import Greeting from "./Greeting.jsx";

function App() {
    //테스트 환경에서 div간 경계를 확인하기 위한 용도
    const debug = process.env.NODE_ENV === 'development' ? "solid" : "none";

    return (
        <>
            <div className='main-frame'>
                <div style={{border: debug, textAlign: 'right'}}>
                    <AudioComponent/>
                </div>
                <div className="fade-in" style={{border: debug}}>
                    <TopMessage/>
                </div>
                <div className="fade-in" style={{border: debug}}>
                    <MainPhoto/>
                </div>
                <div className="fade-in" style={{border: debug}}>
                    <Greeting/>
                </div>
                <div className="fade-in" style={{border: debug}}>
                    달력
                </div>
                <div className="fade-in" style={{border: debug}}>
                    이미지 갤러리
                </div>
                <div className="fade-in" style={{border: debug}}>
                    결혼식 장소
                </div>
                <div className="fade-in" style={{border: debug}}>
                    신랑신부 계좌 정보
                </div>
                <div className="fade-in" style={{border: debug}}>
                    카카오톡 공유하기 / 청첩장 주소 복사하기
                </div>
            </div>
        </>
    )
}

export default App