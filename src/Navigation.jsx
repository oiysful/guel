import mapImg from './assets/map.png'
import Transport from './Transport'

const Navigation = () => {
    return (
        <>
            <h1>Location</h1>
            <img src={mapImg} width={"90%"}></img><br/>
            주소 : 서울 종로구 사직로 161<br/><br/>
            <Transport
                tr_type="metro"
            />
            <Transport
                tr_type="bus"
            />
            <Transport
                tr_type="car"
            />
        </>
    )
}

export default Navigation;