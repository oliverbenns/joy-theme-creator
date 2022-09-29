import * as React from "react";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import options from "./options";

const TextFieldSection = () => {
  return (
    <>
      {options.variants.map((variant) => {
        return (
          <Box key={variant.id} sx={{ mb: 2 }}>
            <Typography component="span" level="body1" sx={{ mb: 1 }}>
              {variant.label}
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField placeholder="Type in here…" variant={variant.id} />
              <TextField
                placeholder="Type in here…"
                variant={variant.id}
                disabled
              />
              <TextField
                placeholder="Type in here…"
                variant={variant.id}
                error
                helperText="Error text"
              />
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default TextFieldSection;
