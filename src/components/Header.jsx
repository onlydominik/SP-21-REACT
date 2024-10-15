import { useRef } from "react";
import { useToggleModal } from "../App";
import imageAvatar from "/image-avatar.png";
import logo from "/logo.svg";
import Modal from "./ModalMenu";
import Cart from "./Cart";

export default function Header() {
  const modal = useRef();

  useToggleModal((e) => {
    if (e.target == document.querySelector(".MODAL-MENU")) modal.current.close();
  });

  const navElementStyling = "cursor-pointer w-full hover:text-black py-10 hover:border-solid hover:border-b-[3px] hover:border-primary hover:mb-[-3px]";

  return (
    <header className="font-main mx-auto pb-5 max-md:mt-5 lg:max-w-[70rem] lg:relative">
      <Modal ref={modal} />
      <div className="flex justify-between mx-6 lg:border-solid lg:border-b-[1px] lg:border-gray-light lg:pb-[3px] lg:mb-14">
      <div className="flex items-center gap-8">
        <button aria-label="dropdown menu" className="md:hidden" onClick={() => modal.current.showModal()}>
          <svg className="fill-gray hover:fill-black" width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fillRule="evenodd"/></svg>
        </button>
        <img className="cursor-pointer mb-1" src={logo} alt="logo" />
        <nav className="hidden md:contents lg:grid lg:grid-cols-5 lg:place-items-center lg:text-center w-max text-gray">
          <a className={navElementStyling} href="">Collection</a>
          <a className={navElementStyling} href="">Men</a>
          <a className={navElementStyling} href="">Women</a>
          <a className={navElementStyling} href="">About</a>
          <a className={navElementStyling} href="">Contact</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Cart />
        <img className="cursor-pointer rounded-full w-7 lg:w-12 lg:ml-6 hover:outline hover:outline-primary hover:outline-[2px]" src={imageAvatar} alt="account profile picture" />
      </div>
      </div>
    </header>
  );
}
