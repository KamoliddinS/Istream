import { Link } from 'react-router-dom'
import './header.scss'
import Logo from 'assets/icons/logo.svg'
import Menu from 'assets/icons/menu.svg'
import Avatar from 'assets/icons/avatarka.svg'
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="">
                    <header>
                        <div className="logo">
                            <button className='hamburger-button'>
                                <img src={Menu} alt="" />
                            </button>
                            <Link to="/">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                        <div className="user-profile">
                            <div className="company">
                                <div className="company-name">
                                    <h2>ООО”СОЙТ”МЧЖ</h2>
                                    <h3>Админ</h3></div>
                            </div>
                            <div className="company-avatar">
                                <img width={32} height={32} src={Avatar} alt="" />
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}
export default Header