import React, { FC } from "react";
import { Link } from "wouter";
import { useAtom } from "jotai";
import { isSearchModalOpenAtom } from "../../atoms";
import { AppRoute } from "../../configs/routes";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { SearchModal } from "../search-modal";

export const TopNav: FC = () => {
  const [isSearchModalOpen, setSearchModalOpen] = useAtom(isSearchModalOpenAtom);
  const handleModal = () => setSearchModalOpen(!isSearchModalOpen);

  return (
    <div className="fixed top-0 right-0 left-0 w-full z-50 bg-slate-900">
      <div className="grid grid-cols-3 py-3 px-5 border-b border-slate-800 bg-ebony">
        <div className="flex items-center space-x-2 lg:space-x-0 lg:-ml-2">
          <Link href={AppRoute.Home}>MovieMania</Link>
        </div>

        <div className="justify-center flex-grow hidden lg:flex px-2">
          <div
            className="flex relative items-center justify-center w-full max-w-3xl cursor-pointer"
            onClick={handleModal}
          >
            <MagnifyingGlassIcon className="absolute w-5 h-5 left-2 text-slate-400" />
            <input
              className="w-full outline-none cursor-pointer sm:flex items-center pl-10 text-sm leading-6 text-slate-400 rounded-lg ring-1 ring-slate-900/10 py-1.5 bg-slate-800 hover:ring-1 hover:ring-blue-900 transition-hover"
              placeholder="Search movies..."
              readOnly
            />
          </div>
        </div>

        <div className="flex justify-end items-center space-x-2 sm:space-x-3 col-span-2 lg:col-span-1">
          <div
            className="block py-2 rounded-lg lg:hidden cursor-pointer"
            onClick={handleModal}
          >
            <MagnifyingGlassIcon className="w-6 h-6 text-slate-400 hover:emerlad-400" />
          </div>
        </div>

        <SearchModal
          isModalOpen={isSearchModalOpen}
          onModalClose={() => setSearchModalOpen(false)}
        />
      </div>
    </div>
  );
};
