import * as React from "react";
import Slider, { SliderProps } from "@mui/joy/Slider";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import options, { Color } from "./options";

interface SliderVariant extends Color {
  additionalProps?: Partial<SliderProps>;
}

const sliderVariants: SliderVariant[] = [];

options.colors.forEach((color) => {
  sliderVariants.push(color, {
    ...color,
    label: `${color.label} disabled`,
    additionalProps: { disabled: true },
  });
});

const SliderSection = () => {
  return (
    <>
      <Box sx={{ display: "flex", gap: 2, mb: 3, columnCount: 2 }}>
        {sliderVariants.map((variant) => {
          return (
            <Box key={variant.label}>
              <Typography component="span" level="body1" sx={{ mb: 1 }}>
                {variant.label}
              </Typography>
              <Slider
                key={variant.id}
                color={variant.id}
                defaultValue={6}
                max={10}
                {...variant.additionalProps}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default SliderSection;
