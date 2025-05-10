export interface IBackgroundRepository {
  sampleFetch(url: string): Promise<string>;
}
