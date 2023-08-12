import { NavLink } from "react-router-dom";
import styles from "./DeptCard.module.css";

const DeptCard = ({ item }) => {
  return (
    <NavLink to={`/department/${item}`} className={styles.dashCardCont}>
      {item}
    </NavLink>
  );
};

export default DeptCard;
