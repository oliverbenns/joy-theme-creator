import * as React from "react";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";

const BreadcrumbsSection = () => {
  return (
    <Breadcrumbs size="md">
      <Link color="neutral">Lorem</Link>
      <Link color="neutral">Ipsum</Link>
      <Typography>Dolor</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsSection;
