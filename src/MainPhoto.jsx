import mainPhoto from './assets/main.jpg'

const MainPhoto = () => {
    return (
        <div style={{position: 'relative'}}>
            <img src={mainPhoto} width={"100%"} style={{display: 'block'}}/>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '30%',
                background: 'linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.88) 30%, rgba(255, 255, 255, 0) 100%)',
                filter: 'blur(0px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '30%',
                background: 'linear-gradient(to top, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.88) 30%, rgba(255, 255, 255, 0) 100%)',
                filter: 'blur(0px)'
            }}></div>
        </div>
    )
}
export default MainPhoto