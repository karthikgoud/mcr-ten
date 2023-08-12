import { NavLink } from "react-router-dom";
import styles from "./SideNav.module.css";

const SideNav = () => {
  return (
    <div className={styles.navCont}>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/department">Departments</NavLink>
      <NavLink to="/department/Clothing">Products</NavLink>
    </div>
  );
};

export default SideNav;
