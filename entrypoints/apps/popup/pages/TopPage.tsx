import { Button } from "#/components/ui/button";
import { AppContext } from "#/context/AppContextProvider";

function TopPage() {
  const context = useContext(AppContext);
  const userSettingsService = context?.userSettingsService;

  const getUserSettings = async () => {
    try {
      const userSettings = await userSettingsService?.getUserSettings();
      alert(`userSettings: ${JSON.stringify(userSettings, null, 2)}`);
    } catch (error) {
      alert(`error: ${error}`);
    }
  };
  return (
    <>
      <div>TopPage</div>
      <Button onClick={getUserSettings}>hello</Button>
    </>
  );
}

export default TopPage;
