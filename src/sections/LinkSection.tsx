import * as React from "react";
import Link from "@mui/joy/Link";
import Box from "@mui/joy/Box";
import options from "./options";

const LinkSection = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {options.colors.map((color) => {
        return (
          <Link key={color.id} color={color.id}>
            {color.label}
          </Link>
        );
      })}
    </Box>
  );
};

export default LinkSection;
