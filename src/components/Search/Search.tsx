import React, { useCallback } from "react";
import styles from "./Search.module.scss";

type Props = {
  setSearch: (value: string) => void;
  setPageNumber: (value: number) => void;
};

const Search = ({ setSearch, setPageNumber }: Props): JSX.Element => {
  const onSearchButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
    },
    []
  );
  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className={styles.input}
        type="text"
      />
      <button
        onClick={onSearchButtonClick}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
