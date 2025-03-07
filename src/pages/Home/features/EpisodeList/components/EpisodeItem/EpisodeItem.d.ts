import { IGetEpisodeItem } from "@services/episodes";

export interface EpisodeItemProps extends IGetEpisodeItem {
  linkTo: string;
  fullWidth?: boolean;
}
