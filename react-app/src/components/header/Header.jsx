import style from "./Header.module.css";
import Button from "../button/Button";
import Menu from "../menu/Menu";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__logo}>
        <img
          src="/img/logo/logo_reu_w.svg"
          alt="Российский экономический университет имени Г. В. Плеханова"
        />
      </div>
      <div className={style.header__menu}>{/* <Menu data={dataMenu} /> */}</div>
    </header>
  );
};

export default Header;
