import * as React from "react";
import Button, { ButtonProps } from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import options, { Variant } from "./options";

interface ButtonVariant extends Variant {
  additionalProps?: Partial<ButtonProps>;
}

const buttonVariants: ButtonVariant[] = [];

options.variants.forEach((variant) => {
  buttonVariants.push(variant, {
    ...variant,
    label: `${variant.label} disabled`,
    additionalProps: { disabled: true },
  });
});

const ButtonSection = () => {
  return (
    <>
      {buttonVariants.map((variant) => {
        return (
          <Box key={variant.id} sx={{ mb: 2 }}>
            <Typography component="span" level="body1" sx={{ mb: 1 }}>
              {variant.label}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {options.colors.map((color) => {
                return (
                  <Button
                    key={color.id}
                    size="md"
                    variant={variant.id}
                    color={color.id}
                    {...variant.additionalProps}
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
