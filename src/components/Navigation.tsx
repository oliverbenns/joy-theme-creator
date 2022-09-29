import * as React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import { navGroups } from "../nav";

const Navigation = () => {
  return (
    <Box
      component="nav"
      sx={{
        p: 2,
        bgcolor: "background.componentBg",
        borderRight: "1px solid",
        borderColor: "divider",
        display: {
          xs: "none",
          sm: "initial",
        },
      }}
    >
      <List size="sm" sx={{ "--List-item-radius": "8px" }}>
        <ListItem nested sx={{ p: 0 }}>
          {navGroups.map((group) => {
            return (
              <Box
                sx={{
                  mb: 3,
                }}
                key={group.title}
              >
                <Box
                  sx={{
                    mb: 1,
                  }}
                >
                  <Typography
                    textColor="neutral.500"
                    fontWeight={700}
                    sx={{
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: ".1rem",
                    }}
                  >
                    {group.title}
                  </Typography>
                </Box>
                <List>
                  {group.items.map((item) => {
                    return (
                      <ListItem key={item.href}>
                        {/* set variant="soft" color=primary if selected */}
                        <ListItemButton component="a" href={item.href}>
                          <ListItemContent>{item.label}</ListItemContent>
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            );
          })}
        </ListItem>
      </List>
    </Box>
  );
};

export default Navigation;
