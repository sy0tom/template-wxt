import { createBackgroundRepository } from "#/lib/repositories/background/BackgroundRepositoryImpl";
import { createStorageUserSettingsRepository } from "#/lib/repositories/storage/StorageUserSettingsRepositoryImpl";
import {
  BackgroundService,
  createBackgroundService,
} from "#/services/BackgroundService";
import {
  createUserSettingsService,
  UserSettingsService,
} from "#/services/UserSettingsService";
import { createContext, ReactNode } from "react";

type AppContext = {
  userSettingsService: UserSettingsService;
  backgroundService: BackgroundService;
};

export const AppContext = createContext<AppContext | null>(null);

interface Props {
  child: ReactNode;
}

function AppContextProvider({ child }: Props) {
  const userSettingsRepository = createStorageUserSettingsRepository();
  const userSettingsService = createUserSettingsService(userSettingsRepository);
  const backgroundRepository = createBackgroundRepository();
  const backgroundService = createBackgroundService(backgroundRepository);

  const services: AppContext = {
    userSettingsService,
    backgroundService,
  };

  return <AppContext.Provider value={services}>{child}</AppContext.Provider>;
}

export default AppContextProvider;
