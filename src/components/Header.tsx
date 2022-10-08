import * as React from "react";
import Box from "@mui/joy/Box";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import ReplayIcon from "@mui/icons-material/Replay";
import LaunchIcon from "@mui/icons-material/Launch";
import { useColorScheme } from "@mui/joy/styles";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import PaletteIcon from "@mui/icons-material/Palette";
import pkg from "../../package.json";
import useAppState from "../hooks/useAppState";

const joyVersion = pkg.dependencies["@mui/joy"];

const Header = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  const appState = useAppState();

  React.useEffect(() => {
    setMounted(true);

    // scroll to anchor
    const hash = window.location.hash;
    if (!hash) {
      return;
    }

    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView();
    }
  }, []);

  return (
    <Box
      component="header"
      sx={{
        p: 2,
        gap: 2,
        bgcolor: "background.componentBg",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gridColumn: "1 / -1",
        borderBottom: "1px solid",
        borderColor: "divider",
        position: "sticky",
        top: 0,
        zIndex: 1100,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <PaletteIcon />
        <Typography component="h1" fontWeight="xl">
          Joy Theme Creator
        </Typography>
        <Typography component="span" level="body4">
          @mui/joy@{joyVersion}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
        <IconButton
          variant="outlined"
          color="primary"
          component="a"
          target="_blank"
          href="https://github.com/oliverbenns/joy-theme-creator"
        >
          <GitHubIcon />
        </IconButton>
        {mounted ? (
          <IconButton
            variant="outlined"
            color="primary"
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            {mode === "light" ? (
              <DarkModeRoundedIcon />
            ) : (
              <LightModeRoundedIcon />
            )}
          </IconButton>
        ) : (
          <IconButton size="sm" variant="outlined" color="primary" />
        )}
        <IconButton variant="outlined" color="primary" onClick={appState.reset}>
          <ReplayIcon />
        </IconButton>
        <Button
          size="sm"
          variant="outlined"
          component="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdiPv04dIS_JDId52TcRErzE6DHgYtbZS-gwVsMUDYXiHquUA/viewform?usp=sf_link"
          target="_blank"
          endDecorator={<LaunchIcon />}
        >
          Joy Templates
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
