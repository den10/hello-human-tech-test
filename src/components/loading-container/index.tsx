import React, { FC } from "react";
import { ColorRing } from "react-loader-spinner";

interface LoadingContainerProps {
  message?: string;
}

export const LoadingContainer: FC<LoadingContainerProps> = ({ message }) => (
  <div className="absolute inset-0 z-100 flex flex-1 justify-center items-center w-full bg-slate-900 bg-opacity-80">
    <div className="flex flex-1 flex-col items-center justify-center w-full h-full space-y-5">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#14b8a6", "#0d9488", "##10b981", "##065f46", "#1e3a8a"]}
      />
      <h3 className="font-semibold text-white">{message ?? "Loading..."}.</h3>
    </div>
  </div>
);
