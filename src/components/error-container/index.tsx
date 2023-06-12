import React, { FC } from "react";

export type ErrorContainerProps = {
  message?: string;
};

export const ErrorContainer: FC<ErrorContainerProps> = ({ message }) => (
  <div className="flex flex-col flex-1 w-full mx-auto space-x-3">
    <div className="flex flex-col items-center justify-center flex-1 w-full min-h-full space-y-5">
      <h2 className="text-xl lg:text-2xl">Oops...something went wrong</h2>
      <h3 className="text-cabaret">{message ?? ""}</h3>
      <p className="mt-10">Try reloading the page</p>
    </div>
  </div>
);
