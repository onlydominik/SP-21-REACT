export default function QuantitySelector({handleQuantityChange, handleInputChange, quantity}) {
    
  return (
    <div className="flex bg-gray-light p-[1.2rem] px-6 rounded-lg lg:max-w-[35%]">
      <button aria-label="decrease quantity" className="fill-primary hover:fill-primary-light" onClick={() => handleQuantityChange("decrement")}><svg  width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" fillRule="nonzero"/></svg></button>
      <input aria-label="quantity" name="quantityInput" onChange={(e) => handleInputChange(e)} className="text-center w-full font-bold bg-gray-light lg:text-lg" type="text" value={quantity}/>
      <button aria-label="increase quantity" className="fill-primary hover:fill-primary-light" onClick={() => handleQuantityChange("increment")}><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" fillRule="nonzero"/></svg></button>
    </div>
  );
};
