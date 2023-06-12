import React, { FC } from "react";
import { Movie } from "../../typed";
import { getImageUrl } from "../../utils";
import { NoSymbolIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon, StarIcon } from "@heroicons/react/24/solid";
import { round } from "lodash";
import { format } from "date-fns";

export interface SearchResultItemProps
  extends Pick<
    Movie,
    "id" | "release_date" | "poster_path" | "original_title" | "vote_average"
  > {
  onSelect: (id: string) => void;
}

export const SearchResultItem: FC<SearchResultItemProps> = ({
  id,
  original_title,
  poster_path,
  vote_average,
  release_date,
  onSelect,
}) => (
  <li
    key={id}
    tabIndex={Number(id)}
    className="flex justify-between items-center appearance-none outline-none text-white bg-slate-700 rounded-xl hover:bg-slate-600 focus:bg-slate-600 bg-opacity-30 cursor-pointer pr-3"
    onClick={() => onSelect(id)}
  >
    <div className="flex flex-row items-center space-x-5">
      {poster_path ? (
        <img
          src={getImageUrl(poster_path)}
          className="w-16 h-full rounded-l-xl"
          alt={original_title ?? "Movie poster"}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "http://via.placeholder.com/500x500?text=No+Image";
          }}
        />
      ) : (
        <div className="flex flex-1 items-center justify-center flex-col h-full">
          <p className="text-slate-600">No image available</p>
          <NoSymbolIcon className="w-12 h-12 text-slate-600" />
        </div>
      )}
      <div className="border-slate-600">
        <h3 className="text-slate-50 text-base font-medium">{original_title}</h3>

        <div className="flex flex-row items-center">
          <StarIcon className="text-amber-400 w-5 h-5" />
          <span className="pl-1 text-slate-100">{round(Number(vote_average), 1)}</span>
        </div>

        <span className="text-sm text-slate-50">
          {release_date ? format(new Date(release_date), "yyyy") : "Unknown"}
        </span>
      </div>
    </div>
    <div>
      <ChevronRightIcon className="w-4 h-4 text-slate-500" />
    </div>
  </li>
);
