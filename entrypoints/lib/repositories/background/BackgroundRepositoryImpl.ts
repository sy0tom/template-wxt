import { IBackgroundRepository } from "#/repositories/IBackgroundRepository";
import {
  SendMessageRequestDto,
  SendMessageResponseDto,
} from "./dto/base/SendMessageDto";
import {
  TestMessageRequestDto,
  TestMessageResponseDto,
} from "./dto/TestMessageDto";

export function createBackgroundRepository(): IBackgroundRepository {
  const sendMessage = async <T, R>(
    requestDto: SendMessageRequestDto<T>,
  ): Promise<SendMessageResponseDto<R>> => {
    return chrome.runtime.sendMessage(requestDto);
  };

  return {
    sampleFetch: async (url: string): Promise<string> => {
      const response = await sendMessage<
        TestMessageRequestDto,
        TestMessageResponseDto
      >({
        taskName: "sampleFetch",
        data: { url },
      });

      if (response.isSuccess && response.data) {
        return response.data.html;
      }
      throw new Error(response.error);
    },
  };
}
