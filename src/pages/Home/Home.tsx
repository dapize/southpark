import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { EpisodeList } from "./features/EpisodeList";
import { YellowButton } from "@components/YellowButton";
import { useQuery } from "@tanstack/react-query";
import { getEpisodeList, IGetEpisodeItem } from "@services/episodes";

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [episodeList, setEpisodeList] = useState<IGetEpisodeItem[]>([]);

  const { data, isSuccess, refetch, isLoading } = useQuery({
    queryKey: ["episodes", currentPage],
    queryFn: () => getEpisodeList(currentPage),
    enabled: false,
  });

  const handleOnClickMore = () => {
    setCurrentPage((page) => page + 1);
  };

  useEffect(() => {
    if (isSuccess) {
      setEpisodeList((list) => [...list, ...data.list]);
    }
  }, [data?.list, isSuccess]);

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  return (
    <Box paddingInline={3}>
      <EpisodeList list={episodeList} />
      <YellowButton
        mt={3}
        paddingInline={3}
        onClick={handleOnClickMore}
        isLoading={isLoading}
      >
        Load More
      </YellowButton>
    </Box>
  );
};
