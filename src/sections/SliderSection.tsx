import * as React from "react";
import Slider, { SliderProps } from "@mui/joy/Slider";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import options, { Variant } from "./options";

interface SliderVariant extends Variant {
  additionalProps?: Partial<SliderProps>;
}

const sliderVariants: SliderVariant[] = [];

options.variants.forEach((variant) => {
  sliderVariants.push(variant, {
    ...variant,
    label: `${variant.label} disabled`,
    additionalProps: { disabled: true },
  });
});

const SliderSection = () => {
  return (
    <>
      {sliderVariants.map((variant) => {
        return (
          <Box key={variant.label} sx={{ mb: 3 }}>
            <Typography component="span" level="body1" sx={{ mb: 1 }}>
              {variant.label}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {options.colors.map((color) => {
                return (
                  <Box sx={{ width: 100 }}>
                    <Slider
                      key={variant.id}
                      color={color.id}
                      defaultValue={6}
                      max={10}
                      {...variant.additionalProps}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default SliderSection;
