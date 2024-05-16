import { DataContextProvider } from "./context/context";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import { Footer } from "./layout/Footer";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./layout/ShopPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { autoLogin } from "./store/actions/UserActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLogin()); // autoLogin fonksiyonunu çağırıyoruz
  }, []);
  return (
    <DataContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/detail" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </DataContextProvider>
  );
}

export default App;
