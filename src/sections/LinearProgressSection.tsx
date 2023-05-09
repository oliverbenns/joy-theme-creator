import * as React from "react";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import options from "./options";

const LinearProgressSection = () => {
  return (
    <>
      {options.variants.map((variant) => {
        return (
          <Box key={variant.label} sx={{ mb: 2 }}>
            <Typography component="span" level="body1" sx={{ mb: 1 }}>
              {variant.label}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {options.colors.map((color) => {
                return (
                  <LinearProgress
                    key={color.id}
                    size="md"
                    variant={variant.id}
                    color={color.id}
                  />
                );
              })}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default LinearProgressSection;
