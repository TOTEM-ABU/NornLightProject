import { NavLink, useNavigate } from 'react-router';
import { BtnBig, BtnNW, BtnScrol, BtnK } from './Button.styles'
import korzinkaImg from './images/korzinka.svg'

const Button = ({ type, text, styles }) => {

    const buttonTypes = ['btnBig', 'btnN', 'btnScrol','btnK'];

    const navigate = useNavigate();

    function sendProduct(){
        navigate('/basket', {state: 'salom'});
    }

    const btnObj = {
        btnBig: <BtnBig style={styles}>{text}</BtnBig>,
        btnN: <BtnNW as={NavLink} to={'/catalog'} style={styles} className='HeaderComponentButton'> <div><p></p><p className='smallP'></p><p></p></div> Каталог</BtnNW>,
        btnScrol: <BtnScrol style={styles} > <button className='leftBtn'><i class="fa-solid fa-arrow-left"></i></button>  <button className='rightBtn'><i class="fa-solid fa-arrow-right"></i></button></BtnScrol>,
        btnK: <BtnK onClick={() => sendProduct(1)} style={styles} > <img src={korzinkaImg} alt="this korzinga img" /> </BtnK>
    }

    if(!buttonTypes.includes(type)){
        return <h2> Buttonga Error Type Berdings </h2>
    } else {
        return btnObj[type];
    }
}

export default Button;