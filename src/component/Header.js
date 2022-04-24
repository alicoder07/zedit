import {LazyLoadImage} from 'react-lazy-load-image-component'
import Logo from '../image/logo.ico'

function Header(){
    
    return (
        <div className={'header'}>
            <div className={'header__right'}>
                <LazyLoadImage src={Logo} alt={'Markaz logotipi'} effect={'blur'} className={'dd'}/>
            </div>
            <div className={'header__left'}>
                <a className={'header__link'} href={'https://t.me/zeditacademy'}>
                    <i className="fa-brands fa-telegram header__icon"></i>
                </a>
                <a className={'header__link'} href={'https://instagram.com/zeditacademy?utm_medium=copy_link'}>
                    <i className="fa-brands fa-instagram header__icon"></i>
                </a>
                <a className={'header__link'} href={'http://facebook.com/zeditacademy_uz'}>
                    <i className="fa-brands fa-facebook header__icon"></i>
                </a>
            </div>
        </div>
    )
}

export default Header