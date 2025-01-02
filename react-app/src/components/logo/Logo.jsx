import style from './Logo.module.css'

const logo = [
    {
        src: '/logo/logo.png',
        alt: '1'
    },
    {
        src: '/logo/logo.png',
        alt: '1'
    },
    {
        src: '/logo/logo.png',
        alt: '1'
    },
];

const Logo = () => {

    return (
        <div className={style.logo}>
            {logo.map((item, index) => {
                return (
                    <img key={index} className={style.logo} src={item.src} alt={item.alt}/>
                )
            })}
        </div>
    )
}

export default Logo