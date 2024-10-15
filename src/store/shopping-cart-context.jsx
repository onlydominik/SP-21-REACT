import { createContext, useState } from "react";
import { PRODUCTS } from "../assets/products";
export const CartContext = createContext({
  items: [
    {
      id: null,
      quantity: null,
    },
  ],
  isHidden: "hidden",
  addProduct: () => {},
  removeProduct: () => {},
  changeCartVisible: () => {},
});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState({
    items: [],
  });

  const [isHidden, setIsHidden] = useState("invisible");
  function changeCartVisible(force = false) {
    if (force === "forceTrue") {
      setIsHidden(null);
      return;
    } else if (force === "forceFalse") {
      setIsHidden("invisible");
      return;
    }
    setIsHidden((prev) => (prev === "invisible" ? null : "invisible"));
  }

  function addProduct(id, quantity) {
    changeCartVisible("forceTrue");
    const product = PRODUCTS[id];
    if (cart.items.findIndex((ele) => ele.id == id) === 0) {
      setCart((prev) => {
        const currentQuantity =
          prev.items[id].quantity + quantity > 10
            ? 10
            : prev.items[id].quantity + quantity;
        const updateditem = {
          id: id,
          quantity: currentQuantity,
          summary: currentQuantity * +product.currentPrice,
        };

        let previous = { items: [...prev.items] };
        previous.items[id] = updateditem;

        return previous;
      });
      return;
    }

    setCart((prev) => {
      const updatedCart = {
        items: [
          ...prev.items,
          {
            id: id,
            quantity: quantity,
            summary: quantity * +product.currentPrice,
          },
        ],
      };
      return updatedCart;
    });
  }

  function removeProduct(id) {
    setCart((prev) => {
      const updatedCart = { items: prev.items.splice(id, 1) };
      return updatedCart;
    });
  }

  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        isHidden: isHidden,
        addProduct: addProduct,
        removeProduct: removeProduct,
        changeCartVisible: changeCartVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
