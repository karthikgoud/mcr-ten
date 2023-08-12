import { useParams } from "react-router";
import styles from "./ProductDetail.module.css";
import { useData } from "../../context/DataContext";

const ProductDetail = () => {
  const { Id } = useParams();
  const { data } = useData();

  const singleProduct = data.find((item) => item.id == Id);

  const {
    id,
    department,
    name,
    description,
    price,
    stock,
    sku,
    supplier,
    delivered,
    imageUrl,
  } = singleProduct;

  return (
    <div className={styles.cont}>
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} width={200} />
      <div>price:{price}</div>
      <div>Stock:{stock}</div>
      <div>SKU:{sku}</div>
      <div>DElivered:{delivered}</div>
      <div>Description:{description}</div>
    </div>
  );
};

export default ProductDetail;
