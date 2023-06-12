import React, { FC } from "react";
import { useGetTomCruiseQuery } from "../../typed";
import { TOM_CRUISE_ID } from "../../configs/constants";
import { MovieTile } from "../../components/movie-tile";
import { LoadingContainer } from "../../components/loading-container";
import { ErrorContainer } from "../../components/error-container";

export const HomePage: FC = () => {
  const { loading, data, error } = useGetTomCruiseQuery({
    variables: {
      id: TOM_CRUISE_ID,
    },
  });

  if (loading) {
    return <LoadingContainer />;
  }

  if (error) {
    return <ErrorContainer message="Failed to load Tom Cruise movies" />;
  }

  if (!data?.person) {
    return <ErrorContainer message="Failed to load Tom Cruise movies" />;
  }

  return (
    <div className="container mx-auto px-5">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
        John Johnsons Cruisey Movie Monday
      </h1>

      <div
        className="
            grid
            gap-5
            mt-5
            grid-cols-1 
            xs:grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            xl:grid-cols-5 
            2xl:grid-cols-6
          "
      >
        {data?.person?.cast.map((movie, idx) => (
          <MovieTile
            key={`${movie.id}-${idx}`}
            id={movie.id}
            original_title={movie.original_title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
};
