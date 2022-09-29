import * as React from "react";
import Select, { SelectProps } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import options, { Variant } from "./options";

interface SelectVariant extends Variant {
  additionalProps?: Partial<SelectProps<string>>;
}

const selectVariants: SelectVariant[] = [];

options.variants.forEach((variant) => {
  selectVariants.push(variant, {
    ...variant,
    label: `${variant.label} disabled`,
    additionalProps: { disabled: true },
  });
});

const SelectSection = () => {
  return (
    <>
      {selectVariants.map((variant) => {
        return (
          <Box key={variant.label} sx={{ mb: 3 }}>
            <Typography component="span" level="body1" sx={{ mb: 1 }}>
              {variant.label}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {options.colors.map((color) => {
                return (
                  <Select
                    key={color.id}
                    variant={variant.id}
                    color={color.id}
                    defaultValue="lorem"
                    {...variant.additionalProps}
                  >
                    <Option value="lorem">Lorem</Option>
                    <Option value="ipsum">Ipsum</Option>
                    <Option value="dolor">Dolor</Option>
                  </Select>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default SelectSection;
