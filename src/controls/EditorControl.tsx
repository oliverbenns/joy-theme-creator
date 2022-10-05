import React from "react";
import useAppState from "../hooks/useAppState";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useTheme } from "@mui/joy/styles";

const EditorControl = () => {
  const appState = useAppState();
  const content = JSON.stringify(appState.themeOptions, null, 2);
  const theme = useTheme();

  const copyToClipboard = async () => {
    try {
      const result = await navigator.clipboard.writeText(content);
      alert("Theme copied to clipboard");
    } catch (err) {
      alert("Error copying theme to clipboard");
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      <textarea
        readOnly
        value={content}
        style={{
          width: "100%",
          borderRadius: theme.radius.sm,
          fontSize: theme.fontSize.sm,
          fontFamily: theme.fontFamily.code,
          padding: theme.spacing(1),
          boxSizing: "border-box",
          resize: "vertical",
          borderColor: theme.palette.neutral.outlinedBorder,
          backgroundColor: theme.palette.background.surface,
          color: theme.palette.neutral.outlinedColor,
        }}
        rows={30}
      />

      <IconButton
        size="sm"
        variant="plain"
        color="neutral"
        href="https://github.com/oliverbenns/joy-theme-creator"
        sx={{
          position: "absolute",
          top: theme.spacing(1),
          right: theme.spacing(1),
        }}
        onClick={copyToClipboard}
      >
        <ContentCopyIcon />
      </IconButton>
    </Box>
  );
};
export default EditorControl;
