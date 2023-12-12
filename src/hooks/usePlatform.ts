import usePlatfroms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatfroms();
  return platforms?.find((platform) => platform.id === id);
};

export default usePlatform;
