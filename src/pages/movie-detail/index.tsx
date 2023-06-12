import React, { FC } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { Breadcrumb, BreadcrumbLink } from "../../components/breadcrumb";
import { round } from "lodash";
import { ErrorContainer } from "../../components/error-container";
import { NoSymbolIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useGetMovieQuery } from "../../typed";
import { LoadingContainer } from "../../components/loading-container";
import { getImageUrl } from "../../utils";
import { PersonThumbnail } from "../../components/person-thumbnail";

export type MovieDetailProps = {
  movieId: string;
};

const DirectorRole = "Director";

export const MovieDetail: FC<MovieDetailProps> = ({ movieId }) => {
  const { data, error, loading } = useGetMovieQuery({
    variables: {
      id: movieId,
    },
  });

  if (loading) {
    return <LoadingContainer />;
  }

  if (error) {
    return <ErrorContainer message="Failed to load movie details" />;
  }

  if (!data?.movie) {
    return <ErrorContainer message="Failed to load movie details" />;
  }

  const breadcrumbLinks: BreadcrumbLink[] = [
    {
      name: data.movie.original_title || "Unknown",
      href: `/movie/${movieId}`,
      current: true,
    },
  ];

  const director = data.movie.credits?.crew.find((member) => member.job === DirectorRole);

  return (
    <div className="w-full max-w-screen-xl h-full sm:mt-5 space-y-10 mx-auto px-5">
      <Breadcrumb links={breadcrumbLinks} />
      <div className="flex flex-row items-center">
        <div className="flex flex-1 flex-col">
          <h1 className="text-4xl">{data.movie.original_title}</h1>
          <h3 className="text-slate-50 text-lg font-medium">
            {data.movie.release_date
              ? format(new Date(data.movie.release_date), "yyyy")
              : "Unknown"}
          </h3>
          <h3 className="text-slate-50 text-sm">{data.movie.runtime} minutes</h3>
        </div>
        <div className="flex flex-row items-center">
          <StarIcon className="text-amber-400 w-5 h-5" />
          <span className="pl-1 text-slate-100 text-2xl">
            {round(Number(data.movie.vote_average), 1)}
          </span>
        </div>
      </div>

      <div className="grid gap-10 mt-10 sm:grid-cols-2">
        <div className="relative w-full overflow-hidden">
          {data.movie.poster_path ? (
            <img
              src={getImageUrl(data.movie.poster_path)}
              className="object-cover w-full max-h-120 bg-black border border-gray-700 rounded-xl"
              alt={data.movie.name ?? "Movie poster"}
            />
          ) : (
            <div className="flex flex-1 items-center justify-center flex-col h-full">
              <p className="text-slate-600">No image available</p>
              <NoSymbolIcon className="w-24 h-24 text-slate-600" />
            </div>
          )}

          {director && (
            <div className="tile mt-3">
              <h4 className="text-slate-50 text-lg font-medium">Director</h4>
              <div className="mt-3">
                <PersonThumbnail
                  name={director.name}
                  role={DirectorRole}
                  profileImage={director.profile_path ?? ""}
                />
              </div>
            </div>
          )}
        </div>

        <div className="space-y-5 grid">
          <div className="tile">
            <h4 className="text-slate-50 text-lg font-medium">Plot</h4>
            <p className="text-slate-50 text-base mt-3">{data.movie.overview}</p>
          </div>
          <div className="tile">
            <h4 className="text-slate-50 text-lg font-medium">Top cast</h4>

            <div className="grid lg:grid-cols-2 gap-3 mt-5">
              {data.movie.credits?.cast.map((member) => (
                <PersonThumbnail
                  name={member.person.name}
                  role={member.character ?? ""}
                  profileImage={member.person.profile_path ?? ""}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
