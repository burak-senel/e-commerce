import { DataContextProvider } from "./context/context";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <DataContextProvider>
      <Header />
      <HomePage />
      <Footer />
    </DataContextProvider>
  );
}

export default App;
