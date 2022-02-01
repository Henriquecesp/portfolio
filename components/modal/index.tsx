import { Typography } from "@components/typography";
import React, { useEffect, useRef } from "react";
import ClientOnlyPortal from "./clientOnlyPortal";

interface Props {
  body: JSX.Element;
  actions?: JSX.Element;
  title?: JSX.Element;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Modal({ body, actions, title, isOpen, onClose }: Props): JSX.Element {
  const modal = useRef(null)

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose?.();
      }
    };
    function handleClick(event) {
      if (!modal?.current?.contains(event.target)) {
        onClose?.();
      }
    }
    window.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose, isOpen]);

  if (!isOpen) {
    return <></>
  }


  return (
    <ClientOnlyPortal selector="#modal">
      <div
        className="fixed inset-0 bg-darkGray-500 bg-opacity-50 overflow-y-auto h-full w-full z-40"
        onClick={onClose}
      ></div>
      <div className="fixed z-50 left-0 top-0 w-full h-full">
        <div
          className="relative top-1/2 -translate-y-1/2 mx-auto p-5 w-1/2 h-96 shadow-lg rounded-md bg-purple-500" ref={modal}
        >
          <div className="mt-3 text-center text-white">
            <div
              className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
            >
            </div>
            {title}
            <div className="mt-2 px-7 py-3 text-white">
              {body}
            </div>
            <div className="items-center px-4 py-3 text-white">
              {actions}
            </div>
          </div>
        </div>
      </div>
    </ClientOnlyPortal>
  );
}