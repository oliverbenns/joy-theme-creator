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
                return (
                  <MenuList key={color.id} sx={{ minWidth: 100 }}>
                    <MenuItem>Lorem</MenuItem>
                    <MenuItem color={color.id} variant={variant.id}>
                      {color.label}
                    </MenuItem>
                    <MenuItem>Dolor</MenuItem>
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
