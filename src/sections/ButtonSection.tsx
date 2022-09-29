import * as React from "react";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import options from "./options";

const ButtonSection = () => {
  return (
    <>
      {options.variants.map((variant) => {
        return (
          <Box key={variant.id} sx={{ mb: 2 }}>
            <Typography component="span" level="body1" sx={{ mb: 1 }}>
              {variant.label}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {options.colors.map((color) => {
                return (
                  <Button
                    key={color.id}
                    size="md"
                    variant={variant.id}
                    color={color.id}
                  >
                    {color.label}
                  </Button>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default ButtonSection;
