import { UserSettings } from "#/types/UserSettings";

export interface IUserSettingsRepository {
  get: () => Promise<UserSettings | null>;
  save: (userSettings: UserSettings) => Promise<void>;
}
