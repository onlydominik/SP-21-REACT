import QuantitySelector from "./QuantitySelector";
import ButtonAddToCart from "./ButtonAddToCart";
import { useState, useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
export default function ProductPanel({
  id,
  name,
  theme,
  description,
  currentPrice,
  previousPrice,
  discount,
}) {
  const { addProduct } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  function quantityChange(option) {
    option === "increment"
      ? setQuantity((prev) => {
          if (prev == 10) return 10;
          return ++prev;
        })
      : setQuantity((prev) => {
          if (prev == 1 || prev == "") return 1;
          return --prev;
        });
  }

  function inputChange(event) {
    let value = event.target.value;
    isNaN(value) || value > 10 ? event.preventDefault() : setQuantity(value);
  }
  return (
    <section className="font-main flex flex-col gap-4 p-4 lg:w-[45%] lg:p-0 ">
      <p className="font-bold text-gray text-sm tracking-widest mb-[-0.5rem] lg:tracking-wide">
        {name}
      </p>
      <h1 className="font-bold text-black text-3xl lg:text-5xl lg:pb-4">{theme}</h1>
      <p className="text-gray lg:text-md">{description}</p>
      <div className="flex items-center justify-between my-3 lg:flex-wrap">
        <p className="flex items-center gap-3.5 font-bold text-3xl lg:w-full ">
          &#36;{currentPrice.toFixed(2)}{" "}
          <span className="text-sm text-white bg-black py-1 px-1.5 rounded-md">
            {discount}%
          </span>
        </p>

        <s className="text-gray font-bold lg:mt-3">&#36;{previousPrice}</s>
      </div>
      <div className="lg:flex lg:gap-4">
        <QuantitySelector
          handleQuantityChange={quantityChange}
          handleInputChange={inputChange}
          quantity={quantity}
        />
        <ButtonAddToCart handleAddProduct={() => addProduct(id, quantity)} />
      </div>
    </section>
  );
}
