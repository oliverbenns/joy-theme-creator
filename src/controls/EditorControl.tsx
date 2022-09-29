import React from "react";
import useAppState from "../hooks/useAppState";

const EditorControl = () => {
  const appState = useAppState();

  return (
    <>
      <textarea
        readOnly
        value={JSON.stringify(appState.themeOptions, null, 2)}
        style={{ width: "100%" }}
        rows={30}
      />
    </>
  );
};
export default EditorControl;
