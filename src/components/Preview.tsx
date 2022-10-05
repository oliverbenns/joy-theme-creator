import React from "react";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { navGroups } from "../nav";
import { CssVarsProvider } from "@mui/joy/styles";
import useAppState from "../hooks/useAppState";
import ListDivider from "@mui/joy/ListDivider";
import { useTheme } from "@mui/joy/styles";

const Preview = () => {
  const appState = useAppState();
  const theme = useTheme();

  return (
    <Box component="main" sx={{ p: 2 }}>
      {navGroups.map((group) => {
        return group.items.map((item) => {
          const Component = item.component;

          return (
            <Sheet
              variant="outlined"
              sx={{
                borderRadius: "sm",
                mb: 2,
              }}
              key={item.id}
            >
              <CssVarsProvider disableTransitionOnChange theme={appState.theme}>
                <Box sx={{ p: 2 }}>
                  <div
                    id={item.id}
                    style={{
                      position: "relative",
                      visibility: "hidden",
                      // @TODO: Pass header ref for offset
                      // css calc required because theme.spacing gives string
                      top: `calc((65px + ${theme.spacing(3)}) * -1)`,
                    }}
                  />
                  <Typography level="h4" textColor="text.primary">
                    {item.label}
                  </Typography>
                  <Typography level="body2" sx={{ mt: 1 }}>
                    {item.description}
                  </Typography>
                  <ListDivider component="hr" sx={{ my: 2 }} />
                  <Component />
                </Box>
              </CssVarsProvider>
            </Sheet>
          );
        });
      })}
    </Box>
  );
};

export default Preview;
