import { IUserSettingsRepository } from "../../../repositories/IUserSettingsRepository";
import { UserSettings } from "../../../types/UserSettings";
import { createLocalStorageClient } from "./StorageClient";

export function createStorageUserSettingsRepository(): IUserSettingsRepository {
  const schema = "local:UserSettings" as const;
  const client = createLocalStorageClient<UserSettings>(schema);
  return {
    get: async (): Promise<UserSettings | null> => {
      return client.get();
    },
    save: async (data: UserSettings): Promise<void> => {
      return client.save(data);
    },
  };
}
