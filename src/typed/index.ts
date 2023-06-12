/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Cast = {
  __typename?: 'Cast';
  character?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  job?: Maybe<Scalars['String']['output']>;
  known_for_department?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  person: Person;
  profile_path?: Maybe<Scalars['String']['output']>;
};

export type Creator = {
  __typename?: 'Creator';
  credit_id?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  profile_path?: Maybe<Scalars['String']['output']>;
};

export type Credits = {
  __typename?: 'Credits';
  cast: Array<Cast>;
  crew: Array<Crew>;
  id: Scalars['ID']['output'];
};

export type CreditsTv = {
  __typename?: 'CreditsTv';
  cast: Array<Cast>;
  crew: Array<CrewAggregate>;
  id: Scalars['ID']['output'];
};

export type Crew = {
  __typename?: 'Crew';
  department?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  job?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  person: Person;
  profile_path?: Maybe<Scalars['String']['output']>;
};

export type CrewAggregate = {
  __typename?: 'CrewAggregate';
  department?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  jobs?: Maybe<Array<Job>>;
  name: Scalars['String']['output'];
  popularity?: Maybe<Scalars['Float']['output']>;
  profile_path?: Maybe<Scalars['String']['output']>;
};

export type DiscoverMoviesInput = {
  company: Scalars['String']['input'];
  genreId: Scalars['ID']['input'];
  language: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  provider: Scalars['String']['input'];
  sortBy: Scalars['String']['input'];
  year: Scalars['String']['input'];
};

export type DiscoverSeriesInput = {
  genreId: Scalars['ID']['input'];
  language: Scalars['String']['input'];
  network: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  sortBy: Scalars['String']['input'];
  year: Scalars['String']['input'];
};

export type Episode = {
  __typename?: 'Episode';
  air_date?: Maybe<Scalars['String']['output']>;
  episode_number?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  production_code?: Maybe<Scalars['String']['output']>;
  season_number?: Maybe<Scalars['Int']['output']>;
  still_path?: Maybe<Scalars['String']['output']>;
  videos?: Maybe<Array<Maybe<EpisodeVideo>>>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

export type EpisodeVideo = {
  __typename?: 'EpisodeVideo';
  id?: Maybe<Scalars['ID']['output']>;
  iso_639_1?: Maybe<Scalars['String']['output']>;
  iso_3166_1?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  official?: Maybe<Scalars['Boolean']['output']>;
  site?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Job = {
  __typename?: 'Job';
  credit_id?: Maybe<Scalars['String']['output']>;
  episode_count?: Maybe<Scalars['Int']['output']>;
  job?: Maybe<Scalars['String']['output']>;
};

export type Movie = {
  __typename?: 'Movie';
  backdrop_path?: Maybe<Scalars['String']['output']>;
  credits?: Maybe<Credits>;
  genres?: Maybe<Array<Genre>>;
  homepage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  original_title?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  poster_path?: Maybe<Scalars['String']['output']>;
  production_companies?: Maybe<Array<ProductionCompany>>;
  recommendations: Array<Maybe<Movie>>;
  release_date?: Maybe<Scalars['String']['output']>;
  reviews: Array<Maybe<Review>>;
  runtime?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  videos: Array<Maybe<Video>>;
  vote_average?: Maybe<Scalars['Float']['output']>;
};

export type MovieCreateInput = {
  overview: Scalars['String']['input'];
  poster_path: Scalars['String']['input'];
  release_date: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type MoviesResponse = {
  __typename?: 'MoviesResponse';
  page: Scalars['Int']['output'];
  results: Array<Movie>;
  total_pages: Scalars['Int']['output'];
  total_results: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  movieCreate?: Maybe<Movie>;
};


export type MutationMovieCreateArgs = {
  input: MovieCreateInput;
};

export type Network = {
  __typename?: 'Network';
  id?: Maybe<Scalars['Int']['output']>;
  logo_path?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  origin_country?: Maybe<Scalars['String']['output']>;
};

export type Person = {
  __typename?: 'Person';
  biography?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['String']['output']>;
  cast: Array<Movie>;
  deathday?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  place_of_birth?: Maybe<Scalars['String']['output']>;
  profile_path?: Maybe<Scalars['String']['output']>;
};

export type PersonResponse = {
  __typename?: 'PersonResponse';
  page: Scalars['Int']['output'];
  results: Array<Person>;
  total_pages: Scalars['Int']['output'];
  total_results: Scalars['Int']['output'];
};

export type ProductionCompany = {
  __typename?: 'ProductionCompany';
  id: Scalars['ID']['output'];
  logo_path?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  origin_country?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  discoverMovies: MoviesResponse;
  discoverSeries: SeriesResponse;
  genres: Array<Genre>;
  genresSeries: Array<Genre>;
  movie?: Maybe<Movie>;
  nowPlayingMovies: MoviesResponse;
  person?: Maybe<Person>;
  searchMovies?: Maybe<MoviesResponse>;
  searchMulti?: Maybe<SearchResponse>;
  searchPerson?: Maybe<PersonResponse>;
  searchSeries?: Maybe<SeriesResponse>;
  series?: Maybe<Series>;
  upcomingMovies: MoviesResponse;
};


export type QueryDiscoverMoviesArgs = {
  input?: InputMaybe<DiscoverMoviesInput>;
};


export type QueryDiscoverSeriesArgs = {
  input?: InputMaybe<DiscoverSeriesInput>;
};


export type QueryMovieArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNowPlayingMoviesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPersonArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySearchMoviesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type QuerySearchMultiArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type QuerySearchPersonArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type QuerySearchSeriesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type QuerySeriesArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUpcomingMoviesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Review = {
  __typename?: 'Review';
  author_details: ReviewAuthor;
  content: Scalars['String']['output'];
  created_at: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ReviewAuthor = {
  __typename?: 'ReviewAuthor';
  avatar_path?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<SearchResults>>>;
  total_pages?: Maybe<Scalars['Int']['output']>;
  total_results?: Maybe<Scalars['Int']['output']>;
};

export type SearchResults = Movie | Person | Series;

export type Season = {
  __typename?: 'Season';
  air_date?: Maybe<Scalars['String']['output']>;
  episode_count?: Maybe<Scalars['Int']['output']>;
  episodes?: Maybe<Array<Maybe<Episode>>>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  poster_path?: Maybe<Scalars['String']['output']>;
  season_number?: Maybe<Scalars['Int']['output']>;
  seriesId: Scalars['ID']['output'];
};

export type Series = {
  __typename?: 'Series';
  backdrop_path?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Array<Creator>>;
  credits?: Maybe<CreditsTv>;
  first_air_date?: Maybe<Scalars['String']['output']>;
  genres?: Maybe<Array<Genre>>;
  homepage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  in_production?: Maybe<Scalars['Boolean']['output']>;
  languages?: Maybe<Array<Scalars['String']['output']>>;
  last_air_date?: Maybe<Scalars['String']['output']>;
  last_episode_to_air?: Maybe<Episode>;
  name: Scalars['String']['output'];
  networks?: Maybe<Array<Maybe<Network>>>;
  next_episode_to_air?: Maybe<Episode>;
  number_of_episodes?: Maybe<Scalars['Int']['output']>;
  number_of_seasons?: Maybe<Scalars['Int']['output']>;
  origin_country?: Maybe<Array<Scalars['String']['output']>>;
  original_language?: Maybe<Scalars['String']['output']>;
  original_name?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  poster_path?: Maybe<Scalars['String']['output']>;
  production_companies?: Maybe<Array<ProductionCompany>>;
  recommendations: Array<Maybe<Series>>;
  reviews: Array<Maybe<Review>>;
  seasons?: Maybe<Array<Season>>;
  status?: Maybe<Scalars['String']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  videos: Array<Maybe<Video>>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

export type SeriesResponse = {
  __typename?: 'SeriesResponse';
  page: Scalars['Int']['output'];
  results: Array<Series>;
  total_pages: Scalars['Int']['output'];
  total_results: Scalars['Int']['output'];
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  site?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SearchMoviesQueryVariables = Exact<{
  query: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchMoviesQuery = { __typename?: 'Query', searchMovies?: { __typename?: 'MoviesResponse', page: number, total_results: number, total_pages: number, results: Array<{ __typename?: 'Movie', id: string, release_date?: string | null, poster_path?: string | null, original_title?: string | null, vote_average?: number | null }> } | null };

export type GetTomCruiseQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetTomCruiseQuery = { __typename?: 'Query', person?: { __typename?: 'Person', id: string, name: string, cast: Array<{ __typename?: 'Movie', id: string, release_date?: string | null, poster_path?: string | null, original_title?: string | null, vote_average?: number | null }> } | null };

export type GetMovieQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMovieQuery = { __typename?: 'Query', movie?: { __typename?: 'Movie', id: string, name?: string | null, original_title?: string | null, overview?: string | null, poster_path?: string | null, release_date?: string | null, backdrop_path?: string | null, runtime?: number | null, vote_average?: number | null, credits?: { __typename?: 'Credits', crew: Array<{ __typename?: 'Crew', name: string, job?: string | null, profile_path?: string | null }>, cast: Array<{ __typename?: 'Cast', character?: string | null, person: { __typename?: 'Person', name: string, profile_path?: string | null } }> } | null } | null };


export const SearchMoviesDocument = gql`
    query SearchMovies($query: String!, $page: Int) {
  searchMovies(query: $query, page: $page) {
    page
    total_results
    total_pages
    results {
      id
      release_date
      poster_path
      original_title
      vote_average
    }
  }
}
    `;

/**
 * __useSearchMoviesQuery__
 *
 * To run a query within a React component, call `useSearchMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMoviesQuery({
 *   variables: {
 *      query: // value for 'query'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useSearchMoviesQuery(baseOptions: Apollo.QueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
      }
export function useSearchMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
        }
export type SearchMoviesQueryHookResult = ReturnType<typeof useSearchMoviesQuery>;
export type SearchMoviesLazyQueryHookResult = ReturnType<typeof useSearchMoviesLazyQuery>;
export type SearchMoviesQueryResult = Apollo.QueryResult<SearchMoviesQuery, SearchMoviesQueryVariables>;
export const GetTomCruiseDocument = gql`
    query GetTomCruise($id: ID!) {
  person(id: $id) {
    id
    name
    cast {
      id
      release_date
      poster_path
      original_title
      vote_average
    }
  }
}
    `;

/**
 * __useGetTomCruiseQuery__
 *
 * To run a query within a React component, call `useGetTomCruiseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTomCruiseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTomCruiseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTomCruiseQuery(baseOptions: Apollo.QueryHookOptions<GetTomCruiseQuery, GetTomCruiseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTomCruiseQuery, GetTomCruiseQueryVariables>(GetTomCruiseDocument, options);
      }
export function useGetTomCruiseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTomCruiseQuery, GetTomCruiseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTomCruiseQuery, GetTomCruiseQueryVariables>(GetTomCruiseDocument, options);
        }
export type GetTomCruiseQueryHookResult = ReturnType<typeof useGetTomCruiseQuery>;
export type GetTomCruiseLazyQueryHookResult = ReturnType<typeof useGetTomCruiseLazyQuery>;
export type GetTomCruiseQueryResult = Apollo.QueryResult<GetTomCruiseQuery, GetTomCruiseQueryVariables>;
export const GetMovieDocument = gql`
    query GetMovie($id: ID!) {
  movie(id: $id) {
    id
    name
    original_title
    overview
    poster_path
    release_date
    backdrop_path
    runtime
    vote_average
    credits {
      crew {
        name
        job
        profile_path
      }
      cast {
        character
        person {
          name
          profile_path
        }
      }
    }
  }
}
    `;

/**
 * __useGetMovieQuery__
 *
 * To run a query within a React component, call `useGetMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMovieQuery(baseOptions: Apollo.QueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
      }
export function useGetMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
        }
export type GetMovieQueryHookResult = ReturnType<typeof useGetMovieQuery>;
export type GetMovieLazyQueryHookResult = ReturnType<typeof useGetMovieLazyQuery>;
export type GetMovieQueryResult = Apollo.QueryResult<GetMovieQuery, GetMovieQueryVariables>;