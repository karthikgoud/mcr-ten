import { Route, Routes } from "react-router-dom";
import "./App.css";
import WrapperMain from "./components/WrapperMain/WrapperMain";
import DashboardMain from "./pages/DashboardMain/DashboardMain";
import DeptMain from "./pages/DeptMain/DeptMain";
import ProductListMain from "./pages/ProductListMain/ProductListMain";
import NewProductPage from "./pages/NewProductPage/NewProductPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <WrapperMain>
            <DashboardMain />
          </WrapperMain>
        }
      />
      <Route
        path="/department"
        element={
          <WrapperMain>
            <DeptMain />
          </WrapperMain>
        }
      />
      <Route
        path="/department/:name"
        element={
          <WrapperMain>
            <ProductListMain />
          </WrapperMain>
        }
      />

      <Route
        path="/newProduct"
        element={
          <WrapperMain>
            <NewProductPage />
          </WrapperMain>
        }
      />

      <Route
        path="/product/:Id"
        element={
          <WrapperMain>
            <ProductDetail />
          </WrapperMain>
        }
      />
    </Routes>
  );
}

export default App;
