import * as React from "react";
import Switch, { SwitchProps } from "@mui/joy/Switch";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import options, { Variant } from "./options";

interface SwitchVariant extends Variant {
  additionalProps?: Partial<SwitchProps>;
}

const switchVariants: SwitchVariant[] = [];

options.variants.forEach((variant) => {
  switchVariants.push(variant, {
    ...variant,
    label: `${variant.label} disabled`,
    additionalProps: { disabled: true },
  });
});

const SwitchSection = () => {
  return (
    <>
      {switchVariants.map((variant) => {
        return (
          <Box key={variant.label} sx={{ mb: 3 }}>
            <Typography component="span" level="body1" sx={{ mb: 1 }}>
              {variant.label}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {options.colors.map((color) => {
                return (
                  <Switch
                    key={color.id}
                    variant={variant.id}
                    color={color.id}
                    checked
                    {...variant.additionalProps}
                  >
                    {color.label}
                  </Switch>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default SwitchSection;
