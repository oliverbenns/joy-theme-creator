import * as React from "react";
import Badge from "@mui/joy/Badge";
import Box from "@mui/joy/Box";
import MailIcon from "@mui/icons-material/Mail";
import options from "./options";

const BadgeSection = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
      {options.colors.map((color) => {
        return (
          <Badge color={color.id} key={color.id}>
            <MailIcon sx={{ fontSize: 24 }} />
          </Badge>
        );
      })}
    </Box>
  );
};

export default BadgeSection;
