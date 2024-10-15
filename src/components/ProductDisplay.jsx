import ProductCarousel from "./ProductCarousel";
import ProductPanel from "./ProductPanel";
import { PRODUCTS } from "../assets/products";
export default function ProductDisplay() {
  return (
    <main className="lg:flex lg:gap-14 lg:items-center lg:mx-auto lg:max-w-[60rem] lg:justify-between">
      <ProductCarousel productData={PRODUCTS[0]}/>
      <ProductPanel {...PRODUCTS[0]}/>
    </main>
  );
}
