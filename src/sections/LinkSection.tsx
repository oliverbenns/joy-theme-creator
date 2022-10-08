import * as React from "react";
import Link, { LinkProps } from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import options, { Variant } from "./options";

interface LinkVariant extends Variant {
  additionalProps?: Partial<LinkProps>;
}

const linkVariants: LinkVariant[] = [];

options.variants.forEach((variant) => {
  linkVariants.push(variant, {
    ...variant,
    label: `${variant.label} disabled`,
    additionalProps: { disabled: true },
  });
});

const LinkSection = () => {
  return (
    <>
      {linkVariants.map((variant) => {
        return (
          <Box key={variant.label} sx={{ mb: 2 }}>
            <Typography component="span" level="body1" sx={{ mb: 1 }}>
              {variant.label}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {options.colors.map((color) => {
                return (
                  <Link
                    key={color.id}
                    variant={variant.id}
                    color={color.id}
                    {...variant.additionalProps}
                  >
                    {color.label}
                  </Link>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default LinkSection;
