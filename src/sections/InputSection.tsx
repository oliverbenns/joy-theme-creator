import * as React from "react";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import options from "./options";

const InputSection = () => {
  return (
    <>
      {options.variants.map((variant) => {
        return (
          <Box key={variant.id} sx={{ mb: 2 }}>
            <Typography component="span" level="body1" sx={{ mb: 1 }}>
              {variant.label}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <div>
                <Input placeholder="Type in here…" variant={variant.id} />
              </div>
              <div>
                <Input
                  placeholder="Type in here…"
                  variant={variant.id}
                  disabled
                />
              </div>
              <div>
                <FormControl>
                  <Input
                    placeholder="Type in here…"
                    variant={variant.id}
                    error
                  />
                  <FormHelperText>Error text</FormHelperText>
                </FormControl>
              </div>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default InputSection;
