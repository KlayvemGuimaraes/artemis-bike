import './banner.css'
import BannerBike from './bannerBike.png'

const Banner = () => {
    return (
        <>
            <header className="cabecalho">
                <img src={BannerBike} className='imgBanner' alt='Logo do Organo'/>
            </header>
        </>

    )
}

export default Banner