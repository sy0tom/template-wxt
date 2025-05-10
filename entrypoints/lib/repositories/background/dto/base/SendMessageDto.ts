import { BackgroundTask } from "#/types";

export interface SendMessageRequestDto<T> {
  taskName: BackgroundTask;
  data: T;
}

export interface SendMessageResponseDto<T> {
  taskName: BackgroundTask;
  isSuccess: boolean;
  data?: T;
  error?: string;
}
