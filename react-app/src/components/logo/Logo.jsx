import style from './Logo.module.css'

const logo = [
    {
        src: '/logo/logo_1.png',
        alt: '1'
    },
    {
        src: '/logo/logo_2.png',
        alt: '2222'
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