import style from "./MenuBar.module.css";

const MenuBar = () => {
  return (
    <div className={style.menuBar}>
      <div className={style.menuBar__main}>
        <div className={style.menuBar__item}></div>
        <hr />
        <div className={style.menuBar__item}></div>
      </div>
    </div>
  );
};

export default MenuBar;
