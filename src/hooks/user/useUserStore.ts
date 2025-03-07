import { create } from "zustand";
import { persist } from 'zustand/middleware'
import { ISessionData, IUserData, IUseUserStore } from './useUserStore.d';

export const useUserStore = create<IUseUserStore>()(
  persist(
    (set) => ({
      userData: null,
      sessionData: null,
      setData: (userData: IUserData, sessionData: ISessionData) => set({userData, sessionData}),
      cleanData: () => set(() => ({userData: null, sessionData: null}))
    }),
    {
      name: 'user-session'
    }
  )
);
