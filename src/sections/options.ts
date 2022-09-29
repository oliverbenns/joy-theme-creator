import { DefaultColorPalette, DefaultVariantProp } from "@mui/joy/styles/types";

export interface Color {
  id: DefaultColorPalette;
  label: string;
}

const colors: Color[] = [
  { id: "primary", label: "Primary" },
  { id: "neutral", label: "Neutral" },
  { id: "danger", label: "Danger" },
  { id: "info", label: "Info" },
  { id: "success", label: "Success" },
  { id: "warning", label: "Warning" },
];

export interface Variant {
  id: DefaultVariantProp;
  label: string;
}

const variants: Variant[] = [
  { id: "solid", label: "Solid" },
  { id: "soft", label: "Soft" },
  { id: "outlined", label: "Outlined" },
  { id: "plain", label: "Plain" },
];

const options = { colors, variants };

export default options;
