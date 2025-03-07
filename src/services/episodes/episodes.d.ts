import { EpisodeItemProps } from "@pages/Home/features/EpisodeList/components/EpisodeItem";

export interface ILink {
  url?: string;
  label: string;
  active: boolean;
}

export interface IEPisode {
  id: number;
  name: string;
  season: number;
  episode: number;
  air_date: string;
  wiki_url: string;
  thumbnail_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  characters: string[];
  locations: string[];
}

export interface ILinks {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface IMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: ILink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface IGetEpisodesResponse {
  data: IEPisode[];
  links: ILinks;
  meta: IMeta;
}

export interface IGetEpisodeResponse {
  data: IEPisode;
}

export interface IGetEpisodeItem {
  id: number;
  season: number;
  episode: number;
  thumbnailUrl: string;
  title: string;
  description: string;
  airDate: string;
}

export interface IGetEpisode extends IGetEpisodeItem {
  wikiUrl: string;
}

export interface IGetEpisodeList{
  currentPage: number;
  lastPage: number;
  list: IGetEpisodeItem[];
}
