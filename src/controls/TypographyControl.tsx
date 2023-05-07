import React from "react";
import Button from "@mui/joy/Button";
import useAppState from "../hooks/useAppState";
import fonts from "../fonts";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

const sortedFonts = [...fonts].sort((a, b) => a.name.localeCompare(b.name));

interface FontPickerProps {
  onChange: (val: string) => void;
  onClear: () => void;
  value: string;
}

const FontPicker = (props: FontPickerProps) => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Select
        onChange={(_, value) => {
          if (value) {
            props.onChange(value);
          }
        }}
        value={props.value}
        placeholder="Public Sans"
        sx={{
          flexGrow: 1,
        }}
        slotProps={{
          listbox: {
            sx: {
              maxHeight: 300,
              overflow: "auto",
            },
          },
        }}
      >
        {sortedFonts.map((font) => {
          return (
            <Option
              key={font.name}
              value={font.name}
              sx={{ fontFamily: font.name }}
            >
              {font.name}
            </Option>
          );
        })}
      </Select>
      <Button
        onClick={() => {
          props.onClear();
        }}
        disabled={!props.value}
      >
        Reset
      </Button>
    </Box>
  );
};

const TypographyControl = () => {
  const appState = useAppState();

  return (
    <>
      <Typography level="body2" textColor="text.primary" sx={{ mb: 2 }}>
        Body
      </Typography>
      <FontPicker
        onClear={() => {
          appState.clearFontFamily("body");
        }}
        onChange={(value) => {
          appState.setFontFamily("body", value);
        }}
        value={appState.themeOptions.fontFamily?.body || ""}
      />
      <Typography level="body2" textColor="text.primary" sx={{ my: 2 }}>
        Display
      </Typography>
      <FontPicker
        onClear={() => {
          appState.clearFontFamily("display");
        }}
        onChange={(value) => {
          appState.setFontFamily("display", value);
        }}
        value={appState.themeOptions.fontFamily?.display || ""}
      />
    </>
  );
};

export default TypographyControl;
