import style from "./ButtonIcon.module.css";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuButtonIcon = ({ children, icon, isBig = false, ...props }) => {
  return (
    <>
      {props.hr && <hr />}
      {!props.hr && (
        <Button
          {...props}
          className={`${style.buttonIcon} ${props.className} ${
            isBig ? style.buttonIcon__big : ""
          }`}
        >
          <FontAwesomeIcon icon={icon} />
          {children ? (
            <div className={style.buttonIcon__title}>{children}</div>
          ) : null}
        </Button>
      )}
    </>
  );
};

export default MenuButtonIcon;
