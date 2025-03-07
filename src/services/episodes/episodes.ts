import { apiData } from "@services/main"
import { IGetEpisodesResponse, IGetEpisodeList, IGetEpisodeResponse, IGetEpisode } from './episodes.d';

export const getEpisodeList = async(page: number = 1): Promise<IGetEpisodeList> => {
  const request = await apiData.get<IGetEpisodesResponse>(`/episodes?page=${page}`);
  const { data: list, meta: { current_page: currentPage, last_page: lastPage } } = request.data;
  return {
    list: list.map((item) => ({
      id: item.id,
      thumbnailUrl: item.thumbnail_url.split('/revision/')[0],
      title: item.name,
      season: item.season,
      episode: item.episode,
      description: item.description,
      airDate: item.air_date
    })),
    currentPage,
    lastPage
  }
};

export const getEpisode = async(id: string): Promise<IGetEpisode> => {
  const request = await apiData.get<IGetEpisodeResponse>(`/episodes/${id}`);
  const { data: { data }} = request;
  return {
    id: data.id,
    season: data.season,
    episode: data.episode,
    thumbnailUrl: data.thumbnail_url.split('/revision/')[0],
    title: data.name,
    description: data.description,
    airDate: data.air_date,
    wikiUrl: data.wiki_url
  }
}
