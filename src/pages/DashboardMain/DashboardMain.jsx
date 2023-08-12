import { useData } from "../../context/DataContext";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import styles from "./DashboardMain.module.css";

const DashboardMain = () => {
  const { data } = useData();

  const totalStock = data.reduce((total, current) => total + current.stock, 0);
  const totalDelivered = data.reduce(
    (total, current) => total + current.delivered,
    0
  );
  const lowQuatityStocks = data.filter((prod) => prod.stock <= 10);

  return (
    <div className={styles.dashMainCont}>
      <DashboardCard count={totalStock} type={"Total Stock"} color="green" />
      <DashboardCard
        count={totalDelivered}
        type={"Total Delivered"}
        color="orange"
      />
      <DashboardCard
        count={lowQuatityStocks.length}
        type={"Low Stock Items"}
        color="red"
      />
    </div>
  );
};

export default DashboardMain;
