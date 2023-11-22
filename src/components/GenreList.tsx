import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres, error, isLoading } = useGenre();
  return (
    <ul>
      {genres.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
