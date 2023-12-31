interface Props {
  trailer?: string;
  poster?: string;
}

const GameTrailer = ({ trailer, poster }: Props) => {
  console.log(trailer);

  return trailer ? <video src={trailer} poster={poster} controls /> : null;
};

export default GameTrailer;
