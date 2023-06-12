import React, { FC } from "react";
import { Movie } from "../../typed";
import { getImageUrl } from "../../utils";
import { NoSymbolIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { round } from "lodash";
import { format } from "date-fns";
import { Link } from "wouter";

export interface MovieTileProps
  extends Pick<
    Movie,
    "id" | "release_date" | "poster_path" | "original_title" | "vote_average"
  > {}

export const MovieTile: FC<MovieTileProps> = ({
  id,
  original_title,
  poster_path,
  vote_average,
  release_date,
}) => (
  <div className="relative w-full overflow-hidden transition duration-200 ease-in-out group border-2 border-slate-700 hover:border-blue-900 cursor-pointer rounded-xl hover:shadow-xl group hover:scale-105">
    <Link to={`/movie/${id}`}>
      <div className="relative w-full h-64 rounded-t-xl">
        {poster_path ? (
          <img
            src={getImageUrl(poster_path)}
            className="object-cover w-full h-full"
            alt={original_title ?? "Movie poster"}
          />
        ) : (
          <div className="flex flex-1 items-center justify-center flex-col h-full">
            <p className="text-slate-600">No image available</p>
            <NoSymbolIcon className="w-24 h-24 text-slate-600" />
          </div>
        )}
      </div>
      <div className="p-3 border-t border-slate-600">
        <h3 className="text-slate-50 text-base font-medium">{original_title}</h3>

        <div className="flex flex-row items-center">
          <StarIcon className="text-amber-400 w-5 h-5" />
          <span className="pl-1 text-slate-100">{round(Number(vote_average), 1)}</span>
        </div>

        <span className="text-sm text-slate-50">
          {release_date ? format(new Date(release_date), "yyyy") : "Unknown"}
        </span>
      </div>
    </Link>
  </div>
);
