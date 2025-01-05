import style from "./MenuBar.module.css";
import ButtonIcon from "../../components/buttonIcon/ButtonIcon";
import dataMenu from "../../data/dataMenu";

const MenuBar = () => {
  return (
    <div className={style.menuBar}>
      <div className={style.menuBar__main}>
        {dataMenu.map((item, index) => {
          return (
            <ButtonIcon
              key={index}
              icon={item.icon}
              isBig={item.isBig}
              onClick={item.onClick}
              hr={item.hr}
            >
              {item.title}
            </ButtonIcon>
          );
        })}
      </div>
    </div>
  );
};

export default MenuBar;

// book-open
// fa-solid fa-code
