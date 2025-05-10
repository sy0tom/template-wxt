import { useState } from "react";
import { TopPage } from "./features/top";
import { SettingsPage } from "./features/settings";

function App() {
  const [mainContent, setMainContent] = useState<React.ReactNode>(<TopPage />);

  const onChangeMainContent = (content: React.ReactNode) => {
    if (!mainContent === content) {
      setMainContent(content);
    }
  };

  return (
    <>
      <header>
        <div className="w-full h-12 bg-blue-950 flex items-center justify-center">
          <div
            onClick={() => onChangeMainContent(<TopPage />)}
            className="flex items-center"
          >
            <span className="p-2 text-2xl font-sans font-bold text-white">
              Template WXT
            </span>
          </div>

          <div className="p-2 flex justify-end flex-grow">
            <button onClick={() => onChangeMainContent(<SettingsPage />)}>
              settings
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="p-2">{mainContent}</div>
      </main>
    </>
  );
}

export default App;
