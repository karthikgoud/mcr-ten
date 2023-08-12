import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

import styles from "./ProductListMain.module.css";
import { useData } from "../../context/DataContext";
import { useState } from "react";

const ProductListMain = () => {
  const { name } = useParams();
  const { data } = useData();

  const [filter, setFilter] = useState({
    dropDown: name ? name : null,
    lowStockCheck: null,
    sortValue: null,
  });

  const sortedProducts = data.toSorted((a, b) =>
    filter.sortValue === "Price"
      ? a.price - b.price
      : filter.sortValue === "Name"
      ? a.name[0].localeCompare(b.name[0])
      : filter.sortValue === "Stock"
      ? a.stock - b.stock
      : data
  );

  const selectedProducts =
    filter.dropDown == "All"
      ? sortedProducts
      : sortedProducts.filter((item) => item.department == filter.dropDown);

  const checkedProducts = filter.lowStockCheck
    ? selectedProducts.filter((item) => item.stock <= 10)
    : selectedProducts;

  return (
    <div className={styles.productMain}>
      <div className={styles.productNav}>
        <h2>Products</h2>
        <div>
          <select
            className={styles.dropDown}
            value={filter.dropDown}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, dropDown: e.target.value }))
            }
          >
            <option value="All">All</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value={filter.lowStockCheck}
              onChange={(e) =>
                setFilter((prev) => ({
                  ...prev,
                  lowStockCheck: e.target.checked,
                }))
              }
            />
            Low Stock Items
          </label>
        </div>
        <div>
          <select
            className={styles.dropDown}
            value={filter.sortValue}
            onChange={(e) =>
              setFilter((prev) => ({
                ...prev,
                sortValue: e.target.value,
              }))
            }
          >
            <option value="Name">Name</option>
            <option value="Price">Price</option>
            <option value="Stock">Stock</option>
          </select>
        </div>
        <div>
          <NavLink className={styles.newProduct} to="/newProduct">
            New
          </NavLink>
        </div>
      </div>
      <div className={styles.productTableCont}>
        {/* table */}
        <table className={styles.table}>
          <tr className={styles.tableHead}>
            <th>Images</th>
            <th>Names</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Suppliers</th>
          </tr>
          {checkedProducts.map((item) => (
            <tr key={item.name}>
              <td>
                <img src={item.imageUrl} alt={item.name} width={100} />
              </td>
              <td>
                <NavLink to={`/product/${item.id}`}>{item.name}</NavLink>
              </td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>{item.stock}</td>
              <td>{item.supplier}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ProductListMain;
