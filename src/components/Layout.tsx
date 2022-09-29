import * as React from "react";
import Box from "@mui/joy/Box";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => (
  <Box
    sx={{
      bgcolor: "background.appBody",
      display: "grid",
      gridTemplateColumns:
        "minmax(160px, 240px) minmax(600px, 1fr) minmax(300px, 420px)",
      minHeight: "100vh",
    }}
  >
    {props.children}
  </Box>
);

export default Layout;
