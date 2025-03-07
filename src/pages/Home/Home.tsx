import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Box } from "@mui/system";
import { EpisodeList } from "./features/EpisodeList";
import { YellowButton } from "@components/YellowButton";
import { useQuery } from "@tanstack/react-query";
import { getEpisodeList, IGetEpisodeItem } from "@services/episodes";

export const Home = () => {
  const [episodeList, setEpisodeList] = useState<IGetEpisodeItem[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, isSuccess, refetch, isLoading } = useQuery({
    queryKey: ["episodes", searchParams.get("page")],
    queryFn: () => getEpisodeList(searchParams.get("page")!),
    enabled: false,
  });

  const handleOnClickMore = () => {
    const currentPage = searchParams.get("page");
    setSearchParams({ page: `${Number(currentPage) + 1}` });
  };

  useEffect(() => {
    if (isSuccess) {
      setEpisodeList((list) => [...list, ...data.list]);
    }
  }, [data?.list, isSuccess]);

  useEffect(() => {
    const page = searchParams.get("page");
    if (page) {
      refetch();
    } else {
      setSearchParams({ page: "1" });
    }
  }, [refetch, searchParams, setSearchParams]);

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
