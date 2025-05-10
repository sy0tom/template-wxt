import { IBackgroundRepository } from "#/repositories/IBackgroundRepository";

export function createBackgroundService(
  backgroundRepository: IBackgroundRepository,
) {
  return {
    sampleFetch: async (url: string): Promise<string> => {
      return backgroundRepository.sampleFetch(url);
    },
  };
}

export type BackgroundService = ReturnType<typeof createBackgroundService>;
