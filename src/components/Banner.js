import "../styles/Banner.css"
import logo from "../assets/logo.png"


function Banner({children}) {
    const title = 'La maison jungle';
    return (
        <div className='lmj-banner'>
            <img src={logo} alt="la maison jungle" className="lmg-logo"/>
            <h1 className='lmj-title'>{title}</h1>
        </div>
    );
}

export default Banner;