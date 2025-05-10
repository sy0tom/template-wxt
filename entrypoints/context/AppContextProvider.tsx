import { createStorageUserSettingsRepository } from "#/lib/repositories/storage/StorageUserSettingsRepositoryImpl";
import {
  createUserSettingsService,
  UserSettingsService,
} from "#/services/UserSettingsService";
import { createContext, ReactNode } from "react";

type AppServices = {
  userSettingsService: UserSettingsService;
};

type AppContext = {
  userSettingsService: UserSettingsService;
};

export const AppContext = createContext<AppContext | null>(null);

interface Props {
  child: ReactNode;
}

function AppContextProvider({ child }: Props) {
  const userSettingsRepository = createStorageUserSettingsRepository();
  const userSettingsService = createUserSettingsService(userSettingsRepository);

  const services: AppServices = {
    userSettingsService,
  };

  return <AppContext.Provider value={services}>{child}</AppContext.Provider>;
}

export default AppContextProvider;
