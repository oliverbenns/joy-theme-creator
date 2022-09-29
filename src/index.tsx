import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/joy/styles";
import App from "./App";
import { AppStateProvider } from "./hooks/useAppState";
import { CssVarsProvider } from "@mui/joy/styles";
import theme from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider disableTransitionOnChange theme={theme}>
        <AppStateProvider>
          <App />
        </AppStateProvider>
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
