import styles from "./DashboardCard.module.css";

const DashboardCard = ({ count, type, color }) => {
  return (
    <div className={styles.dashCardCont}>
      <div className={styles.count} style={{ color }}>
        {count}
      </div>
      <div className={styles.type}>{type}</div>
    </div>
  );
};

export default DashboardCard;
