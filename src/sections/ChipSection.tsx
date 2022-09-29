import * as React from "react";
import Chip, { ChipProps } from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import options, { Variant } from "./options";

interface ChipVariant extends Variant {
  additionalProps?: Partial<ChipProps>;
}

const chipVariants: ChipVariant[] = [];

options.variants.forEach((variant) => {
  chipVariants.push(variant, {
    ...variant,
    label: `${variant.label} disabled`,
    additionalProps: { disabled: true },
  });
});

const ChipSection = () => {
  return (
    <>
      {chipVariants.map((variant) => {
        return (
          <Box key={variant.label} sx={{ mb: 3 }}>
            <Typography component="span" level="body1" sx={{ mb: 1 }}>
              {variant.label}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {options.colors.map((color) => {
                return (
                  <Chip
                    key={color.id}
                    variant={variant.id}
                    color={color.id}
                    {...variant.additionalProps}
                  >
                    {color.label}
                  </Chip>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default ChipSection;
