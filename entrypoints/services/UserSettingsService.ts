import { IUserSettingsRepository } from "#/repositories/IUserSettingsRepository";
import { UserSettings } from "#/types";

export function createUserSettingsService(
  userSettingsRepository: IUserSettingsRepository,
) {
  const getSettings = () => {
    return userSettingsRepository.get();
  };
  return {
    getUserSettings: async (): Promise<UserSettings | null> => {
      return getSettings();
    },

    setUserSettings: async (
      userSettings: UserSettings,
    ): Promise<UserSettings> => {
      await userSettingsRepository.save(userSettings);
      const settings = await getSettings();
      if (!settings) {
        throw new Error("Failed to save user settings");
      }
      return settings;
    },
  };
}

export type UserSettingsService = ReturnType<typeof createUserSettingsService>;
