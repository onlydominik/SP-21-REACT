import ModalLightbox from "./ModalLightbox";
import { useToggleModal } from "../App";
import { useState, useRef } from "react";
export default function ProductCarousel({ productData }) {
  const IMAGES = [...productData.images];
  const [indexZdj, setIndexXdj] = useState(0);

  const modalLightbox = useRef();
  useToggleModal((e) => {
    if (e.target == document.querySelector(".MODAL-LIGHTBOX"))
      modalLightbox.current.close();
  });
  window.addEventListener("resize", () => {
    if (modalLightbox.current) {
      window.screen.width <= 1025 ? modalLightbox.current.close() : "";
    }
  });

  function handleSwitchImage(change) {
    if (change === "prev")
      indexZdj == 0
        ? setIndexXdj(IMAGES.length - 1)
        : setIndexXdj((prevIndex) => --prevIndex);
    if (change === "next")
      indexZdj == IMAGES.length - 1
        ? setIndexXdj(0)
        : setIndexXdj((prevIndex) => ++prevIndex);
  }

  return (
    <div className="relative lg:w-[45%] max-w-full">
      <ModalLightbox
        ref={modalLightbox}
        selectedImage={indexZdj}
        images={productData.images}
        handleSwitchImage={handleSwitchImage}
        setIndexXdj={setIndexXdj}
      />
      <div
        onClick={() => modalLightbox.current.showModal()}
        className="cursor-pointer flex overflow-hidden hidden lg:block lg:rounded-xl">
        <img
          className=""
          key={indexZdj}
          src={IMAGES[indexZdj].path}
          alt="shoes image"
        />
      </div>
      <div className="flex overflow-hidden max-h-72 lg:hidden sm:max-w-full">
        {IMAGES.map((image) => {
          return (
            <img
              className="transition-[translate] duration-300 ease-in object-cover object-center md:object-top max-w-full"
              style={{ translate: `${-100 * indexZdj}%` }}
              key={image.id}
              src={image.path}
              alt="shoes image"
            />
          );
        })}
      </div>
      <div className="flex justify-between absolute top-[40%] w-full p-4 lg:hidden">
        <button
          aria-label="switch to previous"
          className="bg-white p-3 flex items-center justify-center rounded-full stroke-black hover:stroke-primary"
          onClick={() => handleSwitchImage("prev")}>
          <span className="flex items-center justify-center w-4 h-4">
            <svg
              viewBox="-3 0 22 16"
              width="16"
              height="18"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                strokeWidth="5"
                fill="white"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <button
          aria-label="switch to previous"
          className="bg-white p-3 flex items-center justify-center rounded-full stroke-black hover:stroke-primary"
          onClick={() => handleSwitchImage("next")}>
          <span className="flex items-center justify-center w-4 h-4">
            <svg
              viewBox="-5 0 22 16"
              width="16"
              height="18"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                strokeWidth="5"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="hidden lg:flex justify-between mt-8">
        {IMAGES.map((image) => {
          return (
            <div
              key={image.id}
              onClick={() => setIndexXdj(image.id)}
              className={`cursor-pointer w-20 rounded-lg overflow-hidden ${
                indexZdj == image.id
                  ? "outline outline-primary outline-[3px] hover:opacity-100"
                  : "hover:opacity-50"
              }`}>
              <img
                className={`${indexZdj == image.id ? "opacity-30" : null}`}
                src={image.path}
                alt="shoes image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
