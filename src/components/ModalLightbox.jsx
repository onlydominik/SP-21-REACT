import { forwardRef } from "react";
import { createPortal } from "react-dom";

const ModalLightbox = forwardRef(function ModalLightbox(
  { selectedImage, images, handleSwitchImage, setIndexXdj },
  ref
) {
  const IMAGES = [...images];
  return createPortal(
    <dialog
      className="MODAL-LIGHTBOX backdrop:bg-cos bg-transparent w-[35rem]"
      ref={ref}>
      <div className="flex flex-col place-items-center ">
        <form method="dialog" className="self-end mr-10 mb-2">
          <button aria-label="close">
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="white"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </form>
        <div className="flex overflow-hidden w-[30rem] rounded-lg">
          {IMAGES.map((image) => {
            return (
              <img
                key={image.id}
                className="transition-[translate] duration-300 ease-in object-cover object-center max-w-full"
                style={{ translate: `${-100 * selectedImage}%` }}
                src={image.path}
                alt="shoes"
              />
            );
          })}
        </div>

        <div className="flex justify-between absolute top-[40%] w-full">
          <button aria-label="next image"
            className="bg-white p-5 flex items-center justify-center rounded-full ml-2 stroke-black hover:stroke-primary"
            onClick={() => handleSwitchImage("prev")}>
            <span className="flex items-center justify-center w-4 h-4">
              <svg width="16" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1 3 9l8 8"
                  strokeWidth="4"
                  fill="white"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <button aria-label="previous image"
            className="bg-white p-5 flex items-center justify-start rounded-full mr-2 stroke-black hover:stroke-primary"
            onClick={() => handleSwitchImage("next")}>
            <span className="flex items-center justify-end w-4 h-4">
              <svg
                className=""
                width="16"
                height="18"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  transform="translate(2, 0)"
                  d="m2 1 8 8-8 8"
                  strokeWidth="4"
                  fill="white"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="flex gap-7 justify-between my-4">
          {IMAGES.map((image) => {
            return (
              <div
                key={image.id}
                onClick={() => setIndexXdj(image.id)}
                className={`cursor-pointer  w-20 rounded-lg overflow-hidden ${
                  selectedImage == image.id
                    ? "outline outline-primary outline-[3px]"
                    : "hover:opacity-80"
                }`}>
                <img
                  className={`${selectedImage == image.id ? "opacity-50" : null}`}
                  src={image.path}
                />
              </div>
            );
          })}
        </div>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default ModalLightbox;
