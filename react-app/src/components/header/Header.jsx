import style from "./Header.module.css";
import Button from "../button/Button";
import Menu from "../menu/Menu";
import { menu as dataMenu } from "../../data";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__logo}>{/* <Logo/> */}</div>
      <div className={style.header__menu}>{/* <Menu data={dataMenu} /> */}</div>
    </header>
  );
};

export default Header;
