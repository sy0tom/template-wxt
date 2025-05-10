export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!message.taskName) {
    return false;
  }

  if (message.taskName === "sampleFetch") {
    (async () => {
      const { url } = message.data;
      const response = await fetch(url);

      if (response.ok) {
        sendResponse({
          isSuccess: true,
          data: { html: await response.text() },
        });
      }
      sendResponse({ isSuccess: false, error: "Failed to fetch data" });
    })();
    return true;
  }

  return false;
});
