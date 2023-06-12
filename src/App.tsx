import React from "react";
import { Route } from "wouter";
import { TopNav } from "./components/top-nav";
import { AppRoute } from "./configs/routes";
import { HomePage } from "./pages/home";
import { MovieDetail } from "./pages/movie-detail";

export const App = () => {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <TopNav />

      <div className="flex relative flex-col flex-1 w-full mt-32 mx-auto sm:mb-12">
        <Route path={AppRoute.Home} component={HomePage} />
        <Route path={AppRoute.MovieDetail}>
          {({ movieId }) => <MovieDetail movieId={movieId} />}
        </Route>
      </div>
    </div>
  );
};
