import { Button } from "#/components/ui/button";
import { AppContext } from "#/context/AppContextProvider";

function TopPage() {
  const context = useContext(AppContext);
  const userSettingsService = context?.userSettingsService;
  const backgroundService = context?.backgroundService;

  const getUserSettings = async () => {
    try {
      const userSettings = await userSettingsService?.getUserSettings();
      alert(`userSettings: ${JSON.stringify(userSettings, null, 2)}`);
    } catch (error) {
      alert(`error: ${error}`);
    }
  };

  const getHtml = async () => {
    try {
      const html = await backgroundService?.sampleFetch("https://google.com");
      alert(`html: ${html}`);
    } catch (error) {
      alert(`error: ${error}`);
    }
  };

  return (
    <>
      <div>TopPage</div>
      <Button onClick={getUserSettings}>storage</Button>
      <Button onClick={getHtml}>background</Button>
    </>
  );
}

export default TopPage;
