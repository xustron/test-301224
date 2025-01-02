import style from './Menu.module.css'
import Button from '../button/Button'

const Menu = (props) => {

    return (
        <div className={style.menu}>
            {props.data.map((item, index) => {
                return (
                    <Button key={index} isActive={item.isActive} onClick={item.onClick} >{item.text}</Button>
                )
            })}
        </div>
    )
}

export default Menu