import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import options from "./options";

const AvatarSection = () => {
  return (
    <>
      <Typography component="span" level="body1" sx={{ mb: 1 }}>
        Icon
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        {options.colors.map((color) => {
          return <Avatar key={color.id} color={color.id} />;
        })}
      </Box>
      <Typography component="span" level="body1" sx={{ mb: 1 }}>
        Initials
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        {options.colors.map((color) => {
          return (
            <Avatar key={color.id} color={color.id}>
              {color.label.slice(0, 2).toUpperCase()}
            </Avatar>
          );
        })}
      </Box>
    </>
  );
};

export default AvatarSection;
