import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data: genres } = useGenres();
  console.log(genres);

  return genres?.find((g) => g.id === id);
};

export default useGenre;
