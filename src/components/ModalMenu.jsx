import { forwardRef } from "react";
import { createPortal } from "react-dom";

const ModalMenu = forwardRef(function ModalMenu({}, ref) {

  const menuElementStyling = "cursor-pointer text-black hover:text-primary";

  return createPortal(
    <dialog className="MODAL-MENU font-main font-bold text-color-black text-lg m-0 w-8/12 min-h-dvh"  ref={ref} >
      <div className="px-6 py-5 h-dvh">
        <form method="dialog" className="mb-6">
          <button aria-label="close" className="fill-gray hover:fill-black">
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd"/></svg>
          </button>
        </form>
        <ul className="flex flex-col gap-4">
          <li className={menuElementStyling}>Collections</li>
          <li className={menuElementStyling}>Men</li>
          <li className={menuElementStyling}>Women</li>
          <li className={menuElementStyling}>About</li>
          <li className={menuElementStyling}>Contact</li>
        </ul>
        </div>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default ModalMenu;
