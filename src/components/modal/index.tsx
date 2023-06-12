import React, { FC, ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import cx from "classnames";
import { Portal } from "./portal";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  id: string;
  containerClassName?: string;
  modalClassName?: string;
  innerModalClassName?: string;
  hideCloseBtn?: boolean;
  isModalOpen: boolean;
  handleModalClose?: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({
  id,
  children,
  containerClassName,
  innerModalClassName,
  modalClassName,
  handleModalClose,
  hideCloseBtn,
  isModalOpen,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideModal = (event: MouseEvent | TouchEvent) => {
      const node = modalRef.current;

      if (!node || node.contains(event.target as Node)) {
        return;
      }

      handleModalClose?.();
    };

    document.addEventListener("mousedown", handleOutsideModal);
    document.addEventListener("touchstart", handleOutsideModal);

    return () => {
      document.removeEventListener("mousedown", handleOutsideModal);
      document.removeEventListener("touchstart", handleOutsideModal);
    };
  }, [modalRef, handleModalClose]);

  useLayoutEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleModalClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown, false);

    return () => {
      window.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleModalClose]);

  return (
    <Portal id={id} className={containerClassName} isPortalOpen={isModalOpen}>
      <div ref={modalRef} className={cx(modalClassName, "relative")}>
        {!hideCloseBtn && (
          <div
            className="absolute top-2.5 right-2 text-xl text-slate-400 hover:text-slate-50 cursor-pointer transition-hover"
            onClick={handleModalClose}
          >
            <XMarkIcon className="w-6 h-6" />
          </div>
        )}
        <div className={innerModalClassName}>{children}</div>
      </div>
    </Portal>
  );
};
