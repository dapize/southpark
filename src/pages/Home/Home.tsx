import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { EpisodeList } from "./features/EpisodeList";
import { YellowButton } from "@components/YellowButton";
import { useQuery } from "@tanstack/react-query";
import { getEpisodeList } from "@services/episodes";
import { EpisodeItemProps } from "./features/EpisodeList/components/EpisodeItem";

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [episodeList, setEpisodeList] = useState<EpisodeItemProps[]>([]);

  const { data, isSuccess } = useQuery({
    queryKey: ["episodes", currentPage],
    queryFn: () => getEpisodeList(currentPage),
  });

  const handleOnClickMore = () => {
    setCurrentPage((page) => page + 1);
  };

  useEffect(() => {
    if (isSuccess) {
      setEpisodeList(data.list);
    }
  }, [data?.list, isSuccess]);

  return (
    <Box paddingInline={3}>
      <EpisodeList list={episodeList} />
      <YellowButton mt={3} paddingInline={3} onClick={handleOnClickMore}>
        Load More
      </YellowButton>
    </Box>
  );
};
