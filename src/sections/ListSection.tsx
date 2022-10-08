import * as React from "react";
import Box from "@mui/joy/Box";
import options from "./options";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";

const ListSection = () => {
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
                  <List component="nav" key={color.id} sx={{ minWidth: 100 }}>
                    <ListItemButton>Lorem</ListItemButton>
                    <ListItemButton color={color.id} variant={variant.id}>
                      {color.label}
                    </ListItemButton>
                    <ListItemButton>Dolor</ListItemButton>
                  </List>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ListSection;
