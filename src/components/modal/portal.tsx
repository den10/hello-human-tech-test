import React, { FC, ReactNode, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import cx from "classnames";

interface PortalProps {
  children: ReactNode;
  className?: string;
  id: string;
  isPortalOpen: boolean;
}

export const Portal: FC<PortalProps> = ({ children, className, id, isPortalOpen }) => {
  const [portalElement, setPortalElement] = useState<Element | undefined>();

  useLayoutEffect(() => {
    let element = document.getElementById(id);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;

      const root = document.getElementById("root");
      root?.classList.add("relative");
      root?.classList.add("z-0");

      const wrapperElement = document.createElement("div");
      wrapperElement.setAttribute("id", id);
      wrapperElement.setAttribute("class", "z-100 transition duration-75 ease-in-out");
      document.body.appendChild(wrapperElement);
      element = wrapperElement;
    }

    setPortalElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [id]);

  useLayoutEffect(() => {
    const element = document.getElementById(id);

    if (element) {
      if (isPortalOpen) {
        document.body.classList.add("overflow-hidden");

        element.classList.remove("opacity-0");
        element.classList.add("opacity-100");
      } else {
        document.body.classList.remove("overflow-hidden");

        element.classList.add("opacity-0");
        element.classList.remove("opacity-100");
      }
    }
  }, [isPortalOpen]);

  if (!isPortalOpen || !portalElement) {
    return null;
  }

  return createPortal(
    <div
      className={cx(
        "fixed inset-0 z-50 w-screen h-screen backdrop-blur-sm bg-black bg-opacity-10 overflow-hidden",
        className
      )}
    >
      {children}
    </div>,
    portalElement
  );
};
