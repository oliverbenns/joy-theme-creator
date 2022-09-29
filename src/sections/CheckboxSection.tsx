import * as React from "react";
import Checkbox, { CheckboxProps } from "@mui/joy/Checkbox";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import options, { Variant } from "./options";

interface CheckboxVariant extends Variant {
  additionalProps?: Partial<CheckboxProps>;
}

const checkboxVariants: CheckboxVariant[] = [];

options.variants.forEach((variant) => {
  checkboxVariants.push(variant, {
    ...variant,
    label: `${variant.label} disabled`,
    additionalProps: { disabled: true },
  });
});

const CheckboxSection = () => {
  return (
    <>
      {checkboxVariants.map((variant) => {
        return (
          <Box key={variant.label} sx={{ mb: 3 }}>
            <Typography component="span" level="body1" sx={{ mb: 1 }}>
              {variant.label}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {options.colors.map((color) => {
                return (
                  <Checkbox
                    key={color.id}
                    variant={variant.id}
                    color={color.id}
                    checked
                    label={color.label}
                    {...variant.additionalProps}
                  >
                    {color.label}
                  </Checkbox>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default CheckboxSection;
