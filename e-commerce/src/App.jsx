import { DataContextProvider } from "./context/context";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import { Footer } from "./layout/Footer";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./layout/ShopPage";

function App() {
  return (
    <DataContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </DataContextProvider>
  );
}

export default App;
