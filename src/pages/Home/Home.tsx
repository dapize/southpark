import { Box } from "@mui/system";
import { EpisodeList } from "./features/EpisodeList";
import { YellowButton } from "@components/YellowButton";

export const Home = () => {
  return (
    <Box paddingInline={3}>
      <EpisodeList />
      <YellowButton mt={3} paddingInline={3}>
        Load More
      </YellowButton>
    </Box>
  );
};
