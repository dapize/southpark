import { apiData } from "@services/main"
import { IGetEpisodesResponse, IGetEpisodeList, IEPisode, IGetEpisodeResponse } from './episodes.d';

export const getEpisodeList = async(page: number = 1): Promise<IGetEpisodeList> => {
  const request = await apiData.get<IGetEpisodesResponse>(`/episodes?page=${page}`);
  const { data: list, meta: { current_page: currentPage, last_page: lastPage } } = request.data;
  return {
    list,
    currentPage,
    lastPage
  }
};

export const getEpisode = async(id: number): Promise<IEPisode> => {
  const request = await apiData.get<IGetEpisodeResponse>(`/episodes/${id}`);
  const { data: { data }} = request;
  return data
}
