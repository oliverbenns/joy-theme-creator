import React, { useEffect, useId } from "react";
import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import FormLabel from "@mui/joy/FormLabel";
import Link from "@mui/joy/Link";
import FormControl from "@mui/joy/FormControl";
import CloseIcon from "@mui/icons-material/Close";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/joy/styles";
import { ChromePicker, ColorChangeHandler } from "react-color";
import { Popover } from "react-tiny-popover";

interface ColorPickerProps {
  onChange?: (hex: string) => void;
  label?: string;
  value?: string;
  textFieldSx?: SxProps<Theme>;
  placeholder?: string;
  dropperValue?: string;
  onClear?: () => void;
}

const ColorPicker = (props: ColorPickerProps) => {
  const id = useId();

  return (
    <Box>
      {props.label && <FormLabel htmlFor={id}>{props.label}</FormLabel>}
      <Box sx={{ position: "relative" }}>
        <FormControl size="sm" id={id}>
          <Input
            sx={props.textFieldSx}
            value={props.value}
            onChange={(ev) => {
              if (props.onChange) {
                props.onChange(ev.target.value);
              }
            }}
            placeholder={props.placeholder}
            endDecorator={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                {props.value && (
                  <Link
                    component="button"
                    onClick={props.onClear}
                    color="neutral"
                    sx={{ fontSize: "xs" }}
                  >
                    <CloseIcon />
                  </Link>
                )}
                <Dropper value={props.dropperValue} onChange={props.onChange} />
              </Box>
            }
          />
        </FormControl>
      </Box>
    </Box>
  );
};

interface DropperProps {
  onChange?: (hex: string) => void;
  value?: string;
}

const Dropper = (props: DropperProps) => {
  const [value, setValue] = React.useState(props.value);
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const onChange: ColorChangeHandler = (val) => {
    setValue(val.hex);
  };

  const onChangeComplete: ColorChangeHandler = (val) => {
    setValue(val.hex);
    if (props.onChange) {
      props.onChange(val.hex);
    }
  };

  return (
    <Popover
      isOpen={isOpen}
      positions={["bottom", "left", "top", "right"]}
      onClickOutside={() => setIsOpen(false)}
      content={
        <Box sx={{ p: 0.5 }}>
          <Box
            sx={{
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "neutral.outlinedBorder",
              overflow: "hidden",
              borderRadius: (th) => th.radius.sm,
              boxShadow: (th) => th.shadow.md,
              mt: 1,
            }}
          >
            <ChromePicker
              color={value}
              onChange={onChange}
              onChangeComplete={onChangeComplete}
              disableAlpha
            />
          </Box>
        </Box>
      }
    >
      <Box
        component="button"
        onClick={() => setIsOpen(true)}
        sx={{
          width: 20,
          height: 20,
          display: "block",
          borderRadius: 10,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "neutral.outlinedBorder",
          boxSizing: "border-box",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <Box
          sx={{
            width: 16,
            height: 16,
            borderRadius: 8,
            background: props.value,
            margin: "1px",
          }}
        />
      </Box>
    </Popover>
  );
};

export default ColorPicker;
