import DeptCard from "../../components/DeptCard/DeptCard";
import { useData } from "../../context/DataContext";
import styles from "./DeptMain.module.css";

const DeptMain = () => {
  const { data } = useData();

  const result = data.reduce(
    (unique, item) =>
      unique.includes(item.department) ? unique : [...unique, item.department],
    []
  );

  return (
    <div className={styles.dashMainCont}>
      {result.map((item) => (
        <DeptCard item={item} />
      ))}
    </div>
  );
};

export default DeptMain;
