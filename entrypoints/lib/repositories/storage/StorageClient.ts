export type Schema = "local:UserSettings";

export function createLocalStorageClient<T>(schema: Schema) {
  return {
    get: async (): Promise<T | null> => {
      return storage.getItem(schema);
    },
    save: async (t: T): Promise<void> => {
      return storage.setItem(schema, t);
    },
  };
}
