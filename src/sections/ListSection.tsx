import * as React from "react";
import Box from "@mui/joy/Box";
import options from "./options";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";

const ListSection = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      {options.colors.map((color) => {
        return (
          <List
            component="nav"
            sx={{
              maxWidth: 320,
              minWidth: 200,
            }}
            key={color.id}
          >
            <ListItemButton>Lorem</ListItemButton>
            <ListItemButton color={color.id} variant="soft">
              Ipsum
            </ListItemButton>
            <ListItemButton>Ipsum</ListItemButton>
          </List>
        );
      })}
    </Box>
  );
};

export default ListSection;
