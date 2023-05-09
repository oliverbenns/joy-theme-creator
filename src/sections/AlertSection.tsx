import * as React from "react";
import Alert from "@mui/joy/Alert";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import options from "./options";

const AlertSection = () => {
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
                  <Alert
                    key={color.id}
                    size="md"
                    variant={variant.id}
                    color={color.id}
                  >
                    {color.label}
                  </Alert>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default AlertSection;
