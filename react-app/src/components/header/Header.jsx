import style from './Header.module.css'
import Button from '../button/Button'
import Logo from '../logo/Logo'
import Menu from '../menu/Menu'

const menu = [
            {
                text: 'XU',
                onClick: () => {},
                isActive: true
            },
            {
                text: 'XU',
                onClick: () => {},
                isActive: false
            }
]

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__logo}>
                <Logo/>
            </div>
            <div className={style.header__menu}>
                <Menu data={menu}/>
            </div>
        </header>
    )
}

export default Header