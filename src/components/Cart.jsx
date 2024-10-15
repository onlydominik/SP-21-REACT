import { useContext, useRef } from "react";
import { useToggleModal } from "../App";
import { CartContext } from "../store/shopping-cart-context";
import { PRODUCTS } from "../assets/products";

export default function Cart() {
  const { items, isHidden, removeProduct, changeCartVisible } =
    useContext(CartContext);

  const dialog = useRef();

  useToggleModal((e) => {
    if (e.target.classList == "CART-BUTTON") return;
    if (!dialog.current.contains(e.target)) changeCartVisible("forceFalse");
  });

  return (
  
      <div>
        <button aria-label="toggle cart"
          onClick={changeCartVisible}
          className={`CART-BUTTON flex place-items-center relative hover:fill-black ${isHidden == "invisible" ? "fill-gray" : "fill-black"}`}>
          <div className="text-[0.5rem] lg:text-[0.6rem] absolute text-white mt-[-0.3rem] mr-[-0.3rem] lg:mt-[-0.4rem] lg:mr-[-0.4rem] top-0 right-0 bg-primary px-1.5 rounded-md">
            {items.length != 0 ? items[0].quantity : null}
          </div>
          <svg
            className="CART-BUTTON"
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              className="CART-BUTTON "
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fillRule="nonzero"
            />
          </svg>
        </button>
        <div
        ref={dialog}
        className={`flex flex-col gap-6 bg-white z-10 mt-8 absolute max-sm:inset-x-2 pt-4 pb-7 rounded-lg sm:mt-8 sm:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] sm:right-4 lg:min-w-96 ${isHidden}`}>
        <p className="font-bold px-5 ">Cart</p>
        <hr className="text-gray-light"></hr>
        {items.length != 0 ? (
          items.map((item) => {
            let MODEL = PRODUCTS[item.id];
            return (
              <div
                key={MODEL.id}
                className="text-gray flex items-center  gap-3 z-15 px-5">
                <img
                  className="cursor-pointer w-12 h-12 rounded-md"
                  src={MODEL.images[0].path}
                  alt=""
                />
                <div className="flex flex-col">
                  <p>{MODEL.theme}</p>
                  <p>
                    &#36;{MODEL.currentPrice.toFixed(2)} x {item.quantity}{" "}
                    <span className="font-bold text-black ml-1">
                      &#36;{item.summary.toFixed(2)}
                      {item.quantity == 10 ? (
                        <span className="absolute text-[0.4rem] bg-red text-white p-1 rounded-md ml-2">
                          MAX
                        </span>
                      ) : null}
                    </span>
                  </p>
                </div>
                <button aria-label="remove product"
                  onClick={() => removeProduct(item.id)}
                  className="ml-auto fill-gray-icon hover:fill-gray">
                  <svg width="14" height="16">
                    <path
                      d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                              fillRule="nonzero"
                    />
                  </svg>
                </button>
              </div>
            );
          })
        ) : (
          <p className="p-8 text-center font-bold text-gray">
            Your cart is empty.
          </p>
        )}
        {items.length != 0 ? (
          <div className="px-5">
            <button aria-label="checkout" className="w-full bg-primary font-bold p-3 rounded-lg hover:bg-primary-light">
              Checkout
            </button>
          </div>
        ) : null}
      </div>
      </div>
     
   
  );
}
