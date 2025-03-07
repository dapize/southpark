import { FC } from "react";
import { EpisodeItem } from "./components/EpisodeItem";
import { EpisodeListProps } from "./EpisodeList.d";
import { Box } from "@mui/system";
import { routes } from "@routes/routes";
import { IGetEpisodeItem } from "@services/episodes";

export const EpisodeList: FC<EpisodeListProps> = ({ list }) => {
  return (
    <Box
      component="ul"
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      rowGap={2.5}
      flexWrap="wrap"
      columnGap={{ sm: 2.5 }}
    >
      {list.map((episode: IGetEpisodeItem) => {
        return (
          <EpisodeItem
            key={`episode-${episode.season}-${episode.episode}`}
            {...episode}
            fullWidth={Boolean(episode.episode === 1)}
            linkTo={`${routes.episode.replace(":id", `${episode.id}`)}`}
          />
        );
      })}
    </Box>
  );
};
