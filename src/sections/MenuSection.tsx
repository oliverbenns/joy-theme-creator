import * as React from "react";
import Box from "@mui/joy/Box";
import options from "./options";
import MenuList from "@mui/joy/MenuList";
import MenuItem from "@mui/joy/MenuItem";
import Typography from "@mui/joy/Typography";

const MenuSection = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      {options.variants.map((variant) => {
        return (
          <Box key={variant.label} sx={{ mb: 3 }}>
            <Typography component="span" level="body1" sx={{ mb: 1 }}>
              {variant.label}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {options.colors.map((color) => {
                // tabIndex unset here as without show/hide it's taking tab precedence.
                return (
                  <MenuList
                    tabIndex={undefined}
                    key={color.id}
                    sx={{ width: 100, maxWidth: 100 }}
                  >
                    <MenuItem tabIndex={undefined}>Lorem</MenuItem>
                    <MenuItem
                      tabIndex={undefined}
                      color={color.id}
                      variant={variant.id}
                    >
                      {color.label}
                    </MenuItem>
                    <MenuItem tabIndex={undefined}>Dolor</MenuItem>
                  </MenuList>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default MenuSection;
