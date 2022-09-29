import React, { useState } from "react";
import useAppState from "../hooks/useAppState";
import ColorPicker from "../components/ColorPicker";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { useColorScheme } from "@mui/joy/styles";
import options from "../sections/options";
import IconButton from "@mui/joy/IconButton";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Avatar from "@mui/joy/Avatar";
import { CssVarsProvider } from "@mui/joy/styles";
import {
  PaletteVariant,
  DefaultColorScheme,
  DefaultColorPalette,
  DefaultVariantProp,
} from "@mui/joy/styles/types";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const PaletteControl = () => {
  const appState = useAppState();
  const { colorScheme } = useColorScheme();
  const [selectedVariant, setSelectedVariant] =
    useState<DefaultVariantProp>("solid");
  const [selectedPanel, setSelectedPanel] =
    useState<DefaultColorPalette | null>("primary");

  return (
    <>
      <Box sx={{ display: "flex", mb: 3 }}>
        <Select
          onChange={(_, value) => {
            if (value) {
              setSelectedVariant(value);
            }
          }}
          value={selectedVariant}
        >
          {options.variants.map((variant) => {
            return (
              <Option key={variant.id} value={variant.id}>
                {variant.label}
              </Option>
            );
          })}
        </Select>
      </Box>
      {options.colors.map((color) => {
        const isOpen = selectedPanel === color.id;
        const _colorScheme = colorScheme as DefaultColorScheme;
        const palette =
          appState.theme.colorSchemes[_colorScheme].palette[color.id];
        const themeOptions =
          appState.themeOptions?.colorSchemes?.[_colorScheme]?.palette;

        let keys: (keyof PaletteVariant)[] = [];

        if (selectedVariant === "solid") {
          keys.push(`${selectedVariant}HoverBg`, `${selectedVariant}Bg`);
        }

        if (selectedVariant === "soft") {
          keys.push(`${selectedVariant}Color`, `${selectedVariant}Bg`);
        }

        if (selectedVariant === "outlined") {
          keys.push(`${selectedVariant}Border`, `${selectedVariant}Color`);
        }

        if (selectedVariant === "plain") {
          keys.push(`${selectedVariant}HoverBg`, `${selectedVariant}Color`);
        }

        const avatarColors = keys.map((k) => palette[k]);

        return (
          <Box key={color.id} sx={{ pb: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography level="body2" textColor="text.primary">
                {color.label}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <CssVarsProvider
                  disableTransitionOnChange
                  theme={appState.theme}
                >
                  <AvatarGroup
                    sx={{
                      "--Avatar-size": "21px",
                      mr: 1,
                      flexDirection: "row-reverse",
                    }}
                  >
                    {avatarColors.map((avColor) => {
                      return (
                        <Avatar
                          key={avColor}
                          sx={{
                            background: avColor,
                          }}
                        >
                          {" "}
                        </Avatar>
                      );
                    })}
                  </AvatarGroup>
                </CssVarsProvider>
                <IconButton
                  size="sm"
                  variant="plain"
                  color="primary"
                  sx={{ "--IconButton-size": "24px" }}
                  onClick={() => {
                    setSelectedPanel(isOpen ? null : color.id);
                  }}
                >
                  {isOpen ? (
                    <KeyboardArrowDownRoundedIcon
                      fontSize="small"
                      color="primary"
                    />
                  ) : (
                    <KeyboardArrowUpRoundedIcon
                      fontSize="small"
                      color="primary"
                    />
                  )}
                </IconButton>
              </Box>
            </Box>

            <Box
              sx={{
                display: isOpen ? "block" : "none",
                pt: 2,
                px: 0.5,
              }}
            >
              {(() => {
                const variant = options.variants.find(
                  (v) => v.id === selectedVariant
                );

                if (!variant) {
                  return null;
                }

                const paletteKeys = Object.keys(palette).filter((k) =>
                  k.startsWith(variant.id)
                ) as (keyof PaletteVariant)[];

                return (
                  <Box
                    sx={{
                      display: "grid",
                      gap: 2,
                      gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                  >
                    {paletteKeys.map((key) => {
                      const label = key.replace(variant.id, "");
                      const value = themeOptions?.[color.id]?.[key];
                      //console.log("themeOptions", themeOptions);
                      //console.log("palette", palette);
                      //console.log("key", key);
                      const defaultThemeValue = getCssUnderlyingValue(
                        palette[key]
                      ).toUpperCase();

                      return (
                        <ColorPicker
                          key={key}
                          label={label}
                          // Old mui issue that doesn't clear input on undefined
                          value={value || ""}
                          onChange={(val) => {
                            if (!val) {
                              appState.clearColor(color.id, key);
                            }

                            appState.setColor(color.id, key, val.toUpperCase());
                          }}
                          placeholder={defaultThemeValue}
                          dropperValue={value || defaultThemeValue}
                          onClear={() => {
                            appState.clearColor(color.id, key);
                          }}
                          // Don't ask me why this is needed. Textfield does it's own thing
                          // inside css grid..something to do with the padding
                          textFieldSx={{ display: "inline-grid" }}
                        />
                      );
                    })}
                  </Box>
                );
              })()}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

const getCssUnderlyingValue = (str: string) => {
  const isCssVariable = str.startsWith("var(");
  if (!isCssVariable) {
    return str;
  }

  const name = str.replace("var(", "").replace(")", "");

  return getComputedStyle(document.documentElement).getPropertyValue(name);
};

export default PaletteControl;
