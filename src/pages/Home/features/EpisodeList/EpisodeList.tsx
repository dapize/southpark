import { FC } from "react";
import { EpisodeItem, EpisodeItemProps } from "./components/EpisodeItem";
import { EpisodeListProps } from "./EpisodeList.d";
import { Box } from "@mui/system";

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
      {list.map((episode: EpisodeItemProps) => {
        return (
          <EpisodeItem
            fullWidth={Boolean(episode.episode === 1)}
            key={`episode-${episode.season}-${episode.episode}`}
            {...episode}
          />
        );
      })}
    </Box>
  );
};
