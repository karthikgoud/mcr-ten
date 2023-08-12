import { useState } from "react";
import styles from "./NewProductPage.module.css";
import { useData } from "../../context/DataContext";

const NewProductPage = () => {
  const { dispatch } = useData();
  const [newProduct, setNewProduct] = useState({
    department: "",
    name: "",
    description: "",
    price: null,
    stock: null,
    sku: "",
    supplier: "",
    delivered: null,
    imageUrl: "",
  });

  function handleSubmit(e, newProduct) {
    e.preventDefault();
    dispatch({ type: "ADD_NEW", payload: newProduct });
    setNewProduct({
      department: "",
      name: "",
      description: "",
      price: null,
      stock: null,
      sku: "",
      supplier: "",
      delivered: null,
      imageUrl: "",
    });
  }

  return (
    <div className={styles.newCont}>
      <h1>Add New Product</h1>
      <form method="submit" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Department:</label>
          <select
            name=""
            id=""
            value={newProduct?.department}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, department: e.target.value }))
            }
          >
            <option value="">Select Dept</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            value={newProduct?.name}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="">Description:</label>
          <textarea
            name=""
            id=""
            cols="20"
            rows="5"
            value={newProduct?.description}
            onChange={(e) =>
              setNewProduct((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
          ></textarea>
        </div>
        <div>
          <label htmlFor="">Price:</label>
          <input
            type="number"
            value={newProduct?.price}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, price: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="">Stock:</label>
          <input
            type="number"
            value={newProduct?.stock}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, stock: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="">SKU:</label>
          <input
            type="text"
            value={newProduct?.sku}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, sku: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="">Supplier:</label>
          <input
            type="text"
            value={newProduct?.supplier}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, supplier: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="">Delivered:</label>
          <input
            type="text"
            value={newProduct?.delivered}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, delivered: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="">ImageURL:</label>
          <input
            type="text"
            value={newProduct?.imageUrl}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, imageUrl: e.target.value }))
            }
          />
        </div>
        <button type="submit" onClick={(e) => handleSubmit(e, newProduct)}>
          Add New Product
        </button>
      </form>
    </div>
  );
};

export default NewProductPage;
