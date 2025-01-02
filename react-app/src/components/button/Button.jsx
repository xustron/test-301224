import style from './Button.module.css'

const Button = ({children, isActive, ...props}) => {

    let classes = isActive ? `${style.button} ${style.active}` : style.button
            

    if (props.className) {
        classes += ' ' + props.className
    }

    return (
        <button {...props} className={classes}>
            {children}
        </button>
    )
}

export default Button