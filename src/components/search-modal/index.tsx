import React, { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { debounce } from "lodash";
import { ColorRing } from "react-loader-spinner";
import { useLocation } from "wouter";
import { useSearchMoviesLazyQuery } from "../../typed";
import { Modal } from "../modal";
import { SearchResultItem } from "../search-result-item";

interface SearchModalProps {
  isModalOpen: boolean;
  onModalClose: () => void;
}

export const SearchModal: FC<SearchModalProps> = ({ isModalOpen, onModalClose }) => {
  const searchModalRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [, setLocation] = useLocation();

  const [getResults, { data, loading }] = useSearchMoviesLazyQuery({
    fetchPolicy: "network-only",
    variables: {
      query: inputValue,
      page: 1,
    },
  });

  useLayoutEffect(() => {
    if (isModalOpen) {
      document.getElementById("search-input-field")?.focus();
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    getResults({
      variables: {
        query: inputValue,
      },
    });
  }, [inputValue, getResults]);

  const handleSelect = (movieId: string) => {
    setInputValue("");
    setLocation(`/movie/${movieId}`);
    onModalClose();
  };

  const handleOnClose = () => {
    setInputValue("");
    onModalClose();
  };

  return (
    <Modal
      id="search-modal"
      isModalOpen={isModalOpen}
      handleModalClose={handleOnClose}
      containerClassName="flex justify-center items-start p-5 border border-slate-800"
      modalClassName="w-full max-w-3xl mx-auto lg:mt-24 bg-slate-900 shadow-lg border border-slate-700 rounded-lg"
      hideCloseBtn
    >
      <div ref={searchModalRef}>
        <div className="flex relative justify-center items-center w-full h-full cursor-pointer border-slate-700 py-1.5">
          <MagnifyingGlassIcon className="absolute w-5 h-5 left-2 text-slate-400" />
          <input
            id="search-input-field"
            className="w-full outline-none sm:flex items-center pl-10 text-sm leading-6 text-slate-200 py-1.5 bg-slate-900 rounded-t-lg"
            placeholder="Search movies..."
            onChange={debounce((e) => {
              setInputValue(e.target.value);
            }, 500)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />

          <div className="flex justify-center absolute right-2 w-10 ">
            <div
              className="flex items-baseline text-xs space-x-1 p-1.5 rounded-md text-slate-200 bg-slate-700 hover:bg-slate-600 hover:text-slate-50 transition-hover"
              onClick={handleOnClose}
            >
              ESC
            </div>
          </div>
        </div>

        {!loading &&
          inputValue &&
          (!data?.searchMovies?.results || data?.searchMovies?.results.length === 0) && (
            <div className="flex flex-1 justify-center items-center h-full py-20">
              <p className="text-slate-400">
                No search results for &quot;{inputValue}&quot;
              </p>
            </div>
          )}

        {loading && (
          <div className="flex flex-1 justify-center items-center space-x-3 h-full py-20">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#14b8a6", "#0d9488", "##10b981", "##065f46", "#1e3a8a"]}
            />
          </div>
        )}

        {!loading &&
          inputValue &&
          data?.searchMovies?.results &&
          data?.searchMovies?.results.length > 0 && (
            <div className="min-h-48 max-h-96	 overflow-y-scroll">
              <div className="mt-5 px-4 pb-2 text-blue-400 text-xs">Results</div>

              <ul className="space-y-3 px-3 my-3">
                {data?.searchMovies?.results.map((movie, idx) => (
                  <SearchResultItem
                    key={`${movie.id}-${idx}`}
                    id={movie.id}
                    original_title={movie.original_title}
                    poster_path={movie.poster_path}
                    vote_average={movie.vote_average}
                    release_date={movie.release_date}
                    onSelect={handleSelect}
                  />
                ))}
              </ul>
            </div>
          )}
      </div>
    </Modal>
  );
};
