import { useEffect } from "react";
import CartContextProvider from "./store/shopping-cart-context";
import Header from "./components/Header";
import ProductDisplay from "./components/ProductDisplay";

export const useToggleModal = (handlerFunction) => {
  if (handlerFunction) {
    useEffect(() => {
      let handler = handlerFunction;

      document.addEventListener("mousedown", handler);
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    });
  }
};

function App() {
  return (
    <CartContextProvider>
      <Header />
      <ProductDisplay />
    </CartContextProvider>
  );
}

export default App;
