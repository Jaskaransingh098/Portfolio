import { useState } from "react";
import Desktop from "./Components/Desktop/Desktop";
import CustomCursor from "./Components/Cursor/Cursor";
import "./App.css";
import TerminalLoader from "./TerminalLoader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      {loading ? (
        <TerminalLoader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Desktop />
          <CustomCursor />
        </>
      )}
    </div>
  );
}

export default App;
