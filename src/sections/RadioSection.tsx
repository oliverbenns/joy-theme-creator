import * as React from "react";
import Radio, { RadioProps } from "@mui/joy/Radio";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import options, { Variant } from "./options";

interface RadioVariant extends Variant {
  additionalProps?: Partial<RadioProps>;
}

const radioVariants: RadioVariant[] = [];

options.variants.forEach((variant) => {
  radioVariants.push(variant, {
    ...variant,
    label: `${variant.label} disabled`,
    additionalProps: { disabled: true },
  });
});

const RadioSection = () => {
  return (
    <>
      {radioVariants.map((variant) => {
        return (
          <Box key={variant.label} sx={{ mb: 3 }}>
            <Typography component="span" level="body1" sx={{ mb: 1 }}>
              {variant.label}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {options.colors.map((color) => {
                return (
                  <Radio
                    key={color.id}
                    variant={variant.id}
                    color={color.id}
                    checked
                    label={color.label}
                    {...variant.additionalProps}
                  >
                    {color.label}
                  </Radio>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default RadioSection;
